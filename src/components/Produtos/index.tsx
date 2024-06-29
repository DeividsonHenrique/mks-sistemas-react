/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import styled from "styled-components";

const Card = styled.div`
    position: relative;
    height: 300px;
    width: 250px;
    background-color: #ffffff;
    color: black; 
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);`

const PhotoDiv = styled.div`
    height: 55%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
   background-color: transparent;
`;

const Image = styled.img`
    height: 100%;
    object-fit: cover;
`

const Info = styled.div`
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;

     h1{
        font-size: 1.2rem;
        margin-left: 5px;
        background-color: transparent;
    }

    span{
        margin-right: 5px;
        font-size: .8rem;
        padding: 5px 10px;
        border-radius: 5px;
        background-color: #373737;
        color: white;
    }
`

const Description = styled.div`
    font-size: 0.7rem;
    width: 95%;
    height: 30px;
    margin: 0 auto;
    text-align: start;
    background-color: transparent;
`

const Btn = styled.button`
    background-color: #0F52BA;
    color: white;
    width: 100%;
    height: 35px;
    border: none;
    position: absolute;
    left: 0;
    bottom: 0;
    cursor: pointer;
`

function Produtos({onAddToCart}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
        "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);



  const formatPrice = (price) => {
    return parseInt(price, 10)
  };

  return (
    <>
      {products.map((product) => (
        <Card key={product.id} >
          <PhotoDiv>
            <Image src={product.photo} alt={product.name} />
          </PhotoDiv>
          <Info>
            <h1>{product.name}</h1>
            <span>R${formatPrice(product.price)}</span>
          </Info>
          <Description>{product.description}</Description>
          <Btn onClick={() => onAddToCart(product)}>Comprar</Btn>
        </Card>
      ))}
    </>
  );
}

export default Produtos;
