
/** @type {import('./$types').LayoutLoad} */
export async function load ({ fetch }) {
  const r = await fetch('/api', { credentials: 'include' })

  return {
    serverSide: await r.json()
  }
}
