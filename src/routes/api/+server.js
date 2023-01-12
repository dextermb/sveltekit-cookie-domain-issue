import { parse } from 'cookie'

/** @type {import('./$types').RequestHandler} */
export async function GET ({ request }) {
  const cookie = parse(request.headers.get('cookie') ?? '')

  return new Response(
    JSON.stringify({
      cookie
    })
  )
}
