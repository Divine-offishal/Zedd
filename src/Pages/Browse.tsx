import React, { useEffect } from "react";
import CarCard from "../Components/Cards/CarCard";
import useSWR from "swr";
import { useAppSelector } from "../App/hooks";
import { NavLink } from "react-router-dom";
import { fetchItems } from "../Components/Interfaces/interfaces";
import { Toaster, toast } from 'react-hot-toast'
import PageTransition from "../Components/Animations/PageTransitions";

const Browse = () => {

  const fetcher = (...args: [RequestInfo, RequestInit?]) =>
    fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "https://zedd-backend.cyclic.app/cars",
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
      <div className="w-screen min-h-screen mt-32">
        <Toaster/>
        <div className=" grid md:grid-cols-2 justify-items-center gap-y-6">
          {isLoading ? (
            <h1>Loading</h1>
          ) : error ? (
            toast.error('There is an error')
          ) : (
            data?.map((item: fetchItems, i: number) => (
              <NavLink to={`/cars/${item.id}`}>
                <CarCard key={i} image={item.image} name={item.name} price={item.price}/>
              </NavLink>
            ))
          )}
        </div>
      </div>
    </PageTransition>
  );
};

export default Browse;
