import React, { useState, useEffect } from "react";
import { Images } from "../assets/Images/Images";
import useSWR from "swr";
import { useParams } from "react-router-dom";
import { dataType } from "../Components/Interfaces/interfaces";

const AccItem = () => {

  // Getting url params
  const { slug } = useParams();

  const fetcher = (...args: [RequestInfo, RequestInit?]) =>
    fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `https://zedd-backend.cyclic.app/cars/${slug}`,
    fetcher
  );


  const [arrayedData, setArrayedData] = useState<Array<dataType>>([]);

  useEffect(() => {
    if (data) {
      setArrayedData([data]);
    }
  }, [data]);

  return (
    <div
      className="h-screen w-screen mt-32"
      onClick={() => console.log(arrayedData)}
    >
      {isLoading ? (
        <h1 className="text-center text-4xl text-secondary">Loading...</h1>
      ) : error ? (
        <h1>There is an error</h1>
      ) : (
        arrayedData.map((item, i) => (
          <div key={i}>
            <span className="grid justify-items-center">
              <img src={item.image} alt="" className="w-96 h-96" />
            </span>

            <h1 className="text-center text-3xl font-semi-bold mt-7">
              {item.name}
            </h1>
            <p className="text-center mt-8">{item.description}</p>
          </div>
        ))
      )}
    </div>
  );
};


export default AccItem