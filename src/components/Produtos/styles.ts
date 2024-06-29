import styled from "styled-components";

export const Card = styled.div`
    position: relative;
    height: 300px;
    width: 250px;
    background-color: #ffffff;
    color: black; 
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);`

export const PhotoDiv = styled.div`
    height: 55%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
   background-color: transparent;
`;

export const Image = styled.img`
    height: 100%;
    object-fit: cover;
`

export const Info = styled.div`
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

export const Description = styled.div`
    font-size: 0.7rem;
    width: 95%;
    height: 30px;
    margin: 0 auto;
    text-align: start;
    background-color: transparent;
`

export const Btn = styled.button`
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