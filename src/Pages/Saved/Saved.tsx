import React from "react";
import SavedCard from "./SavedCard";
import EmptyPage from "./EmptyPage";
import { useAppSelector, useAppDispatch } from "../../App/hooks";
import { clear } from "../../Features/SavedItemsSlice";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const Saved = () => {
  const stateArray = useAppSelector((state) => state.savedItemReducer.items);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    signOut(auth)
    .then(() => {
      console.log('Signed out')
    })
    .catch(() => {
      console.error('Sorry... You are stuck here')
    })
  }

  return (
    <div className="w-screen h-auto mt-32 flex flex-col justify-center">
      <h1 className="my-4 text-center text-3xl text-secondary">Saved Items</h1>
      {/* Is length greater than 0? Show sSavedcard component */}
      {stateArray.length > 0 ? <SavedCard /> : <EmptyPage />}

      {/* Checkout */}
      {stateArray.length > 0 && (
        <span className="flex justify-center my-4">
          <button className="bg-accent text-secondary w-32 py-2 rounded-md hover:border-2 hover:border-secondary">
            Checkout
          </button>
        </span>
      )}

      {/* Clear */}
      {stateArray.length > 0 && (
        <span className="flex justify-center" onClick={() => dispatch(clear())}>
          <button className="bg-accent text-secondary w-32 py-2 rounded-md hover:border-2 hover:border-secondary">
            Clear
          </button>
        </span>
      )}

      <span className="flex justify-center" onClick={handleLogout}>
        <button>Logout</button>
      </span>
    </div>
  );
};

export default Saved;
