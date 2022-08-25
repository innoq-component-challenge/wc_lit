import { BootstrapElement, html, unsafeHTML } from '../bootstrap_element.js';


class LitCardHeader extends BootstrapElement {

	static properties = {
		headingLevel: {
			type: String,
			attribute: 'heading-level'
		}
	}

	


	render() {
		const tag = `<h${ this.headingLevel } class="card-title"><slot name="heading-inner"></slot></h${ this.headingLevel }>`;
		return html`${unsafeHTML(tag)}`;
	}
}

export default LitCardHeader.register('lit-card-header');