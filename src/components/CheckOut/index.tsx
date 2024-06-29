/* eslint-disable @typescript-eslint/no-explicit-any */
import { Check, Head, CloseBtn, Products, CardDiv, Empty, QuantityDiv, QuantityButton, RemoveItem, Valor, Btn} from "./styles";


function CheckOut({ isvisible, onClose, cartItems, onRemoveItem, onIncrementQuantity, onDecrementQuantity}: any) {

  const formatPrice = (price: string) => {
    return parseInt(price, 10)
  };

  return (
    <>
      <Check isvisible={isvisible}>
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
          {cartItems.map((item: any) => (
            <li key={item.id}>
              
              <img src={item.photo} alt="" width="50" />
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
          <p>R${formatPrice(cartItems.reduce((total: number, item: { price: number; quantity: number; }) => total + item.price * item.quantity, 0))}</p>
        </Valor>

        <Btn>Finalizar Compra</Btn>
      </Check>
    </>
  );
}

export default CheckOut;
