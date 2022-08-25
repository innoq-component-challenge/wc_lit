import { BootstrapElement, html, unsafeHTML } from '../bootstrap_element.js';


class ListCard extends BootstrapElement {

	static properties = {
		headingLevel: { 
			type: Number,
			attribute: 'heading-level' 
		},
		href: String,
		heading: String
	}

	renderFooter() {
		if (this.querySelector("[slot=footer]")) {
			return html`<div class="card-footer"><slot name="footer"></slot></div>`
		}
	}

	renderTitle() {
		const headerContent = this.querySelector('[slot=heading]');
		const slot = headerContent ? '<slot name="heading"></slot>' : this.heading;
		const openingTag = `<h${ this.headingLevel } class="card-title">`;
		const closingTag = `</h${ this.headingLevel }>`;
		return `
		${ openingTag }
			${ this.href ? `<a href=${ this.href }>${ slot }</a>` : `${ slot }` }
		${ closingTag }
		`;
	}


	render() {
		return html`
		<section class="card">
			<div class="card-body">
				${ unsafeHTML(this.renderTitle()) }
				<p class="card-text"><slot></slot></p>
			</div>
			${ this.renderFooter() }
		</section>
		`;
	}
}

export default ListCard.register('lit-card');