// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <nav className="body-container">
          {showLeftNavbar ? (
            <nav className="body-left-navbar-card">
              <h1 className="left-nav-bar-header">Left Navbar Menu</h1>
              <ul className="item-list-cards">
                <li className="items">
                  <p>Item 1</p>
                </li>
                <li className="items">
                  <p>Item 2</p>
                </li>
                <li className="items">
                  <p>Item 3</p>
                </li>
                <li className="items">
                  <p>Item 4</p>
                </li>
              </ul>
            </nav>
          ) : null}
          {showContent ? (
            <nav className="nav-content-card">
              <h1 className="content-header">Content</h1>
              <p className="content-description">
                Lorem ipsum dolor sit amet, consectetur adipisciing elit, sed to
                elusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </nav>
          ) : null}
          {showRightNavbar ? (
            <nav className="body-right-navbar-card">
              <h1 className="right-nav-bar-header">Right Navbar</h1>
              <ul className="right-nav-list-cards">
                <li className="right-nav-card">
                  <p>Ad 1</p>
                </li>
                <li className="right-nav-card">
                  <p>Ad 2</p>
                </li>
              </ul>
            </nav>
          ) : null}
        </nav>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
