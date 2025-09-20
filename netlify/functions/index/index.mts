import { Context } from '@netlify/functions'
import { usePageContext } from "vike-react/usePageContext";

export default (request: Request, context: Context) => {
  try {
    return new Response(request.body)
  } catch (error: any) {
    return new Response(error.toString(), {
      status: 500,
    })
  }
}
