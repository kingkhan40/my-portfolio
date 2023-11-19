import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import ScrollReveal from 'scrollreveal';

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const handleToggle = () => {
    setShowNav(!showNav);
  };

  const handleLinkClick = () => {
    setShowNav(false);
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__menu a');

    function scrollActive() {
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.href.includes(sectionId)) {
              link.classList.add('active');
            }
          });
        }
      });
    }

    window.addEventListener('scroll', scrollActive);

    // Scroll Reveal Initialization
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2000,
      delay: 200,
    });

    sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
    sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', {
      delay: 400,
    });
    sr.reveal('.home__social-icon', { interval: 200 });
    sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });

    return () => {
      window.removeEventListener('scroll', scrollActive);
    };
  }, []);

  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <Link to="home" className="nav__logo">
            Khan
          </Link>
        </div>

        <div className={`nav__menu ${showNav ? 'show' : ''}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link  to="home" className="nav__link active" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link to='about'
               className="nav__link" onClick={handleLinkClick}>
                About
              </Link>
            </li>
            <li className="nav__item">
              <Link to='skills' className="nav__link" onClick={handleLinkClick}>
                Skills
              </Link>
            </li>
            <li className="nav__item">
              <Link to='work' className="nav__link" onClick={handleLinkClick}>
                Work
              </Link>
            </li>
            <li className="nav__item">
              <Link to='contact' className="nav__link" onClick={handleLinkClick}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={handleToggle}>
          <i className={`bx ${showNav ? 'bx-x' : 'bx-menu'}`}></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
