export type Item = {
  id: number;
  name: string;
  image: string;
  qty: number;
  price: number;
}


export type State = {
  items: Item[];
}