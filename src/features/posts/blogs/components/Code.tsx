import * as stylex from '@stylexjs/stylex';
import { fontSize } from '../../../../styles/tokens.stylex';
import { useEffect } from 'react';
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
    useEffect(() => {
        hljs.highlightAll();  // Apply highlighting support
    }, [])

    return <pre {...stylex.props(styles.base)}>
        <code>{children}</code>
    </pre>
}