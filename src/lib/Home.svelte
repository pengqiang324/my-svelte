<script>
import { getContext, onMount } from 'svelte'
import { navigate } from 'svelte-routing'
import Button, { Label } from '@smui/button';
export let location
let clicked = 0
const user = { login: true }
const List = [
    { id: 0, name: '张学友' },
    { id: 2, name: '刘德华' }
]
function toggle() {
    user.login = !user.login
}
function toTest() {
    navigate('/Test')
}
console.log(location)
</script>

<div class:on={true}>
    首页
    <slot></slot>
</div>

{#if user.login}
    <button on:click={toggle}>login in</button>
{:else}
    <button on:click={toggle}>login out</button>
{/if}

{#each List as item,i (item.id)}
    <div>
        <span>id: {item.id}, index: {i}</span>
        <span>姓名：{item.name}</span>
    </div>
{/each}

<button on:click={toTest}>跳转测试页</button>

<Button on:click={() => clicked++} variant="raised">
    <Label>按钮</Label>
</Button>

<h1>点击数量：{clicked}</h1>