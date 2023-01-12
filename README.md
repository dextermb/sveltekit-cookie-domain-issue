# Cookie domain issue

## Set up

Add some nested domain records to your `/etc/hosts` file, make sure to match the cookie options in `+page.svelte` with whatever you set.

```
127.0.0.1       local.com
127.0.0.1       one.local.com
127.0.0.1       two.one.local.com
```

## Usage

* API runs on `:3001`
* site runs on `:3000`
