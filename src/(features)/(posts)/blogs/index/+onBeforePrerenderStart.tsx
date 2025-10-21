export { onBeforePrerenderStart }

import pathNames from "../../../../utils/pathNames";
import { BlogProps } from "../utils/BlogsTypes";
import blogsJSON from "../utils/blogs.json";
 
async function onBeforePrerenderStart() {
  const blogs: BlogProps[] = JSON.parse(
              JSON.stringify(blogsJSON)
          ) as BlogProps[];

  /* This contains the prerendering config for the /blogs endpoint
  *  Apparently by providing blogs JSON content in pageContext, then data() won't be called in +data.ts
  *    NOTE: +data.ts file still need to exist for some reason
  *  Development environments don't use onBeforePrerenderStart so, this may cause inconsistencies between the 2 environments
  */
  const blogsListPage = {
    url: `/${pathNames.blogs}`,
    pageContext: {
      data: {
        blogs: JSON.parse(
              JSON.stringify(blogsJSON)
          ) as BlogProps[]
      }
    }
  }

  /* This contains the prerendering config for the /blogs/@id endpoints (so all blog pages)
  *  Apparently by providing blogs JSON content in pageContext, then data() won't be called in +data.ts
  *    NOTE: +data.ts file still need to exist for some reason
  *  Development environments don't use onBeforePrerenderStart so, this may cause inconsistencies between the 2 environments
  */
  const blogPages = blogs.map((blog) => {
      return {
        url: `/${pathNames.blogs}/${blog.to}`,
      }
    });

  return [
    blogsListPage,
    ...blogPages
  ]
}