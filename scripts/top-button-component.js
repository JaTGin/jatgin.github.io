const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="../styles/top-btn-style.css" />
<a href="#top"><div class="top-btn"><div class="arrow"></div></div></a>
`;

class TopButtonComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.navbar = this.shadowRoot.querySelector(".navbar");
        this.hamburger = this.shadowRoot.querySelector(".hamburger");
        
    }

}

customElements.define('top-button-component', TopButtonComponent);