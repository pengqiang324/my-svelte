<script>
import {  createEventDispatcher } from 'svelte'
import { count } from '../store/index'

const dispatch = createEventDispatcher()
function deIncrement() {
    count.update(n => n-1)
    dispatch('message', {
        data: '这是子元素传过去的值'
    })
}
</script>

<button on:click={deIncrement}>-</button>

<style lang='scss'>
  
</style>