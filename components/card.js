import { BootstrapElement, html } from '../bootstrap_element.js';
import {unsafeHTML} from "https://unpkg.com/lit-html@latest/directives/unsafe-html.js?module";


class ListCard extends BootstrapElement {

	static get properties() {
		return {
			headingLevel: {type: Number, attribute: 'heading-level'},
			href: String,
			heading: String
		}
	}
	
	renderFooter() {
		if (this.querySelector("[slot=footer]")) {
		  return html`<div class="card-footer"><slot name="footer"></slot></div>`
		}
	}


	render() {
		// TODO!
		const Heading = `h${this.headingLevel}`;
		return html`
		<section class="card">
			<div class="card-body">
		  		<h2 class="card-title">
				${this.href ? html`<a href=${this.href}><slot name="heading"></slot></a>` : html`<slot name="heading"></slot>`}
				</h2>
				<p class="card-text"><slot></slot></p>
			</div>
			${this.renderFooter()}
		</section>
		`;
	}


}

export default ListCard.register('lit-card');
