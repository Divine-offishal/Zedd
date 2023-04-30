import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Types
import { State, Item } from "../Components/Types/types";


// Checking local strorage
const checkStorage: Array<any> = JSON.parse(
  localStorage.getItem("saved") || "null"
);

const initialState: State = {
  items: checkStorage || [],
};

const SavedItemSlice = createSlice({
  name: "SavedItemPage",
  initialState,
  reducers: {
    // Adding items
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

    // Clearing Cart
    clear: (state) => {
      state.items = [];
    },

    // Reducing qty of items
    reduce: (state, action: PayloadAction<Item>) => {
      const product = action.payload;

      const checkQty = product.qty;
      if (checkQty > 1) {
        const modifiedItem = state.items.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
        state.items = [...modifiedItem];
      } else {
        state.items.filter((x) => x.id === product.id);
      }
    },
  },
});

export default SavedItemSlice.reducer;
export const { added, clear, reduce } = SavedItemSlice.actions;
