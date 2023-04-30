import React, { useState, useEffect } from "react";
import { Images } from "../assets/Images/Images";
import useSWR from "swr";
import { useParams } from "react-router-dom";
import { Toaster, toast } from 'react-hot-toast'
import { useAppDispatch } from "../App/hooks";
import { added } from "../Features/SavedItemsSlice";

// Interfaces
import { dataType } from "../Components/Interfaces/interfaces";


const Carpage = () => {

  const dispatch = useAppDispatch()

  // Getting url params
  const { slug } = useParams();


  // Fetching data
  const fetcher = (...args: [RequestInfo, RequestInit?]) =>
    fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `https://zedd-backend.cyclic.app/cars/${slug}`,
    fetcher
  );

  const [arrayedData, setArrayedData] = useState<Array<dataType>>([]);

  useEffect(() => {
    // If data is available, store in arrayedData
    if (data) {
      setArrayedData([data]);
    }
  }, [data]);

  return (
    <div
      className="h-screen w-screen mt-32">

        <Toaster/>
      {isLoading ? (
        <h1 className="text-center text-4xl text-secondary">Loading...</h1>
      ) : error ? (
        toast.error('There is an error in data fetching')
      ) : (
        arrayedData.map((item, i) => (
          <div key={i}>
            <span className="grid justify-items-center">
              <img src={item.image} alt="" className="w-96 h-96" />
            </span>

            <h1 className="text-center text-3xl font-semi-bold mt-7">
              {item.name}
            </h1>

            <span className="grid justify-items-center my-4" onClick={() => dispatch(added(data))}>
              <button className="text-accent bg-secondary px-2 py-1 hover:text-secondary hover:bg-accent rounded-md">Add to cart</button>
            </span>

            <p className="text-center mt-8 px-2">{item.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Carpage;
