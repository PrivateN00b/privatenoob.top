import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"
import { BlogProps } from "../utils/BlogsTypes";
import BaseContentDiv from "../../../../components/div/BaseContentDiv";
import CenteredH1 from "../../../../components/text/CenteredH1";
import styled from "styled-components";
import StyledParagraph from "../../../../components/text/StyledParagraph";
import { BlogCategory } from "../utils/BlogsEnums";
import CenteredH2 from "../../../../components/text/CenteredH2";

const BlogParagraph = styled.p`
    text-align: left;
`

const Row = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 20px;

    div {
        display: inherit;
        margin: inherit;
    }
`

const LeftColumn = styled.div`
    width: 50%;
    border-right: 4px solid ${({ theme }) => theme.colors.secondary};
    border-bottom: 4px solid ${({ theme }) => theme.colors.secondary};
    justify-content: right;
`

const RightColumn = styled.div`
    width: 50%;
    border-left: 4px solid ${({ theme }) => theme.colors.secondary};
    border-bottom: 4px solid ${({ theme }) => theme.colors.secondary};
`


export default function BlogPage() {
    const location = useLocation();
    const [blog, setBlog] = useState<BlogProps | null>(null)
    
    useEffect(() => {
        setBlog(location.state as BlogProps)
    }, [])
    
    if (!blog) {
        return <div>Loading blog...</div>
    }
     
    /**
     * Decode each value in the content array of blog and display them
     * 
     * Examples: 
     *   
     * "/p;I'm a text OwO" -> <BlogParagraph.>I'm a text OwO</BlogParagraph.>
     * 
     * "/h2;I'm a text OwO" -> <CenteredH2.>I'm a text OwO</CenteredH2.>
     */
    const RenderContent = () => {
        /**
         * Applies the <strong.>, <Link> element to the val parameter if the line has those escape values
         */
        const ApplyElements = (splittedVal: string[]) => {
            if (splittedVal.length >= 4) {
                return <>{splittedVal[1]}<Link to={splittedVal[3]}>{splittedVal[4]}</Link></>
            } else {
                return splittedVal[0].includes("/s") ? 
                    <><strong>{splittedVal[1]}</strong>{splittedVal[1]}</> : 
                    <>{splittedVal[1]}{splittedVal[2]}</>
            }
        }

        /**
         * Render the list items (li) at once by iterating from the index of /ul until the idx of //ul
         */
        const RenderListItems = (i: number, listType: string) => {      
            // Find the idx where the closing list escape character is located.
            const eofListId: number = blog.content.slice(i, blog.content.length)
            .findIndex((valEOF) => valEOF === `//${listType}`)

            return blog.content.slice(i + 1, i + eofListId)
                    .map((valLi, j) => {
                        const splittedValLi = valLi.split(';');
                        return <li style={{ textAlign: "left" }} key={j}>
                            {ApplyElements(splittedValLi)}
                        </li>                                          
                    })
        }

        return (
            <div style={{ margin: "0 40px" }}>
                {blog.content.map((val, i) => {
                    const splittedVal = val.split(';');
                    // Check only the first escape value. Ex: /p/s => ['', 'p', 's']
                    switch (splittedVal[0].split('/')[1]) {
                        case "p":
                            return <BlogParagraph key={i}>{ApplyElements(splittedVal)}</BlogParagraph>;
                        case "h2":
                            return <CenteredH2 key={i}>{splittedVal[1]}</CenteredH2>;
                        case "ul":
                            return <ul key={i}>{RenderListItems(i, "ul")}</ul>;
                        case "ol":                            
                            return <ol key={i}>{RenderListItems(i, "ol")}</ol>;
                        default:
                            return null;
                    }
                })}
            </div>
        );
    }

    return <BaseContentDiv>
        <CenteredH1>{blog.title}</CenteredH1>

        <Row>
            <LeftColumn>
                <StyledParagraph>
                    <strong>Categories:</strong> {blog.categories.map((val, i) => {
                        return blog.categories.length === (i + 1) ? BlogCategory[val] : BlogCategory[val] + ", "
                    })}
                </StyledParagraph>
            </LeftColumn>
            <RightColumn>
                <StyledParagraph><strong>Updated:</strong> {blog.date}</StyledParagraph>
            </RightColumn>
        </Row>
        
        {RenderContent()}

        <CenteredH2>Sources</CenteredH2>
        <ul style={{ margin: "40px 20px", textAlign: "left" }}>
          {blog.sources.map((source) => (
            source["url"] ?
            <li>
              <a href={source["url"]}>{source["title"]}</a> Retrieved{" "}
              {source["retrieved"]}
            </li> 
            :
            <li>
              <p>{source["title"]}</p>
            </li>
          ))}
        </ul>
    </BaseContentDiv>
}