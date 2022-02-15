import React, {useState, useCallback, useEffect} from 'react';
import { Menu, Close, Search, Person, LibraryBooks } from '@material-ui/icons';
import {Link} from '@material-ui/core'
import './css/nav.css';
const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [navScroll, setNavScroll] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  // const CloseFormHandler = () => {
  //     setOpenForm(false)
  // }
  // const openFormHandler = () => {
  //     setOpenForm(true)
  //     setOpenMenu(false)
  // }
  useEffect(() => {
    const scroll = () => setNavScroll(true);
    window.addEventListener('scroll', scroll);
    return () => {
      window.removeEventListener('scroll', scroll);
    };
  }, []);

  const scrollPositionHandler = () => {
    window.addEventListener('scroll', () => {
      if (window.scrollY === 0) {
        setNavScroll(false);
      }
    });
  };
  scrollPositionHandler();

  return (
    <>
      <div
        className={`nav ${navScroll && 'nav__scroll'} ${
          window.location.pathname !== '/' && 'nav__bg__color'
        }`}
        id="nav"
      >
        <div
          onClick={() => setOpenForm(false)}
          className={`${openForm && 'overlay'}`}
        ></div>

        <div
          onClick={() => setOpenMenu(false)}
          className={`${openMenu && 'nav__overlay'}`}
        ></div>
        <div
          onClick={() => setOpenMenu(true)}
          className={`nav__small ${openMenu && 'hideMenu'}`}
        >
            <span className='signup'>login</span>
          <Search className='search__bar' />
          <Menu className={`menu__icon ${navScroll && 'scroll__color'}`} />
        </div>
        <div className={`nav__container `}>
          <div className="nav__logo">
              <img src="https://resources.premierleague.com/premierleague/photo/2018/12/14/9471c442-77fd-4983-9c45-b4a2b93be44a/PL-Lion.png" alt="logo" />
          </div>
          <nav className={`nav__links ${openMenu && 'display__nav'} `}>
            <div onClick={() => setOpenMenu(false)} className="nav__close">
              <Close className="nav__icon" />
            </div>
            <div className="links">
              <ul className={`${navScroll && 'scroll__color'}`}>
              <Link>
                  <div className="ul__div ">
                    {' '}
                     <li>home </li>{' '}
                  </div>{' '}
                </Link>
                <Link>
                  <div className="ul__div ">
                    {' '}
                    <li>football</li>{' '}
                  </div>{' '}
                </Link>
                <Link>
                  <div className="ul__div ">
                    {' '}
                    <li>fixtures </li>{' '}
                  </div>{' '}
                </Link>
                <Link>
                  <div className="ul__div ">
                    {' '}
                    <li>news </li>{' '}
                  </div>{' '}
                </Link>
                <Link>
                  <div className="ul__div ">
                    {' '}
                    <li>contact </li>{' '}
                  </div>{' '}
                </Link>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Nav;
