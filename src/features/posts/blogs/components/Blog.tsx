import styled from "styled-components";
import theme from "../../../../styles/theme.ts";
import { BlogDict } from "../utils/BlogsTypes.ts";
import { BlogCategory } from "../utils/BlogsEnums.ts";

const BlogStyle = styled.div`
  text-align: center;
  border-radius: 20px;
  margin: 0 40px 20px 40px;
  padding: 10px 15px 10px 15px;
  outline-style: outset;
  outline-color: ${({ theme }) => theme.colors.tertiary};
  background-color:  ${({ theme }) => theme.colors.quarteriary};
  cursor: pointer;
`;

const Title = styled.h2`
    margin: 0;
    text-align: left;
`

const Intro = styled.p`
    margin: 0 0 5px 0;
    text-align: left;
`

const Category = styled.span`
    margin-right: 10px;
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSize.small};
`

export default function Blog(props: BlogDict) {
    return (
        <BlogStyle>
            <Title style={{ color: "white" }}>{props.title}</Title>
            <Intro>{props.intro}</Intro>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ textAlign: "left" }}>
                    {props.categories.map((category) => (
                        <Category>{BlogCategory[category]}</Category>
                    ))}
                </div>
                <div style={{ textAlign: "right", marginRight: "5px" }}>
                    <span style={{ fontSize: `${theme.fontSize.small}` }}>{props.date}</span>
                </div>
            </div>
        </BlogStyle>
    );
}
