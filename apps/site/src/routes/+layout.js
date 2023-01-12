
/** @type {import('./$types').LayoutLoad} */
export async function load ({ fetch }) {
  const r = await fetch('http://api.local.com:3001/api', { credentials: 'include' })

  return {
    serverSide: await r.json()
  }
}
