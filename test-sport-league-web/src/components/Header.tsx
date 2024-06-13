import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header: React.FC = () => {
  return (
    <Wrapper>
      <NavLink to='/'>
        <img src='/images/logo.svg' alt='logo' />
      </NavLink>
      <Menu>
        <li>
          <NavLink to='schedule'>
            <img src='/images/schedule.png' alt='schedule' />
            Schedule
          </NavLink>
        </li>
        <li>
          <NavLink to='leaderboard'>
            <img src='/images/leaderboard.png' alt='leaderboard' />
            Leaderboard
          </NavLink>
        </li>
      </Menu>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  background-color: var(--backgroundHeader);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 40px;
  font-size: 16px;

  img {
    height: auto;
    width: 110px;
  }
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 40px;

  a {
    color: var(--textMenu);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 10px;

    img {
      height: 25px;
      width: auto;
    }
  }
`;
