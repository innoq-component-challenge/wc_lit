import { BootstrapElement, html, classMap } from '../bootstrap_element.js';

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
		const classes = { 'badge': true, 'bg-secondary': this.type !== 'danger', 'bg-danger': this.type === 'danger' };
		return html`<span class=${classMap(classes)}>${this.caption || html`<slot></slot>`}</span>`;
	}

}

export default LitBadge.register('lit-badge');
