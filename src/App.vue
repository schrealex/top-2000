<template>
  <div class="header">
    <div class="title">
      <h1>My Top 2000</h1>
    </div>
    <nav>
      <router-link to="/2019">2019</router-link>
      <router-link to="/2020">2020</router-link>
    </nav>
  </div>
  <router-view />
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Montserrat:900');

  html, body {
    margin: 0;
    padding: 0;
    background-color: #222222;
  }

  #app {
    font-family: 'Montserrat', Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #222222;

    display: flex;
    font-size: 1.2em;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  nav {
    padding: 10px 0;
  }

  nav a {
    font-weight: bold;
    color: goldenrod;
    margin: 0 10px;
  }

  nav a.router-link-exact-active {
    color: gold;
  }

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    width: 100%;

    .title h1 {
      margin: 10px 0;
    }
  }

  .left {
    margin-left: 100px;

    img {
      position: fixed;
      top: calc(50% - 254px);
      border: 8px solid #f3c500;
    }
  }

  h1 {
    -webkit-text-stroke: 2px #f3c500;
  }

  ul {
    width: 1300px;
    list-style: none;
    text-align: left;
    padding: 0;

    li {
      color: var(--mainColor);
      text-decoration: none;
      text-align: center;
      cursor: pointer;
      transition: 0.6s;
    }
  }

  :root {
    --mainColor: #808080;
  }

  li:hover {
    color: transparent;
    -webkit-text-stroke: 2px #f3c500;
    font-size: 1.9em;
  }

  @supports not(-webkit-text-stroke: 2px red) {
    li:hover {
      font-size: 2.2em;
      text-shadow: 3px 3px 0 var(--mainColor),
      -1px -1px 0 var(--mainColor),
      1px -1px 0 var(--mainColor),
      -1px 1px 0 var(--mainColor),
      1px 1px 0 var(--mainColor);
    }
  }

  .fade-enter-active {
    transition: opacity 2s ease-in-out;
  }

  .fade-enter-to {
    opacity: 1;
  }

  .fade-enter {
    opacity: 0;
  }
</style>
