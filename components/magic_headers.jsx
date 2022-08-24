//TODO
import { useContext } from 'preact/hooks';
import { createContext } from 'preact';
import register from 'preact-custom-element';

const HeadingLevel = createContext(0);

export let Section = ({ children }) => {
	let headingLevel = useContext(HeadingLevel);

	return <HeadingLevel.Provider value={headingLevel + 1}>{children}</HeadingLevel.Provider>;
}

export let Heading = ({ children }) => {
	let headingLevel = useContext(HeadingLevel);
	let HeaderTag = `h${headingLevel}`;
	return <HeaderTag>{children}</HeaderTag>;
}

export default {
	SectionCustomElement: register(Section, 'preact-mh-section', []),
	HeadingCustomElement: register(Heading, 'preact-mh-heading', [])
}
