<script>
import { Link } from 'svelte-routing'
export let to
export let state
export let replace

function getProps({ isCurrent, isPartiallyCurrent, href, location }) {
    const isActive = href === "/" ? isCurrent : isPartiallyCurrent || isCurrent
    // The object returned here is spread on the anchor element's attributes
    if (isActive) {
        return { class: "active" }
    }
    return {};
}
</script>

<Link to={to} state={state} replace={replace} getProps={getProps}>
    <slot></slot>
</Link>