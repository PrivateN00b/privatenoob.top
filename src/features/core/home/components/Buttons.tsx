import * as stylex from '@stylexjs/stylex';

const gap: string = "10px"

const scroll = stylex.keyframes({
    /* We need to remove the gap amount for seeing a stable animation reset */
    to: { transform: `translateX(calc(-100% - ${gap}))` },
});

const styles = stylex.create({
    innerButtons: {
        display: "flex",
        animationName: scroll,
        animationDuration: '10s',
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite',
        gap: gap,
    },
    buttonsDiv: {
        width: "100%", /* Ensure the container takes the full width */
        display: "flex",
        overflow: "hidden", /* Hide overflow */
        flexShrink: "0",
        marginBottom: {
            default: "20px",
            ["@media (max-width: 420px)"]: "10px"
        },
        gap: gap,
        height: "31px",
        
        ":hover > *": {
            animationPlayState: "paused"
        }
    },
    button: {
        width: "88px",
        height: "31px"
    }
});

export default function Buttons() {
    return (
        <div {...stylex.props(styles.buttonsDiv)}>
            <div {...stylex.props(styles.innerButtons)}>
                <img {...stylex.props(styles.button)} src="infos/buttons/tested-on-firefox.webp" alt="" loading="lazy"/>
                <img {...stylex.props(styles.button)} src="infos/buttons/animegay.gif" alt="" loading="lazy"/>
                <img {...stylex.props(styles.button)} src="infos/buttons/kde-now.gif" alt="" loading="lazy"/>
                <img {...stylex.props(styles.button)} src="infos/buttons/endeavouros.jpg" alt="" loading="lazy"/>
                <img {...stylex.props(styles.button)} src="infos/buttons/linux.webp" alt="" loading="lazy"/>
                <img {...stylex.props(styles.button)} src="infos/buttons/blockads.gif" alt="" loading="lazy"/>
                <img {...stylex.props(styles.button)} src="infos/buttons/miku3.gif" alt="" loading="lazy"/>
                <img {...stylex.props(styles.button)} src="infos/buttons/neo-fedi.gif" alt="" loading="lazy"/>
                <img {...stylex.props(styles.button)} src="infos/buttons/neocities_button.gif" alt="" loading="lazy"/>
                <img {...stylex.props(styles.button)} src="infos/buttons/old-net.gif" alt="" loading="lazy"/>
                <img {...stylex.props(styles.button)} src="infos/buttons/piracy.gif" alt="" loading="lazy"/>
                <img {...stylex.props(styles.button)} src="infos/buttons/seed.gif" alt="" loading="lazy"/>
                <img {...stylex.props(styles.button)} src="infos/buttons/steam.gif" alt="" loading="lazy"/>
            </div>

            {/* Content is duplicated to make the infinite scroll feeling work
            I don't want to use JS to generate the doubled content */}
            <div {...stylex.props(styles.innerButtons)}>
                <img {...stylex.props(styles.button)} src="infos/buttons/tested-on-firefox.webp" alt="" loading="lazy"/>
                <img {...stylex.props(styles.button)} src="infos/buttons/animegay.gif" alt="" loading="lazy"/>
                <img {...stylex.props(styles.button)} src="infos/buttons/kde-now.gif" alt="" loading="lazy"/>
                <img {...stylex.props(styles.button)} src="infos/buttons/endeavouros.jpg" alt="" loading="lazy"/>
                <img {...stylex.props(styles.button)} src="infos/buttons/linux.webp" alt="" loading="lazy"/>
                <img {...stylex.props(styles.button)} src="infos/buttons/blockads.gif" alt="" loading="lazy"/>
                <img {...stylex.props(styles.button)} src="infos/buttons/miku3.gif" alt="" loading="lazy"/>
                <img {...stylex.props(styles.button)} src="infos/buttons/neo-fedi.gif" alt="" loading="lazy"/>
                <img {...stylex.props(styles.button)} src="infos/buttons/neocities_button.gif" alt="" loading="lazy"/>
                <img {...stylex.props(styles.button)} src="infos/buttons/old-net.gif" alt="" loading="lazy"/>
                <img {...stylex.props(styles.button)} src="infos/buttons/piracy.gif" alt="" loading="lazy"/>
                <img {...stylex.props(styles.button)} src="infos/buttons/seed.gif" alt="" loading="lazy"/>
                <img {...stylex.props(styles.button)} src="infos/buttons/steam.gif" alt="" loading="lazy"/>
            </div>
        </div>
    );
}
