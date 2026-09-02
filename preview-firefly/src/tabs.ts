// Progressively enhance actual pymdownx.tabbed alternate-style output.
export function enhanceTabs(root: ParentNode = document) {
  root.querySelectorAll<HTMLElement>('.tabbed-set').forEach((set,setIndex)=>{
    const radios=[...set.querySelectorAll<HTMLInputElement>(':scope > input[type=radio]')];
    const labels=[...set.querySelectorAll<HTMLElement>(':scope > .tabbed-labels > label')];
    const panels=[...set.querySelectorAll<HTMLElement>(':scope > .tabbed-content > .tabbed-block')];
    if(!labels.length||labels.length!==panels.length||radios.length!==labels.length)return;
    const list=labels[0].parentElement!;
    list.setAttribute('role','tablist'); list.setAttribute('aria-label','文档内容');
    const buttons=labels.map((label,i)=>{
      const button=document.createElement('button');button.type='button';button.textContent=label.textContent;
      button.id=`doc-tab-${setIndex}-${i}`;button.setAttribute('role','tab');
      panels[i].id=`doc-panel-${setIndex}-${i}`;
      button.setAttribute('aria-controls',panels[i].id);
      panels[i].setAttribute('role','tabpanel');panels[i].setAttribute('aria-labelledby',button.id);panels[i].tabIndex=0;
      label.replaceWith(button);radios[i].hidden=true;
      return button;
    });
    function select(index:number,focus=false){
      buttons.forEach((button,i)=>{const active=i===index;button.setAttribute('aria-selected',String(active));button.tabIndex=active?0:-1;panels[i].hidden=!active;radios[i].checked=active;});
      if(focus)buttons[index].focus();
    }
    buttons.forEach((button,i)=>{
      button.addEventListener('click',()=>select(i));
      button.addEventListener('keydown',event=>{
        const target=event.key==='ArrowRight'?(i+1)%buttons.length:event.key==='ArrowLeft'?(i+buttons.length-1)%buttons.length:event.key==='Home'?0:event.key==='End'?buttons.length-1:null;
        if(target!==null){event.preventDefault();select(target,true);}
      });
    });
    select(Math.max(0,radios.findIndex(r=>r.checked)));
  });
}
