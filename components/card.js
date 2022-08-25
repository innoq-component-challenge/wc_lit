import { BootstrapElement, html, unsafeHTML } from '../bootstrap_element.js';


class LitCard extends BootstrapElement {

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
		const slotContent = headerContent ? headerContent : this.heading;
		return html`
			<lit-card-header heading-level="${this.headingLevel}">
				<div slot="heading-inner">
					${ this.href ? html`<a href=${ this.href }>${ slotContent }</a>` : html`${ slotContent }` }
				</div>
			</lit-card-header>
		`;
	}

	render() {
		return html`
		<section class="card">
			<div class="card-body">
				${ this.renderTitle() }
				<p class="card-text"><slot></slot></p>
			</div>
			${ this.renderFooter() }
		</section>
		`;
	}
}

export default LitCard.register('lit-card');