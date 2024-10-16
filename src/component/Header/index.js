import {withRouter, Link} from 'react-router-dom'
import {ImHome} from 'react-icons/im'
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <nav className="header-container">
      <ul className="list-container">
        <li className="logo-container">
          <Link to="/" className="nav-link">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
              className="logo"
            />
          </Link>
        </li>
        <li className="nav-link-container">
          <Link to="/" className="nav-link">
            <ImHome className="nav-icon" />
            <h1 className="nav-to-name">Home</h1>
          </Link>
          <Link to="/jobs" className="nav-link">
            <h1 className="nav-to-name">Jobs</h1>
          </Link>
        </li>
        <li className="nav-button-container">
          <FiLogOut className="nav-icon" onClick={onClickLogout} />
          <button
            className="logout-button"
            type="button"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default withRouter(Header)
