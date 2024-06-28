import styled from "styled-components";

const FooterDiv = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #EEEEEE;
    color: white;
    height: 40px;

    p{
        font-size: 0.8rem;
        background-color: transparent;
    }
`


function Footer(){
    return(
        <> 
            <FooterDiv>
                <p>MKS sistemas &copy; Todos os direitos reservados.</p>
            </FooterDiv>
        </>
    )
}

export default Footer