import React, { useState, useEffect } from "react";
import { Images } from "../assets/Images/Images";
import useSWR from "swr";
import { useParams } from "react-router-dom";
import { dataType } from "../Components/Interfaces/interfaces";
import { Toaster, toast } from "react-hot-toast";
import { useAppDispatch } from "../App/hooks";
import { added } from "../Features/SavedItemsSlice";
import PageTransition from "../Components/Animations/PageTransitions";

const AccItem = () => {

  const dispatch = useAppDispatch()

  // Getting url params
  const { slug } = useParams();

  const fetcher = (...args: [RequestInfo, RequestInit?]) =>
    fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `https://zedd-backend.cyclic.app/parts/${slug}`,
    fetcher
  );


  const [arrayedData, setArrayedData] = useState<Array<dataType>>([]);

  useEffect(() => {
    if (data) {
      setArrayedData([data]);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      toast.error('There is an error in data fetching')
    }
  }, [error])

  return (
    <PageTransition>

      <div
        className="min-h-screen w-screen mt-32"
        onClick={() => console.log(arrayedData)}
      >
        <Toaster/>
        {isLoading ? (
          <h1 className="text-center text-4xl text-secondary">Loading...</h1>
        ) 
        : (
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
    </PageTransition>
  );
};


export default AccItem