import React, { useState, useRef, useEffect, Component } from 'react';
import PropTypes from 'prop-types';
import hljs from 'highlight.js/lib/highlight';   
import 'highlight.js/styles/hopscotch.css';      // import your preferred style

const registeredLanguages = {};   // keep a record of registered languages

function HighlightCode(props) {
    const [loaded, setLoaded] = useState(false)
    const codeNode = useRef(null)

    const highlight = () => {
        hljs.highlightBlock(codeNode.current);
    }

    useEffect(() => {
        const { language } = props;
        if (language && !registeredLanguages[language]) {
            try {
                const newLanguage = require(`highlight.js/lib/languages/${language}`);
                hljs.registerLanguage(language, newLanguage);
                registeredLanguages[language] = true;
                setLoaded(true)
            } catch (e) {
                console.error(e);
                throw Error(`Cannot register and higlight language ${language}`);
            }
        } else {
            setLoaded(true)
        }
    }, [props.language])

    useEffect(() => {
        loaded && highlight()
    })


    return (
        <div>
            {loaded
                ? <pre>
                    <code ref={codeNode} className={props.language}>{props.children}</code>
                </pre> : ''}
        </div>
    )
}

HighlightCode.propTypes = {
    children: PropTypes.node.isRequired,
    language: PropTypes.string,
};

HighlightCode.defaultProps = {
    language: 'javascript',
};

export default HighlightCode

