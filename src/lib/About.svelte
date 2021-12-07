<script>
import { fade, fly } from 'svelte/transition'
export let id
</script>

<main in:fly={{ x: 2000, duration: 400}}>
    <div>这是关于我的页面{id}</div>
</main>

<style lang='scss'>
  
</style>