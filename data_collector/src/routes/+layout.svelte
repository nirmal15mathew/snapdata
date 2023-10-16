<script>
  import "../app.css";
  import { pwaInfo } from 'virtual:pwa-info'; 
  // fix the virtual pwa info error - info availible in sveltekit pwa website
  

  $: webManifestLink = pwaInfo ? pwaInfo.webManifest.linkTag : '' 
</script>

<div>
  <slot />
</div>
  
<svelte:head> 
 	{@html webManifestLink} 
</svelte:head>