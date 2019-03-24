import React, { useState } from 'react';
import styled from '@emotion/styled';
import OutsideClickHandler from 'react-outside-click-handler';
import { Link } from 'react-router-dom';
import { ReactComponent as NavIcon } from '../assets/round-menu-24px.svg';

const NavToggle = styled.button`
  position: absolute;
  top: 1em;
  left: 1em;
  background: none;
  border: 0;
  cursor: pointer;
`;

const NavigationPanel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 1em 2em;
  background: #eee;
  border-right: 1px solid #ccc;
  box-shadow: 2px 0 6px rgba(0, 0, 0, 0.1);
  transform: ${({ show }) =>
    show ? 'translate(0, 0)' : 'translate(-100%, 0)'};
  transition: transform 0.15s ease-out;
  z-index: 1;
`;

const Links = styled.ul`
  padding: 0;
  list-style-type: none;
`;

const NavLink = styled(Link)`
  display: block;
  padding-bottom: 1em;
  color: #000;
`;

const FeedbackLink = styled.a`
  position: absolute;
  bottom: 1em;
  left: 2em;
  color: #000;
  font-size: 0.875em;
  text-decoration: none;
`;

const Nav = props => {
  const [show, setShow] = useState(false);

  return (
    <OutsideClickHandler onOutsideClick={() => setShow(false)}>
      <nav>
        <NavToggle onClick={() => setShow(true)}>
          <NavIcon /> Quizes
        </NavToggle>
        <NavigationPanel show={show}>
          <h2>Japanese Quizes</h2>
          <hr />
          <Links>
            <li>
              <NavLink to="/" onClick={() => setShow(false)}>
                Hiragana & Katakana
              </NavLink>
            </li>
            <li>
              <NavLink to="/adjectives" onClick={() => setShow(false)}>
                Adjectives
              </NavLink>
            </li>
            <li>
              <NavLink to="/verbs" onClick={() => setShow(false)}>
                Verbs - Basics
              </NavLink>
            </li>
            <li>
              <NavLink to="/verbs-more" onClick={() => setShow(false)}>
                Verbs - More
              </NavLink>
            </li>
            <li>
              <NavLink to="/numbers" onClick={() => setShow(false)}>
                Kanji - Numbers
              </NavLink>
            </li>
            <li>
              <NavLink to="/kanji-weekdays" onClick={() => setShow(false)}>
                Kanji - Weekdays
              </NavLink>
            </li>
          </Links>
          <FeedbackLink
            href="mailto:info@japanese-quiz.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Send feedback
          </FeedbackLink>
        </NavigationPanel>
      </nav>
    </OutsideClickHandler>
  );
};

export default Nav;
