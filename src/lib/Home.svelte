<script>
import { getContext, onMount } from 'svelte'
import { fade, fly } from 'svelte/transition'
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
</script>

<main in:fly={{ x: 2000, duration: 400 }}>
<div class:on={true}>
    首页
    <slot></slot>
</div>

{#if user.login}
    <button in:fly={{ delay: 200, duration: 3000 }}  on:click={toggle}>login in</button>
{:else}
    <button in:fly={{ delay: 200, duration: 3000 }} on:click={toggle}>login out</button>
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
</main>