import { useEffect, useState } from 'react';
import {
  Button,
  CardImage,
  CartButton,
  CartIcon,
  CartModal,
  ContainerCards,
  ContentCard,
  HeaderContainer,
  Logo,
  MiniCard,
  Quantity,
} from './Styled';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/Redux/Store';
import { addCart, clearCart, delCart, dellItemCart } from '@/app/Redux/Action';

interface Product {
  id: number;
  name: string;
  price: string;
  photo: string;
  description: string;
}

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const state = useSelector((state: RootState) => state.handleCart);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const buyProductCart = (item: any) => {
    dispatch(clearCart(item));

    alert('Compra efetuada com sucesso');
    setIsModalOpen(!isModalOpen);
  };

  const formatPrice = (preco: any) => {
    const precoFloat = parseFloat(preco);

    const precoFormatado = precoFloat.toFixed(0);

    return precoFormatado;
  };

  const [total, setTotal] = useState<number | undefined>(undefined);

  useEffect(() => {
    setTotal(
      state.cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [state]);

  return (
    <>
      <HeaderContainer>
        <Logo>
          <h1>MKS</h1> <span>Sistemas</span>
        </Logo>
        <CartIcon onClick={handleButtonClick}>
          icon <span>{state.cart.length}</span>
        </CartIcon>
      </HeaderContainer>

      {isModalOpen && (
        <CartModal>
          <CartButton>
            <div className="headCart">
              <p>Carrinho de compras</p>
              <button onClick={handleButtonClick}>X</button>
            </div>
            <ContainerCards>
              {state.cart.map((item) => (
                <MiniCard key={item.id}>
                  <ContentCard>
                    <CardImage
                      src={item.photo}
                      alt="teste"
                      width={46}
                      height={57}
                    />
                    <div className="spaceCard">
                      <p>{item.name}</p>
                    </div>
                    <Quantity>
                      <span>Qty:</span>
                      <div className="buttons">
                        <button onClick={() => dispatch(delCart(item))}>
                          -
                        </button>
                        {item.qty}
                        <button onClick={() => dispatch(addCart(item))}>
                          +
                        </button>
                      </div>
                    </Quantity>
                    <div>
                      <p>R${formatPrice(item.price)}</p>
                    </div>
                  </ContentCard>
                  <button
                    className="small-button"
                    onClick={() => dispatch(dellItemCart(item.id))}
                  >
                    X
                  </button>
                </MiniCard>
              ))}
            </ContainerCards>
          </CartButton>

          <Button>
            <div>
              <p>Total:</p>
              <span>R${total}</span>
            </div>
            <button onClick={() => buyProductCart(state.cart)}>
              Finalizar compra
            </button>
          </Button>
        </CartModal>
      )}
    </>
  );
};

export default Header;
