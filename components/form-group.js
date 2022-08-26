import { BootstrapElement, html, classMap } from '../bootstrap_element.js';

class LitFormGroup extends BootstrapElement {

	static properties = {
		id: String,
		label: String,
		type: String,
		name: String,
		value: String,
		error: String
	}

	render() {
		const classes = { 'form-control': true, 'is-invalid': this.error !== null };
		return html`
		<div class="field-group">
			<label for=${this.id} class="form-label">${this.label}</label>
			<input type=${this.type} id=${this.id} name=${this.name} value=${this.value} class=${classMap(classes)} />
			${this.error !== null ? html`<p class="invalid-feedback">${this.error}</p>` : ''}
		</div>
		`;
	}
}

export default LitFormGroup.register('lit-form-group');