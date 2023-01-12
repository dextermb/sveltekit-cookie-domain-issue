/** @type {import('@sveltejs/kit').HandleFetch} */
export function handleFetch({ event, request, fetch }) {
  if (request.url.includes('api.')) {
    request.headers.set('cookie', event.request.headers.get('cookie') ?? '')
  }

  return fetch(request)
}
