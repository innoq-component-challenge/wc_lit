import 'https://cdnjs.cloudflare.com/ajax/libs/classnames/2.3.1/index.min.js';
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
		let cls = classNames("badge", TYPES[this.type] || TYPES['default']);
		return html`<span class=${cls}>${this.caption || html`<slot></slot>`}</span>`;
	}

}

export default LitBadge.register('lit-badge');
