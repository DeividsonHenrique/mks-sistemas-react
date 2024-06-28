import styled from "styled-components";
import { IoIosCloseCircle } from "react-icons/io";

const Check = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 600px;
  height: 100%;
  background: #0f52ba;
  z-index: 10000;
  padding: 30px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  transform: ${({ isVisible }) => isVisible ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.5s ease-in-out;
`;

const CloseBtn = styled(IoIosCloseCircle)`
  font-size: 2.5rem;
  border-radius: 50%;
  cursor: pointer;
  background-color: transparent;
`;

const Head = styled.div`
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

const Btn = styled.button`
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

const Valor = styled.div`
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

const Products = styled.div`
  background-color: transparent;
  width: 100%;
`;

const CardDiv = styled.div`
  position: relative;
  height: 100px;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
  margin: 10px auto;
  overflow: hidden;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

function CheckOut({ isVisible, onClose, cartItems }) {
  return (
    <>
      <Check isVisible={isVisible}>
        <Head>
          <h1>
            Carrinho <br /> de compras
          </h1>
          <CloseBtn onClick={onClose} />
        </Head>

        <Products>
          <CardDiv>
            <h2>Checkout</h2>
            {cartItems.length === 0 ? (
        <p>O carrinho está vazio</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              <img src={item.image} alt={item.name} width="50" />
              <div>
                <p>{item.name}</p>
                <p>Quantidade: {item.quantity}</p>
                <p>Preço: {item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
          </CardDiv>
        </Products>

        <Valor>
          <p>Total</p>
          <p>R$000</p>
        </Valor>

        <Btn>Finalizar Compra</Btn>
      </Check>
    </>
  );
}

export default CheckOut;
