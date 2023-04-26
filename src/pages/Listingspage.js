import React, { useEffect, useState } from "react";
import UserSection from "../components/userSection";
import { getItems } from "../ApiClient/services/item";
import JsonItemComponent from "../components/jsonItem";
import ListingItem from "../components/listingItems";

//page created to display the items within our database that a seller created:

const Listings = ({active = "Reviews"}) => {
  const [database, setDatabase] = useState([]);

  const fetchNewSellerItems = async () => {
    const dbItems = await getItems();
    console.log(dbItems);
    setDatabase(dbItems);
  };

  useEffect(() => {
    fetchNewSellerItems();
  }, []);

  return (
    <div className="row">
      <UserSection active={active}/>
      <div className="col-9">
        <div>
          <h2 className="pt-3 ps-4">New Listings</h2>
        </div>
        {
          <div className="cards result-layout">
            {database.map((item) => (
              <ListingItem item={item} />
            ))}
          </div>
        }
      </div>
    </div>
  );
};

export default Listings;
