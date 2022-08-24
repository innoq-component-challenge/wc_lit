import register from 'preact-custom-element';
import classNames from 'classnames';

export let Simple = ({type, id, label, name, value, error}) => {
	return <div class="field-group">
		<label for={id} class="form-label">{label}</label>
		<input type={type} id={id} name={name} value={value} class={classNames('form-control', error ? 'is-invalid' : '')} />
		{error ? <p class="invalid-feedback">{error}</p> : ''}
	</div>
}


let SimpleCustomElement = register(Simple, 'preact-form-group-simple', ['type', 'id', 'label', 'name', 'value', 'error']);

export default SimpleCustomElement;