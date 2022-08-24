//TODO
import { Fragment } from 'preact';
import register from 'preact-custom-element';
import classnames from 'classnames';

let formatChildren = (children, keyClass, valueClass) => {
    let items = [];
    let i = -1;
    children.forEach((child) => {
        if (child.type == "preact-list-dt") {
            i++;
            items[i] = {valueProps: {}, value: []}
            items[i].dt = <dt class={classnames(keyClass, child.props.class)} {...child.props.keyProps}>{child.props.children}</dt>;
        }
        else if (i >= 0 && child.type == "preact-list-dd") {
            items[i].dd = <dd class={classnames(valueClass, child.props.class)} {...child.props}>{child.props.children}</dd>
        }
        else {
            // Ignore everything outside `<preact-list-dt>` and `<preact-list-dd>`    
        }
    });

    return items.map(item => <Fragment>{item.dt}{item.dd}</Fragment>);
}

let List = ({ children, ratio = '1/3' }) => {
    const keyClass = 'col-md-3',
        valueClass = 'col-md-9', // TODO
        c = children.props.children; // Remove `<Slot>` element
    return <dl class="row">
        {formatChildren(c, keyClass, valueClass)} 
    </dl>
}

let ListCustomElement = register(List, 'preact-list', ['ratio', 'children']);


export default ListCustomElement;

