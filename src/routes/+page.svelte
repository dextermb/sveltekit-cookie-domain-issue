<section>
  <p>Cookie</p>
  <button on:click={setCookie}>
    Set cookie and reload
  </button>
</section>

<section>
  <p>Server side</p>
  <pre>{JSON.stringify(data.serverSide, null, 2)}</pre>
</section>

<section>
  <p>Client side</p>
  <button on:click={send}>
    Send
  </button>
  <pre>{JSON.stringify(clientSide, null, 2)}</pre>
</section>

<script>
  import * as cookie from 'cookie'

  /** @type {import('./$types').PageData} */
  export let data

  let clientSide = {}

  function setCookie () {
    document.cookie = (
      cookie.serialize('--example-cookie', 'hello, world!', {
        domain: '.local.com',
        path: '/',
        expires: new Date('01/01/2025')
      })
    )

    window.location.reload()
  }

  async function send () {
    const r = await fetch('/api', { credentials: 'include' })

    clientSide = await r.json()
  }
</script>
