class ExpandElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quae necessitatibus voluptatibus quisquam quo odit eveniet error nostrum perspiciatis accusantium!";
  }

  disconnectedCallback() {}

  static get observedAttributes() {
    return [];
  }

  attributeChangedCallback(name, oldValue, newValue) {}

  adoptedCallback() {}
}

customElements.define("expand-menu", ExpandElement);
