// export const getCart = () => {
//   return fetch('https://dummyjson.com/carts/1').then((res) => res.json());
// };

// export const getCart = () => {
//   return fetch('https://fakestoreapi.com/products')
//     .then((res) => res.json())
//     .then((data) => console.log('data', data));
// };

export const getCart = () => {
  return fetch('https://fakestoreapi.com/products').then((res) => res.json());
};
