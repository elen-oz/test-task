export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  cartQuantity: number;
};

export type CartProducts = Product[];

export type ProductsState = {
  items: CartProducts;
  status: string | null;
};

export type CartState = {
  cartProducts: CartProducts;
  cartTotalQuantity: number;
  cartTotalAmount: number;
  status: string | null;
};
