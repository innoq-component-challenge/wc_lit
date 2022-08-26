import { BootstrapElement, html } from '../bootstrap_element.js';

const TYPES = {
	danger: "bg-danger",
	default: "bg-secondary"
};

class LitBadge extends BootstrapElement {

	static properties = {
		caption: String,
		type: String
	}

	render() {
		const type = TYPES[this.type] || TYPES.default;
		return html`<span class="badge ${type}">${this.caption || html`<slot></slot>`}</span>`;
	}

}

export default LitBadge.register('lit-badge');
