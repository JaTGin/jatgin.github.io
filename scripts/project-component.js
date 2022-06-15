const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="../styles/portstyle.css" />
<link rel="stylesheet" href="../styles/project-block-styles.css" />

<style>

</style>
<div class="project" id="projectone">
    <h2 class="title-block"></h2>
    <div class="image-block"></div>
    <p class="desc-block"></p>
    <p><strong>Project Type: </strong><span class="type-block"></span></p>
    <p><strong>Technologies Used:</p>
    <ul class="tech-block"></ul>
</div>
`;


class ProjectComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {

    }

    render() {
        const title = this.getAttribute('data-title') ? this.getAttribute('data-title') : "Name TBA"
        const image = this.getAttribute('data-image') ? this.getAttribute('data-image') : null;
        const description = this.getAttribute('data-desc') ? this.getAttribute('data-desc') : "Coming soon!";
        const type = this.getAttribute('data-projtype') ? this.getAttribute('data-projtype') : "Personal";
        const technologies = this.getAttribute('data-technologies') ? this.getAttribute('data-technologies') : null;
        const playable = this.getAttribute('data-playurl') ? this.getAttribute('data-playurl') : null;
        this.shadowRoot.querySelector(".title-block").innerHTML = title;
        
        this.shadowRoot.querySelector(".desc-block").innerHTML = description;
        this.shadowRoot.querySelector(".type-block").innerHTML = type;
        const techItems = technologies.split(',');
        for (let item of techItems) {
            this.shadowRoot.querySelector(".tech-block").innerHTML += `<li>${item}</li>`;
        }
        if (playable) {
            this.shadowRoot.querySelector(".image-block").classList.add('play-btn');
            this.shadowRoot.querySelector(".image-block").innerHTML = `<img src=${image} alt="gameplay image" class="bot-image"><div class="top-layer"><a href="${playable}"><h1>PLAY</h1></a></div>`;
        } else {
            this.shadowRoot.querySelector(".image-block").innerHTML = `<img src=${image} alt="gameplay image">`;
        }
    }
}

customElements.define('project-component', ProjectComponent);