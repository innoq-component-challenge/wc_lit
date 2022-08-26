import { BootstrapElement, html, Directive, directive, classMap } from '../bootstrap_element.js';

class LitButton extends BootstrapElement {

	static properties = {
		type: String,
		additionalClasses: {
			type: String,
			attribute: 'additional-classes'
		}
	}

	render() {
		const classes = { 'btn': true, 'btn-primary': this.type === 'cta', 'btn-secondary': this.type !== 'cta' };
		if (this.additionalClasses) {
			this.additionalClasses.split(" ").forEach(c => classes[c] = true);
		}
		console.log('👀', classes);
		return html`<button ${ attrs() } class="${classMap(classes)}"><slot></slot></button>`;
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