import logo from "./assets/discord-logo-white.png";
import menu from "./assets/menu-icon.png";
import background from "./assets/discord-background.png";

function HomePage() {
  return (
    <div className="main">
      <div className="navbar">
        <div>
          <img src={`${logo}`} className="logo" />
        </div>
        <div>
          <img src={`${menu}`} className="menu" />
        </div>
      </div>
      <div className="content">
        <h1 className="heading">IMAGINE A PLACE...</h1>
        <p className="paragraph">
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
        <div>
          <button className="btn-mac">Download for Mac</button>
        </div>
        <div>
          <button className="btn-browser">Open Discord in your browser</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
