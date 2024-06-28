import styled from "styled-components";
import { IoIosCloseCircle } from "react-icons/io";
import Card from "../Card";

const Check = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 600px;
    height: 100%;
    background: #0F52BA;
    z-index: 10000;
    padding: 30px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    trasform: ${({isVisible}) => (isVisible ? 'translateX(0)' : 'translateX(100%)') };
    transition: transform 0.9s ease-in-out;
`

const CloseBtn = styled(IoIosCloseCircle)`
    font-size: 2.5rem;
    border-radius: 50%;
    cursor: pointer;
    background-color: transparent;
`

const Head = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: transparent;

        h1{
            background-color: transparent;
            color: white;
            font-size: 1.5rem;
        }
`

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
`

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

    p:first-child{
        margin-left: 50px;
        background-color: transparent;
        color: white;
    }

    p:last-child{
        margin-right: 50px;
        background-color: transparent;
        color: white;
    }
`

const Products = styled.div`
    background-color: transparent;
    width: 100%;

`

function CheckOut({isVisible, onClose}) {
    return (
        <>
        <Check style={{display: isVisible ? "block" : "none"}}>
            <Head>
                <h1>Carrinho <br /> de compras</h1>
                <CloseBtn onClick={onClose} />
            </Head>

            <Products>
                <Card/>
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

export default CheckOut