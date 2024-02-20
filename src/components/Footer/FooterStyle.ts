import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavLinkStyle = styled(NavLink)`
  color: blue;
  position: relative;

  &:hover::after {
    content: '';
    width: 80%;
    height: 1px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -2px;
    border-bottom: 1px solid red; 
  }

  &.active {
    color: red;
  }

  &.active::after {
    content: '';
    border: none;
  }
`;

export const FooterStyle = styled.footer`
  background-color: #90A2F1;
  
  div {
    display: flex;
    justify-content: space-between;
  }
  
  >div:nth-child(2) {
    display: flex;
    justify-content: center;
    padding: 5px;
    background-color: #768EF9;
    color: white;
  }
`;

export const NavStyle = styled.nav`
    width: 255px;
    height: 25px;
    margin: 10px 20px;

    ul {
        display: flex;
    
        li {
            list-style: none;
            a {
                margin-right: 5px;
                text-decoration: none;
            }
        }
    }
`;

export const BlockSocialStyle = styled.div`
  height: 24px;
  margin: 10px 20px;

  p {
    color: blue;
  }

  div {
    display: flex;
    align-items: center;
    
    a {
      margin-left: 10px;

      img {
        width: 24px;
      }
    }
   }
`;