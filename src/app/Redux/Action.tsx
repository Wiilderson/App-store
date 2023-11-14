export const actionTypes = {
  ADDITEM: 'ADDITEM',
  DELITEM: 'DELITEM',
  COMPRAFEITA: 'COMPRAFEITA',
  DELITEMCART: 'DELITEMCART',
};

interface Product {
  id: number;
  name: string;
  price: string;
  photo: string;
  description: string;
}

export const addCart = (product: Product) => {
  return {
    type: actionTypes.ADDITEM,
    payload: product,
  };
};

export const delCart = (product: Product) => {
  return {
    type: actionTypes.DELITEM,
    payload: product,
  };
};

export const clearCart = (product: Product) => {
  return { type: actionTypes.COMPRAFEITA, payload: product };
};

export const dellItemCart = (productId: number) => {
  return { type: actionTypes.DELITEMCART, payload: productId };
};
