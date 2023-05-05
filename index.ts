class Header extends HTMLElement {
    static define: any;

    static displayText() {
        let text = `
        Some text to render...
        `;

        (document.querySelector('app-root') as HTMLElement).innerHTML = text;
    }
    
}

Header.define('app-root', Header)

Header.displayText();