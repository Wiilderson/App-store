import { actionTypes } from './Action';

interface Product {
  id: number;
  qty: number;
  name: string;
  price: string;
  photo: string;
  description: string;
}

interface CartState {
  cart: Product[];
}

interface Action {
  type: string;
  payload?: any;
}

export const handleCart = (
  state: CartState = { cart: [] },
  { type, payload }: Action
): CartState => {
  const product = payload;

  switch (type) {
    case actionTypes.ADDITEM:
      const exist = state.cart.find((x) => x.id === product.id);
      if (exist) {
        return {
          ...state,
          cart: state.cart.map((x) =>
            x.id === product.id ? { ...x, qty: x.qty + 1 } : x
          ),
        };
      } else {
        return {
          ...state,
          cart: [
            ...state.cart,
            {
              ...product,
              qty: 1,
            },
          ],
        };
      }

    case actionTypes.DELITEM:
      const exist1 = state.cart.find((x) => x.id === product.id);
      if (exist1 && exist1.qty === 1) {
        return {
          ...state,
          cart: state.cart.filter((x) => x.id !== product.id),
        };
      } else if (exist1) {
        return {
          ...state,
          cart: state.cart.map((x) =>
            x.id === product.id ? { ...x, qty: x.qty - 1 } : x
          ),
        };
      } else {
        return state;
      }

    case actionTypes.COMPRAFEITA:
      return {
        ...state,
        cart: [],
      };

    case actionTypes.DELITEMCART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== product),
      };

    default:
      return state;
  }
};
