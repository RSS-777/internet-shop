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
  
  >div {
    display: grid;
    grid-template: 1fr / 1fr 1fr;
    justify-content: space-between;

    @media (max-width: 580px) {
      grid-template: 1fr 1fr / 1fr;
    }
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
  display: flex;
  justify-content: flex-end;
  height: 24px;
  margin: 10px 20px;
  min-width: 320px;

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

        &:hover {
          box-shadow: 0 0 5px 0 black;
          border-radius: 50%;
        }

        @media (max-width: 480px) {
          width: 20px;
        }
      }

      @media (max-width: 776px) {
        margin-left: 25px;
      }

      @media (max-width: 580px) {
        margin-left: 10px;
      }

      @media (max-width: 380px) {
        margin-left: 8px;
      }
    }
   }

   @media (max-width: 776px){
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    height: 64px;
    min-width: 220px;
   }

   @media (max-width: 580px){
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    line-height: 10px;
    height: 24px;
    margin: 10px 10px;
   }
`;