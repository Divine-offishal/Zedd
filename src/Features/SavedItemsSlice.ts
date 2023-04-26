import { createSlice, PayloadAction } from "@reduxjs/toolkit";




// Types
type Item = {
  id: number
  name: string
  image: string
  qty: number
};
type State = {
  items: Item[];
};


// Checking local strorage
const checkStorage: Array<any> = JSON.parse(localStorage.getItem('saved') || 'null')


const initialState: State = {
  items: checkStorage || [],
};

const SavedItemSlice = createSlice({
  name: "SavedItemPage",
  initialState,
  reducers: {
    added: (state, action: PayloadAction<Item>) => {
      const product = action.payload;
      
      const isAdded = state.items.find((x) => x.id === product.id);
      if (isAdded) {
        const modifiedItem = state.items.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
        state.items = [...modifiedItem];
      } else {
        state.items = [...state.items, { ...product, qty: 1 }];
      }
    },
  },
});

export default SavedItemSlice.reducer
export const {added} = SavedItemSlice.actions
