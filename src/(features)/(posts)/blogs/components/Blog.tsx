import { BlogProps } from "../utils/BlogsTypes";
import { BlogCategory } from "../utils/BlogsEnums";
import * as stylex from '@stylexjs/stylex';
import { colors, fontSize } from "../../../../styles/tokens.stylex";
import { Link } from "../../../../components/link/Link";

const styles = stylex.create({
    blogDiv: {
        textAlign: 'center',
        borderRadius: '20px',
        margin: '0 40px 20px 40px',
        padding: '10px 15px 10px 15px',
        outlineStyle: 'outset',
        outlineColor: colors.tertiary,
        backgroundColor: colors.quarteriary,
    },
    title: {
        margin: 0,
        textAlign: 'left',
        color: 'white'
    },
    intro: {
        margin: '0 0 5px 0',
        textAlign: 'left',
        color: 'white',
    },
    category: {
        marginRight: '10px',
        color: colors.primary,
        fontSize: fontSize.small,
    },
    link: {
        textDecoration: 'none'
    }
})

export default function Blog(props: BlogProps) {
    return (
        <Link style={[styles.link]} href={"blogs/" + props.to}>
            <div {...stylex.props(styles.blogDiv)}>
                <h2 {...stylex.props(styles.title)}>{props.title}</h2>
                <p {...stylex.props(styles.intro)}>{props.intro}</p>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ textAlign: "left" }}>
                        {props.categories.map((category) => (
                            <span {...stylex.props(styles.category)} key={category}>{BlogCategory[category]}</span>
                        ))}
                    </div>
                    <div style={{ textAlign: "right", marginRight: "5px" }}>
                        <span style={{ fontSize: `${fontSize.small}` }}>{props.date}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
