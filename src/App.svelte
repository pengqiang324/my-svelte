<svelte:head>
  <!-- Fonts -->
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
  />
</svelte:head>

<script>
  // import logo from './assets/svelte.png'
  import './index.scss'
  import { Router, Link, Route } from 'svelte-routing'
  import Counter from './lib/Counter.svelte'
  import Home from './lib/Home.svelte'
  import Test from './lib/Test'
  import About from './lib/About'

  function getProps({ isCurrent, isPartiallyCurrent, href, location }) {
    const isActive = href === "/" ? isCurrent : isPartiallyCurrent || isCurrent;

    // The object returned here is spread on the anchor element's attributes
    if (isActive) {
      return { class: "active" };
    }
    return {};
  }
</script>

<Router>
  <nav>
    <Link to="/" state="{{a:1, b:2}}"  getProps={getProps}>Home</Link>
    <Link to="Counter" replace>Counter</Link>
    <Link to="Test">Test</Link>
    <Link to="About/2">About</Link>
  </nav>
  <div>
    <Route path="/" let:location><Home location={location}/></Route>
    <Route path="Counter" component={Counter} />
    <Route path="Test" component={Test}/>
    <Route path="About/:id" let:params><About id={params.id}/></Route>
  </div>
  <footer class="active">底部内容</footer>
</Router>

<style lang="scss">
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
</style>
