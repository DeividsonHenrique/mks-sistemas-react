/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { SectionP, Wrapper, Card, PhotoDiv, Image, Info, Description, Btn } from "./styles";

function Produtos({onAddToCart}: any) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
        "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);



  const formatPrice = (price: string) => {
    return parseInt(price, 10)
  };

  return (
    <>
    <SectionP>
      <Wrapper>
      {products.map((product: any) => (
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
      </Wrapper>
      </SectionP>
    </>
  );
}

export default Produtos;
