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


const RemoveItem = styled(IoIosCloseCircle)`
  position: absolute;
  top: -5px;
  right: -5px;
  font-size: 1.5rem;
  border-radius: 50%;
  cursor: pointer;
  background-color: transparent;
`

const QuantityDiv = styled.div`
  display: flex;
  border: 1px solid #000000;
  border-radius: 5px;
  background-color: transparent;
  overflow: hidden;
`

const QuantityButton = styled.button`
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

const Empty = styled.p`
  text-align: center;
  color: #ffffff;
  background-color: transparent;
  font-size: 1.2rem;
`

function CheckOut({ isVisible, onClose, cartItems, onRemoveItem, onIncrementQuantity, onDecrementQuantity }) {

  const formatPrice = (price) => {
    return parseInt(price, 10)
  };

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
            {cartItems.length === 0 ? (
        <Empty>O carrinho está vazio</Empty>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              
              <img src={item.photo} alt={item.name} width="50" />
                <p>{item.name}</p>
                <QuantityDiv>
                <QuantityButton onClick={() => onDecrementQuantity(item.id)}>-</QuantityButton>
                <span>{item.quantity}</span>
                <QuantityButton onClick={() => onIncrementQuantity(item.id)}>+</QuantityButton>
                </QuantityDiv>
                <p>R${formatPrice(item.price)}</p>
                <RemoveItem onClick={() => onRemoveItem(item.id)} />
            </li>
          ))}
        </ul>
      )}
          </CardDiv>
        </Products>

        <Valor>
          <p>Total:</p>
          <p>R${formatPrice(cartItems.reduce((total, item) => total + item.price * item.quantity, 0))}</p>
        </Valor>

        <Btn>Finalizar Compra</Btn>
      </Check>
    </>
  );
}

export default CheckOut;
