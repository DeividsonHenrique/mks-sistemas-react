import {CartDiv, Head, Logo, CartIcon} from "./styles"


interface HeaderProps {
    onCartClick: () => void;
    cartCount: number;
  }
  
  const Header: React.FC<HeaderProps> = ({ onCartClick, cartCount }) => {
    return (
        <>
            <Head>
                <Logo>
                    <h1>MKS</h1>
                    <span>Sistemas</span>
                </Logo>
                <CartDiv onClick={onCartClick}>
                    <CartIcon />
                    <input type="button" value={cartCount} readOnly />
                </CartDiv>
            </Head>            
        </>
    )

}

export default Header