export const totalItem = (cart) => {
  return cart.reduce((sum, product) => sum + product.quantity, 0);
};

export const totalPrice = (cart) => {
  return cart.reduce(
    (total, product) => total + product.quantity * product.price,
    0
  );
};

const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const existingProduct = state.find((p) => p.id === action.product.id);
      if (existingProduct) {
        return state.map((p) =>
          p.id === action.product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        return [...state, { ...action.product, quantity: 1 }];
      }

    case "REMOVE":
      return state.filter((p) => p.id !== action.id);

    case "INCREASE_QUANTITY":
      return state.map((p) =>
        p.id === action.id ? { ...p, quantity: p.quantity + 1 } : p
      );

    case "DECREASE_QUANTITY":
      return state.map((p) =>
        p.id === action.id && p.quantity > 1
          ? { ...p, quantity: p.quantity - 1 }
          : p
      );

    default:
      return state;
  }
};

export default CartReducer;
