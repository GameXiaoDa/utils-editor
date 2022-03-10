import E from 'wangeditor';
import HTMLMenu from './common-menu/htmlBtn';
const menuKey = 'htmlMenu';

E.registerMenu(menuKey, HTMLMenu);

const editor = new E('#toolbar-container', '#text-container');

editor.create();
