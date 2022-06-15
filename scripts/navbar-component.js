const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="../styles/nav-style.css" />
<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
/>
<div class="background-div"></div>
<div class="menu-toggle"><div class="hamburger"></div></div>
<nav class="navbar bottom-nav">
    <ul class="nav-list">
        <li class="nav-item">
            <a class="nav-link" href="#bio">
                About
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#projects">
                Projects
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#resume">
                Résumé
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#contact">
                Contact
            </a>
        </li>
    </ul>
</nav>

`;

class NavbarComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.navbar = this.shadowRoot.querySelector(".navbar");
        this.hamburger = this.shadowRoot.querySelector(".hamburger");
        
    }

    connectedCallback() {
        this.shadowRoot.querySelector(".menu-toggle").onclick = () => {
            this.shadowRoot.querySelector(".menu-toggle").classList.toggle("open");
            this.shadowRoot.querySelector(".background-div").classList.toggle("scaled-background");
            this.shadowRoot.querySelector(".navbar").classList.toggle("open-pressed");
        }
        window.onscroll = () => {
            if (window.pageYOffset > (document.querySelector("header").offsetHeight - this.navbar.offsetHeight)) {
                this.navbar.classList.remove('bottom-nav');
                this.navbar.classList.add('top-nav');
            } else {
                this.navbar.classList.add('bottom-nav');
                this.navbar.classList.remove('top-nav');
        
            }
        }
        this.render();
    }

    disconnectedCallback() {
    }

    render() {
        
    }
}

customElements.define('navbar-component', NavbarComponent);