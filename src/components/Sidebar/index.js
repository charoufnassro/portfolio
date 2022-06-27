import './index.scss'
import LogoT from '../../assets/images/Logo-t.png'
import LogoTubtitle from '../../assets/images/Logo-sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope, faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoT} alt="Logo" />
        <img className="sub-logo" src={LogoTubtitle} alt="slobodan" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#f2f2f2" />
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#f2f2f2" />
        </NavLink>
        <NavLink activeclassname="active" className="portfolio-link" to="/portfolio">
          <FontAwesomeIcon icon={faSuitcase} color="#f2f2f2" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#f2f2f2" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/nassereddine-charouf/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#f2f2f2" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/charoufnassro/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#f2f2f2" />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faYoutube} color="#f2f2f2" />
          </a>
        </li>
        <li>
          <a href="skype:live:test" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faSkype} color="#f2f2f2" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
