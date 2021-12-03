<script>
import { count } from '../store/index'

function reset() {
    count.set(0)
}
</script>

<button on:click={reset}>重置</button>

<div>
    <slot></slot>
</div>
<style lang='scss'>
button {
    width: 100px;
}  
</style>