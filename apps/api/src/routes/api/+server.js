import { parse } from 'cookie'

/** @type {import('./$types').RequestHandler} */
export async function GET ({ request }) {
  const cookie = parse(request.headers.get('cookie') ?? '')

  const response = new Response(JSON.stringify({ cookie }))

  response.headers.append(
    'Access-Control-Allow-Credentials',
    'true'
  )

  response.headers.append(
    'Access-Control-Allow-Origin',
    request.headers.get('origin') ?? 'http://local.com:3000'
  )

  return response
}
