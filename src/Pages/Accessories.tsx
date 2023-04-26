import React, { useEffect } from "react";
import useSWR from "swr";
import CarCard from "../Components/Cards/CarCard";
import { useAppSelector, useAppDispatch } from "../App/hooks";

const Accessories = () => {

  interface fetchItems {
    name: string;
    image: string
    payload: object
  }

  const fetcher = (...args: [RequestInfo, RequestInit?]) =>
    fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "https://zedd-backend.cyclic.app/parts",
    fetcher
  );

  const stateArray = useAppSelector((state) => state.savedItemReducer.items)

  useEffect(() => {
    
    if (stateArray.length > 0) {
      const saveToStorage = localStorage.setItem('item', JSON.stringify(stateArray))
    } 
  }, [stateArray])
  

  return (
    <div className=" mt-32">
      <div className=" grid md:grid-cols-2 justify-items-center gap-y-6">
        {isLoading ? (
          <h1>Loading</h1>
        ) : error ? (
          <h1>Error</h1>
        ) : (
          data?.map((item: fetchItems, i: number) => (
            <CarCard key={i} image={item.image} name={item.name} payload={item}/>
          ))
        )}
      </div>
    </div>
  );
};

export default Accessories;
