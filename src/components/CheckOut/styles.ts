import styled from "styled-components";
import { IoIosCloseCircle } from "react-icons/io";

export const Check = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 600px;
  height: 100%;
  background: #0f52ba;
  z-index: 10000;
  padding: 30px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  transform: ${({ isvisible }: { isvisible: boolean }) => (isvisible ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.5s ease-in-out;
`;

export const CloseBtn = styled(IoIosCloseCircle)`
  font-size: 2.5rem;
  border-radius: 50%;
  cursor: pointer;
  background-color: transparent;
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;

  h1 {
    background-color: transparent;
    color: white;
    font-size: 1.5rem;
  }
`;

export const Btn = styled.button`
  background-color: #000000;
  color: white;
  width: 100%;
  height: 70px;
  border: none;
  position: absolute;
  left: 0;
  bottom: 0;
  cursor: pointer;
  font-size: 1.5rem;
`;

export const Valor = styled.div`
  position: absolute;
  bottom: 70px;
  left: 0;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: transparent;
  font-size: 1.5rem;
  font-weight: 600;

  p:first-child {
    margin-left: 50px;
    background-color: transparent;
    color: white;
  }

  p:last-child {
    margin-right: 50px;
    background-color: transparent;
    color: white;
  }
`;

export const Products = styled.div`
  background-color: transparent;
  width: 100%;
`;

export const CardDiv = styled.div`
  height: auto;
  width: 90%;
  background-color: transparent;
  margin: 10px auto;



  ul {
    margin-top: 30px;
    width: 100%;
    background-color: transparent;
  }

  li {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    list-style: none;
    background-color: #ffffff;
    margin: 20px 0;
    padding: 20px 0px;
    border-radius: 10px;

    p:nth-child(2) {
      max-width: 100px;
    }

    p:nth-child(3) {
      max-width: 50px;
    }

    p:nth-child(4) {
      max-width: 100px;
      font-weight: 700;
    }
  }
`;


export const RemoveItem = styled(IoIosCloseCircle)`
  position: absolute;
  top: -5px;
  right: -5px;
  font-size: 1.5rem;
  border-radius: 50%;
  cursor: pointer;
  background-color: transparent;
`

export const QuantityDiv = styled.div`
  display: flex;
  border: 1px solid #000000;
  border-radius: 5px;
  background-color: transparent;
  overflow: hidden;
`

export const QuantityButton = styled.button`
  padding: 0 5px;
  outline: none;
  border: none;
  cursor: pointer;

  &:first-child {
    border-right: 1px solid #3333;
    margin-right: 5px;
  }

  &:last-child {
    border-left: 1px solid #3333;
    margin-left: 5px;
  }
  
`;

export const Empty = styled.p`
  text-align: center;
  color: #ffffff;
  background-color: transparent;
  font-size: 1.2rem;
`