import * as stylex from '@stylexjs/stylex';
import { fontSize } from '../../../../styles/tokens.stylex';
import { useEffect, useRef } from 'react';
import hljs from "../utils/highlightConfig.ts";

interface CodeProps {
    children: string
}

const styles = stylex.create({
    base: {
        textAlign: "left",
        padding: "0 20px",
        fontSize: fontSize.small
    }
})

export default function Code({ children }: CodeProps) {
    const codeRef = useRef<HTMLPreElement>(null);

    useEffect(() => {
        if (codeRef.current) {
            // Find the <code> element inside the <pre> element
            const codeElement = codeRef.current.querySelector('code');

            // Highlight the code segment if it hasn't been highlighted before
            if (codeElement && !codeElement?.dataset.highlighted) {
              hljs.highlightElement(codeElement);
            }
          }
    }, [])

    return <pre {...stylex.props(styles.base)} ref={codeRef}>
        <code>{children}</code>
    </pre>
}