var html = require('choo/html')

var TITLE = 'nodeschool berlin'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="sans-serif bg-light-yellow">
      <div class="tc pv4 center">
        <img class="w5" src="assets/logo.png" alt="logo" />
        <h1 class="b f1 f-headline-ns db mt0 mb0">nodeschool</h1>
        <h2 class="f2 f1-ns mt0">berlin</h2>
        <div class="f3">Friday November 10th @ Mozilla Berlin</div>
        <a href="https://ti.to/nodeschool-berlin/25" class="f3 link dim ba bw1 ph3 pv2 mv3 mb2 dib black">Sign up here</a>
      </div>
      <div class="cf mw8 center pb5">
        <div class="fl ph3 w-100 w-33-ns tc">
          <h3>Learn Coding</h3>
          Join us and learn coding with us. You are going to learn the basics of <a href="https://nodejs.org/">Node.js</a>. It's a plus if you know some JavaScript beforehand, but if not we can help you out.
        </div>
        <div class="fl ph3 w-100 w-33-ns tc">
          <h3>Self-Guided</h3>
          You will go through a set of self-paced challenges. No boring talks. All challenges are Open Source and available online on <a href="https://nodeschool.io" >nodeschool.io</a>. This means you can continue learning after the event.
        </div>
        <div class="fl ph3 w-100 w-33-ns tc">
          <h3>For Everyone</h3>
          We think coding is awesome and everyone should feel welcome at our event. This includes that we are expecting all participants to be awesome to each other and respect the <a href="https://github.com/nodeschool/berlin/blob/master/codeofconduct.md">Code of Conduct</a>.
        </div>
      </div>
    </body>
  `
}