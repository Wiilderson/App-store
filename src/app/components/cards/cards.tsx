import { useDispatch } from 'react-redux';
import {
  Button,
  CardContainer,
  CardImage,
  Description,
  NamePrice,
} from './Styled';
import { addCart } from '@/app/Redux/Action';

interface Product {
  id: number;
  name: string;
  price: string;
  photo: string;
  description: string;
}

interface ProductListProps {
  products: Product[];
}

const Cards: React.FC<ProductListProps> = ({ products }) => {
  const dispatch = useDispatch();

  const addProductTocart = (item: Product) => {
    dispatch(addCart(item));
  };

  const formatPrice = (preco: any) => {
    const precoFloat = parseFloat(preco);

    const precoFormatado = precoFloat.toFixed(0);

    return precoFormatado;
  };
  return (
    <>
      {products.map((pro) => (
        <CardContainer key={pro.id}>
          <CardImage src={pro.photo} alt="teste" width={111} height={138} />
          <NamePrice>
            <p>{pro.name}</p>
            <div>
              <span>R${formatPrice(pro.price)}</span>
            </div>
          </NamePrice>

          <Description>
            <p>{pro.description}.</p>
          </Description>

          <Button onClick={() => addProductTocart(pro)}>COMPRAR</Button>
        </CardContainer>
      ))}
    </>
  );
};

export default Cards;
