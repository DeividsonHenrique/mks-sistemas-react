import styled from "styled-components";

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
`

function Card(){
    return(
        <>
            <CardDiv>
                <div>image</div>
                <div>nome</div>
                <div>quantidade</div>
                <div>valor</div>
            </CardDiv>
        </>
    )
}

export default Card