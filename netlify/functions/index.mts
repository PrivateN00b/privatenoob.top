import { Context } from '@netlify/functions'
import { renderPage } from "vike";

export default async (request: Request, context: Context) => {
  const pageContext = await renderPage({ urlOriginal: request.url });
  if (!pageContext.httpResponse) return { statusCode: 200 };
  // console.log(pageContext.httpResponse.body)
  // console.log(pageContext.httpResponse.statusCode)

  return new Response(request.url, {
    headers: { "Content-Type": pageContext.httpResponse.contentType },
    status: pageContext.httpResponse.statusCode
  })
}
