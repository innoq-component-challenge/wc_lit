import 'https://cdnjs.cloudflare.com/ajax/libs/classnames/2.3.1/index.min.js';
import { BootstrapElement, html, Directive, directive } from '../bootstrap_element.js';

const STYLES = {
	default: 'btn-secondary',
	cta: 'btn-primary'
};

class LitButton extends BootstrapElement {

	static properties = {
		type: String,
		additionalClasses: {
			type: String,
			attribute: 'additional-classes'
		}
	}

	render() {
		let cls = classNames('btn', STYLES[this.type] || STYLES.default, this.additionalClasses);
		return html`<button ${ attrs() } class=${ cls }><slot></slot></button>`;
	}


}

class AttributePassThrough extends Directive {
	update(part) {
		for (const attr of part.options.host.attributes) {
			// exclude class (since we set that ourselves) and any input properties to the component
			if (attr.name !== 'class' && LitButton.properties[attr.name] === undefined) {
				part.element.setAttribute(attr.name, attr.value);
			}
		}
		return '';
	}
}


const attrs = directive(AttributePassThrough);

export default LitButton.register('lit-button');