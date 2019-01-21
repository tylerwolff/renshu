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

const Badge = styled.span`
  display: inline-block;
  padding: 0.25em 0.5em;
  margin-left: 0.5em;
  background: #d1c4e9;
  font-size: 0.75em;
  border-radius: 2px;
`;

const Nav = props => {
  const [show, setShow] = useState(false);

  return (
    <OutsideClickHandler onOutsideClick={() => setShow(false)}>
      <nav>
        <NavToggle onClick={() => setShow(true)}>
          <NavIcon />
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
              <NavLink to="/numbers" onClick={() => setShow(false)}>
                Numbers
                <Badge>New</Badge>
              </NavLink>
            </li>
          </Links>
        </NavigationPanel>
      </nav>
    </OutsideClickHandler>
  );
};

export default Nav;
