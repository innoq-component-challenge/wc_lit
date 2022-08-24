import 'https://cdnjs.cloudflare.com/ajax/libs/classnames/2.3.1/index.min.js';
import { BootstrapElement, html } from '../bootstrap_element.js';

const STYLES = {
	default: 'btn-secondary',
	cta: 'btn-primary'
};

class LitButton extends BootstrapElement {

	static get properties() {
		return {
			type: String,
			additionalClasses: {
				type: String,
				attribute: 'additional-classes'
			}
		}
	}

	render() {
		let cls = classNames('btn', STYLES[this.type] || STYLES.default, this.additionalClasses);
		return html`<button class=${cls}><slot></slot></button>`;
	}


}

export default LitButton.register('lit-button');
