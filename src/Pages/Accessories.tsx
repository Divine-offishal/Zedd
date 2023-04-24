import React from "react";
import useSWR from "swr";
import CarCard from "../Components/Cards/CarCard";

const Accessories = () => {
  interface fetchItems {
    name: string;
    image: string;
    payload: any
  }

  const fetcher = (...args: [RequestInfo, RequestInit?]) =>
    fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "https://zedd-backend.cyclic.app/parts",
    fetcher
  );

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
