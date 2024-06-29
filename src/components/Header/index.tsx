import {CartDiv, Head, Logo, CartIcon} from "./styles"


// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Header({onCartClick}: any) {
    return(
        <>
            <Head>
                <Logo>
                    <h1>MKS</h1>
                    <span>Sistemas</span>
                </Logo>
                <CartDiv onClick={onCartClick}>
                    <CartIcon />
                    <input type="button" value="0" />
                </CartDiv>
            </Head>            
        </>
    )

}

export default Header