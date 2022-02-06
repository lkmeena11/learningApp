import styled, { css } from 'styled-components';

export const NavBar = styled.nav`
  background: #365a83;
  width: 100%;
  padding: 15px 0px;
`;

export const PageTitle = styled.div` 
  font-size: 24px;
  display: inline-block;
  color: #8ad6e7;
  margin-left: 15px;
`;

export const Menu = styled.ul` 
  display: inline-block;
  margin: 0px;
`;

export const MenuItem = styled.li`
  display: inline-block;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #fff;

  :last-child {
    border-right: none;
  }

  a {
    color: rgba(174, 221, 255, 0.6);
    font-size: 18px;
    text-decoration: none;

    :hover, &.active {
      color: #fff;
    }
  }
`;

export const Container = styled.div`
  width: 80%;
  margin: 15px auto;
`

export const ActionButtons = styled.div`
  text-align: right;
  display: block;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  box-shadow: 0 6px 12px rgba(0, 0, 0, .4);
  background: linear-gradient(135deg, #00c7c5 0%, #0088d7 100%);
  border-radius: 5px;
  box-shadow: none;
  padding: 3px 0px;
  font-size: 14px;
  color: #fff;
  margin: 0 1em;
  padding: 0.25em 1em;
  cursor: pointer;

  ${props =>
  props.active &&
  css`
    background: linear-gradient(135deg, #e32d76 0%, #648fe6 100%);
    color: white;
  `};
`;

export const CardsList = styled.div`
  display: block;
`;

export const Card = styled.div`
  display: inline-block;
  width: 30%;
  margin-right: 1%;
`;




