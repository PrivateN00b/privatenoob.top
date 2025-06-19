import * as stylex from '@stylexjs/stylex';
import { colors } from '../../styles/tokens.stylex';
import { MouseEventHandler } from 'react';

const styles = stylex.create({
  fediArrowRight: {
    height: "0px",
    width: "0px",
    borderColor: `${colors.secondary} ${colors.secondary} transparent transparent`,
    transform: "rotate(45deg)"
  },
  fediArrowLeft: {
    height: "0px",
    width: "0px",
    borderColor: `transparent transparent ${colors.secondary} ${colors.secondary}`,
    transform: "rotate(45deg)"
  },
  buttonNoStyle: {
    background: "none",
    border: "none",
    outline: "none",
    boxShadow: "none",
    cursor: "pointer"
  }
})

interface ArrowProps {
    href?: string,
    ariaLabel?: string,
    height?: number,
    direction?: string,
    onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>
}

export function Arrow({ href = "", ariaLabel = "", height = 15, direction = "left", onClick }: ArrowProps) {
    if (["left", "l"].includes(direction.toLowerCase())) {  // Check if direction is left or right
        return <a href={href} aria-label={ariaLabel} onClick={onClick}>
            <img src="/menu-right.svg" 
                alt={ariaLabel}
                {...stylex.props(styles.fediArrowRight)} 
                style={{ 
                    border: `${height}px solid`, 
                    borderColor: `transparent transparent ${colors.secondary} ${colors.secondary}`
                    }}/>
        </a>
    } else {
        return <a href={href} aria-label={ariaLabel} onClick={onClick}>
            <img src="/menu-right.svg" 
                alt={ariaLabel}
                {...stylex.props(styles.fediArrowRight)} 
                style={{ 
                    border: `${height}px solid`, 
                    borderColor: `${colors.secondary} ${colors.secondary} transparent transparent`
                    }}/>
        </a>
    }
}

export function ArrowButton({ height = 15, ariaLabel = "", direction = "left", onClick }: ArrowProps) {
    if (["left", "l"].includes(direction.toLowerCase())) {  // Check if direction is left or right
        return <button aria-label={ariaLabel} {...stylex.props(styles.buttonNoStyle)} onClick={onClick}>
            <img src="/menu-right.svg" 
                alt={ariaLabel}
                {...stylex.props(styles.fediArrowRight)} 
                style={{ 
                    border: `${height}px solid`, 
                    borderColor: `transparent transparent ${colors.secondary} ${colors.secondary}`
                    }}/>
        </button>
    } else {
        return <button aria-label={ariaLabel} {...stylex.props(styles.buttonNoStyle)} onClick={onClick}>
            <img src="/menu-right.svg" 
                alt={ariaLabel}
                {...stylex.props(styles.fediArrowRight)} 
                style={{ 
                    border: `${height}px solid`, 
                    borderColor: `${colors.secondary} ${colors.secondary} transparent transparent`
                    }}/>
        </button>
    }
}