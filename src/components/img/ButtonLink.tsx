import styled from "styled-components";

const ButtonLinkStyle = styled.img`
    cursor: pointer;
    margin: 0 5px 0 5px;
    width: 88px;
    height: 31px;
`

interface ButtonLinkProps {
    src: string;
    url: string;
    alt?: string;
}

export default function ButtonLink({ src, url, alt }: ButtonLinkProps) {
    return <ButtonLinkStyle 
            src={src}
            onClick={() => window.open(url)}
            alt={alt} />
}