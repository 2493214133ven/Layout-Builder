// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }
      const onChangeLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }
      const onChangeRightNavbar = () => {
        onToggleShowRightNavbar()
      }
      return (
        <nav className="configuration-controller-container">
          <nav className="configuration-controller-cards-container">
            <h1 className="configuration-header">Layout</h1>
            <div className="controller-cards-container">
              <div className="controller-cards">
                <input
                  checked={showContent}
                  onChange={onChangeContent}
                  className="input-ele"
                  id="content"
                  type="checkbox"
                />
                <label className="label-ele" htmlFor="content">
                  Content
                </label>
              </div>
              <div className="controller-cards">
                <input
                  checked={showLeftNavbar}
                  onChange={onChangeLeftNavbar}
                  className="input-ele"
                  id="left"
                  type="checkbox"
                />
                <label className="label-ele" htmlFor="left">
                  Left Navbar
                </label>
              </div>
              <div className="controller-cards">
                <input
                  checked={showRightNavbar}
                  onChange={onChangeRightNavbar}
                  className="input-ele"
                  id="right"
                  type="checkbox"
                />
                <label className="label-ele" htmlFor="right">
                  Right Navbar
                </label>
              </div>
            </div>
          </nav>
        </nav>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
