// Root-domain build by default; retain an explicit project-path preview mode.
export const site = 'https://wiki.meowopia.com';
export const base = process.env.OOWIKI_BASE || '/';
if (!['/', '/OOWiki/'].includes(base)) throw new Error('Unsupported OOWIKI_BASE');
