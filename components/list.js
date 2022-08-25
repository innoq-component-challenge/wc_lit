import { BootstrapElement, html, unsafeHTML } from '../bootstrap_element.js';


class LitList extends BootstrapElement {

	static properties = {
		ratio: String,
		children: {
            type: Object,
            attribute: 'children'
        },
        unsafe: Boolean
	}

    constructor() {
        super();
        this.ratio = "1:3";
        this.unsafe = false;
    }

    ratioClasses() {
        const parts = this.ratio.split(':').map(number => Number.parseInt(number));
        const sum = parts[0] + parts[1];
        const fraction = Math.floor(12 / sum);
        return { dtClass: `col-sm-${parts[0] * fraction}`, ddClass: `col-sm-${parts[1] * fraction}`}
    }

	render() {
        const { ddClass, dtClass } = this.ratioClasses();
        const itemTemplates = [];
        for (const key of Object.keys(this.children)) {
            itemTemplates.push(html`
            <dt class="${ dtClass }">${ key }</dt>
            ${ this.unsafe ? html`<dd class="${ ddClass }">${ unsafeHTML(this.children[key]) }</dd>` : html`<dd class="${ ddClass }">${ this.children[key] }</dd>`}
        `);
        }
		return html`
        <dl class="row">
        ${itemTemplates}
		</dl>
		`;
	}
}

export default LitList.register('lit-list');