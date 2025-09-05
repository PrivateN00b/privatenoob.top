export default Page

import { BlogCategory } from "../utils/BlogsEnums.js";
import * as stylex from '@stylexjs/stylex';
import { colors } from "../../../../styles/tokens.stylex.js";
import { BlogProps } from "../utils/BlogsTypes.js";
import { useData } from "vike-react/useData";
import { bContD } from '../../../../components/div/BaseContentDiv.jsx';
import { CenteredH1, CenteredH2 } from "../../../../components/text/CenteredHeaders.jsx";
import StyledParagraph from "../../../../components/text/StyledParagraph.jsx";
import Code from "../components/Code.jsx";
import { usePageContext } from "vike-react/usePageContext";

const styles = stylex.create({
    blogParagraph: {
        textAlign: 'left',
    },
    row: {
        display: 'flex',
        justifyContent: 'center',
        margin: '0 20px',
    },
    rowDiv: {
        display: 'inherit',
        margin: 'inherit',
    },
    leftColumn: {
        width: '50%',
        borderRight: `4px solid ${colors.secondary}`,
        borderBottom: `4px solid ${colors.secondary}`,
        justifyContent: 'right',
    },
    rightColumn: {
        width: '50%',
        borderLeft: `4px solid ${colors.secondary}`,
        borderBottom: `4px solid ${colors.secondary}`,
    }
})

function Page() {
  const blog = useData<BlogProps>();

  const RenderContent = () => {
          /**
           * Applies the <strong.>, <Link> element to the val parameter if the line has those escape values
           */
          const ApplyElements = (splittedVal: string[]) => {
              if (splittedVal.length >= 4) {
                  return <>{splittedVal[1]}<a href={splittedVal[3]}>{splittedVal[4]}</a></>
              } else {
                  return splittedVal[0].includes("/s") ? 
                      <><strong>{splittedVal[1]}</strong>{splittedVal[2]}</> : 
                      <>{splittedVal[1]}{splittedVal[2]}</>
              }
          }
  
          /**
           * Render the list items (li) at once by iterating from the index of /ul until the idx of //ul
           */
          const RenderListItems = (i: number, listType: string) => {      
              // Finds out how many iteration it is needed to reach the escape character, like //ul
              const eofListId: number = blog.content.slice(i, blog.content.length)
              .findIndex((valEOF) => valEOF === `//${listType}`)
  
              return blog.content.slice(i + 1, i + eofListId)
                      .map((valLi) => {
                          const splittedValLi = valLi.split(';');
                          return <li style={{ textAlign: "left" }} key={blog.content.indexOf(valLi)}>
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
                              // Keys can be left with indexes because BlogPage is meant to be read, and not interacted with
                              return <p {...stylex.props(styles.blogParagraph)} key={i}>{ApplyElements(splittedVal)}</p>;
                          case "h2":
                              return <CenteredH2 key={i}>{splittedVal[1]}</CenteredH2>;
                          case "ul":
                              return <ul key={i}>{RenderListItems(i, "ul")}</ul>;
                          case "ol":                            
                              return <ol key={i}>{RenderListItems(i, "ol")}</ol>;
                          case "c":
                              return  <Code key={i}>{splittedVal[1]}</Code>;
                          case "b64":
                              return <img style={{ width: "70%" }} src={splittedVal[1] + ';' + splittedVal[2]} />
                          default:
                              return null;
                      }
                  })}
              </div>
          );
      }

    return <div {...stylex.props(bContD.base)}>
        <CenteredH1>{blog.title}</CenteredH1>

        <div {...stylex.props(styles.row)}>
            <div {...stylex.props(styles.leftColumn)}>
                <StyledParagraph>
                    <strong>Categories:</strong> {blog.categories.map((val, i) => {
                        return blog.categories.length === (i + 1) ? BlogCategory[val] : BlogCategory[val] + ", "
                    })}
                </StyledParagraph>
            </div>
            <div {...stylex.props(styles.rightColumn)}>
                <StyledParagraph><strong>Updated:</strong> {blog.date}</StyledParagraph>
            </div>
        </div>
        
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
    </div>
}