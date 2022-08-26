import { BootstrapElement, html, unsafeHTML } from '../bootstrap_element.js';


class LitMagicHeader extends BootstrapElement {

	connectedCallback() {
		super.connectedCallback();
		this.level = this.determineLevel();
	}

	determineLevel() {
		let count = 0;
		let node = this;
		do {
			if (node.nodeName === 'LIT-MH-SECTION') {
				count = count + 1;
			}
			node = node.parentNode;
		} while (node !== null);
		return count;
	}

	render() {
		const tag = `<h${ this.level }><slot></slot></h${ this.level }>`;
		return html`${ unsafeHTML(tag) }`;
	}
}

export default LitMagicHeader.register('lit-mh-heading');