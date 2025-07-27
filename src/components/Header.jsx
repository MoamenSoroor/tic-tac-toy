import logo from '../assets/logo.svg'; // Adjust path to where your image actually is


export function Header({gameObj}) {
  return (
    <header className="app-header">
      <h2 className="logo-part">  <img src={logo} alt="logo" width="100px" /> XO Game  </h2>
      <div className="play-count-info">{!gameObj.start ? "" : "You Played " + gameObj.startCount + " times"}</div>
      {/* <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav> */}
    </header>
  )
}