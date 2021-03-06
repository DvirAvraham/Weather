import {NavLink} from 'react-router-dom';
import {useState} from 'react';
import {withRouter} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {toggleImperial, toggleDarkMode} from '../store/actions/WeatherActions';
import sunny from '../assets/imgs/sunny.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faMoon,
  faSun,
  faTemperatureHalf,
} from '@fortawesome/free-solid-svg-icons';

function _AppHeader({history}) {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(null);

  const {isImperial} = useSelector((state) => state.WeatherModule);

  const toggleIsImperial = () => {
    dispatch(toggleImperial());
  };
  const toggleIsDark = () => {
    dispatch(toggleDarkMode());
  };
  const back = () => {
    history.push('/');
  };

  return (
    <section className="app-header">
      <div className=" app-header header-container main-layout flex space-between align-center">
        <div className="logo-container">
          <h1 onClick={back} className="logo">
            Weather
          </h1>
          <img src={sunny} alt="" />
        </div>
        <nav className={`${isOpen ? 'open' : ''}`}>
          <button onClick={toggleIsImperial} className="unit">
            <FontAwesomeIcon icon={faTemperatureHalf} className="fa-temp" />
            <span className="desc"> °{isImperial ? 'C' : 'F'}</span>
          </button>
          <div className="toggle-dark">
            <input
              type="checkbox"
              className="checkbox"
              id="checkbox"
              onClick={toggleIsDark}
            />
            <label htmlFor="checkbox" className="label">
              <FontAwesomeIcon icon={faMoon} className="fa-moon" />
              <FontAwesomeIcon icon={faSun} className="fa-sun" />
              <div className="ball" />
            </label>
          </div>
          <NavLink
            activeClassName="my-active"
            exact
            to="/"
            onClick={() => setIsOpen(null)}
          >
            Home
          </NavLink>
          <NavLink
            activeClassName="my-active"
            to="/favorite"
            onClick={() => setIsOpen(null)}
          >
            Favorites
          </NavLink>
        </nav>
        <div
          className={`nav-bg ${isOpen ? 'apply' : ''}`}
          onClick={() => setIsOpen(null)}
        ></div>
        <button
          className={`menu ${isOpen ? 'opened' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Main Menu"
        >
          <svg width="100" height="100" viewBox="0 0 100 100">
            <path
              className="line line1"
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path className="line line2" d="M 20,50 H 80" />
            <path
              className="line line3"
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

export const AppHeader = withRouter(_AppHeader);
