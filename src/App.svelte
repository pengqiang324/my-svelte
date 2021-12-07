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
  import { Router, Route } from 'svelte-routing'
  import Link from './component/Link'
  import Counter from './lib/Counter'
  import Home from './lib/Home'
  import Test from './lib/Test'
  import About from './lib/About'
</script>

<Router>
  <nav>
    <Link to="/" state="{{a:1, b:2}}">Home</Link>
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
  <!-- <footer class="active">底部内容</footer> -->
</Router>

<style lang="scss">
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
</style>
