export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  cartQuantity: number;
};

export type ProductsState = {
  items: Product[];
  status: string | null;
};

export type CartState = {
  cartItems: Product[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
  status: string | null;
};
