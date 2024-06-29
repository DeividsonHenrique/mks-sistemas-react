import { TiShoppingCart as Cart } from "react-icons/ti";
import styled from "styled-components";

export const Head = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: #0f52ba;
  padding: 0 20px;
  z-index: 1000;
`;

export const Logo = styled.div`
  display: inline-flex;
  align-items: end;
  gap: 5px;
  background-color: transparent;
  margin-left: 50px;
  cursor: pointer;

  h1 {
    font-size: 2rem;
    font-weight: 500;
    background-color: transparent;
    color: white;
  }
  span {
    font-size: 1rem;
    font-weight: 300;
    background-color: transparent;
    color: white;
    margin-bottom: 6px;
  }
`;

export const CartDiv = styled.div`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 15px;
  border-radius: 5px;
  margin-right: 50px;
  cursor: pointer;

  input {
    outline: none;
    border: none;
    background-color: transparent;
    font-size: 1rem;
    font-weight: 600;
  }
`;

export const CartIcon = styled(Cart)`
  color: #0f52ba;
  font-size: 1.1rem;
  font-weight: 900;
`;
