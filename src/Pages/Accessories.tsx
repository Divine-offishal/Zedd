import React, { useEffect } from "react";
import useSWR from "swr";
import CarCard from "../Components/Cards/CarCard";
import { useAppSelector, useAppDispatch } from "../App/hooks";
import { NavLink } from "react-router-dom";
import { fetchItems } from "../Components/Interfaces/interfaces";
import PageTransition from "../Components/Animations/PageTransitions";

const Accessories = () => {

  const fetcher = (...args: [RequestInfo, RequestInit?]) =>
    fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "https://zedd-backend.cyclic.app/parts",
    fetcher
  );

  const stateArray = useAppSelector((state) => state.savedItemReducer.items)

  useEffect(() => {
    
    if (stateArray.length > 0) {
      localStorage.setItem('saved', JSON.stringify(stateArray))
    } 
  }, [stateArray])
  

  return (
    
    <PageTransition>
      <div className=" mt-32 min-h-screen"> 
        <div className=" grid md:grid-cols-2 justify-items-center gap-y-10">
          {isLoading ? (
            <h1>Loading</h1>
          ) : error ? (
            <h1>Error</h1>
          ) : (
            data?.map((item: fetchItems, i: number) => (
              <NavLink to={`/parts/${item.id}`}>
                <CarCard key={i} image={item.image} name={item.name} price={item.price}/>
              </NavLink>
            ))
          )}
        </div>
      </div>
    </PageTransition>
  );
};

export default Accessories;
