import React, { useEffect, useState } from "react";
import { getBeerList } from "../api";
import MaterialTable from "material-table";
import Beer from "./Beer";

const BeerList = () => {
  const [beers, setBeers] = useState();
  useEffect(() => {
    const getBeerListApi = async () => {
      const res = await getBeerList();
      setBeers(res.beers);
    };
    getBeerListApi();
  }, []);

  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable
        columns={[
          { title: "Name", field: "name" },
          { title: "Image", field: "image_url" },
          { title: "abv", field: "abv", type: "numeric" },
        ]}
        data={
          beers &&
          beers.length > 0 &&
          beers.map((beer) => {
            return [
              { image_url: beer.image_url, name: beer.name, abv: beer.abv },
            ];
          })
        }
        title="BeerList"
      />
      ;
    </div>
  );
};

export default BeerList;
