import styled from "styled-components";

const ButtonLinkStyle = styled.img`
    cursor: pointer;
    margin: 0 5px 0 5px;
`

interface ButtonLinkProps {
    src: string;
    url: string
}

export default function ButtonLink({ src, url }: ButtonLinkProps) {
    return <ButtonLinkStyle 
            src={src}
            onClick={() => window.open(url)} />
}