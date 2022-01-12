import React, { useEffect, useState } from "react";
import CategoryOptions from "./CategoryOptions";
import useAxios from "axios-hooks";
import { Spinner } from "react-bootstrap";

const CarConfiguration = () => {
  const [{ data, loading, error }, refetch] = useAxios(
    "https://car-customization-4b951-default-rtdb.europe-west1.firebasedatabase.app/cars.json"
  );

  const [content, setContent] = useState();

  useEffect(() => {
    if (data) {
      if (data?.models && data?.engines && data?.color && data?.gearbox) {
        setContent(
          <div>
            <CategoryOptions elementType={"model"} data={data.models} />
            <CategoryOptions elementType={"engine"} data={data.engines} />
            <CategoryOptions
              elementType={"gearbox"}
              data={data.gearbox}
              parentElement={"engine"}
            />
            <CategoryOptions elementType={"color"} data={data.color} />
          </div>
        );
      } else {
        setContent(<p>error: Corrupted data</p>);
      }
    } else if (error) {
      setContent(<p>failed to fetch data</p>);
    }
  }, [data, error]);

  return (
    <div>
      <h5>CKONFIG 5.1</h5>
      {loading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {content}
    </div>
  );
};

export default CarConfiguration;
