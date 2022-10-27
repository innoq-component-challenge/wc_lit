import { BootstrapElement, html, unsafeHTML } from '../bootstrap_element.js';


class LitList extends BootstrapElement {

    static properties = {
        ratio: String,
        children: {
            type: Object,
            attribute: 'children'
        }
    }

    constructor() {
        super();
        this.ratio = "1:3";
        this.children = {};
    }

    ratioClasses() {
        const parts = this.ratio.split(':').map(number => Number.parseInt(number));
        const sum = parts[0] + parts[1];
        const fraction = Math.floor(12 / sum);
        return { dtClass: `col-sm-${parts[0] * fraction}`, ddClass: `col-sm-${parts[1] * fraction}` }
    }

    addItem(key, value) {
        this.children[key] = value;
        this.requestUpdate();
    }

    addSlotItem(key, slotId) {
        this.children[key] = slotId;
        this.requestUpdate();
    }

    connectedCallback() {
        super.connectedCallback();
        console.log(this.children);
        [...this.querySelectorAll('lit-list-item')].forEach((item) => {
            let slotId = Math.round(Math.random() * 10000);
            item.setAttribute("slot", `slot_${slotId}`)
            this.addItem(item.getAttribute('key'), slotId);
        });
    }

    render() {
        const { ddClass, dtClass } = this.ratioClasses();
        const itemTemplates = [];
        for (const key of Object.keys(this.children)) {
            if (typeof this.children[key] == 'number') {
                itemTemplates.push(html`
                    <dt class="${dtClass}">${key}</dt>
                    <dd class="${ddClass}"><slot name='slot_${this.children[key]}'></slot></dd>`);
            }
            else {
                itemTemplates.push(html`
                    <dt class="${dtClass}">${key}</dt>
                    <dd class="${ddClass}">${this.children[key]}</dd>`);
            }
        }
        return html`
            <dl class="row">
            ${itemTemplates}
		    </dl>`;
    }
}

export default LitList.register('lit-list');
