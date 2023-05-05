"use strict";
class Header extends HTMLElement {
    static displayText() {
        let text = `
        Some text to render lkl...
        `;
        document.querySelector('app-root').innerHTML = text;
    }

    static loadStyleSheet() {
        let styleSheet = document.createElement('link');
        styleSheet.href='./style.css';
        styleSheet.rel='stylesheet';
        styleSheet.type='text/css';
        const head = document.querySelector('head');

        head.append(styleSheet);
    }
}
Header.displayText();
Header.loadStyleSheet();
Header.define('app-root', Header);

