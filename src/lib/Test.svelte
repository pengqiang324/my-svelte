<script>
import { count } from '../store/index'
import Reset from './Reset.svelte'
import Increment from './AddCount.svelte'
import Decrement from './DelCount.svelte'

let count_value = 0
const unSubscribe = count.subscribe(n => {
    count_value = n
})

let childData = ''
function handleMessage(e) {
    childData = e.detail.data
}

console.log(this)
</script>

<h1>The count is {count_value}</h1>
<h2>Auto update {$count}</h2>
<h2>子组件传来的值：{childData}</h2>

<Decrement on:message={handleMessage}></Decrement>
<Increment></Increment>
<Reset>
    <p>这是插槽</p>
</Reset>