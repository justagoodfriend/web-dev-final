import React, {useEffect, useState} from "react";
//a sample database that takes jsons, which includes the names of the clothing, price, and the image:
import databaseRecommended from "../databaseRecommended.json";
import databaseWishlist from "../databaseWishlist.json";
import ItemComponent from "./item";
import JsonItemComponent from "./jsonItem";
import querySearch from "../search-page-components/shein-service";
import {Link} from "react-router-dom";
// import {Link} from "@chakra-ui/react";

//props -> title => name of the heading for the component, id => unique id for the carousel items
const CarouselItems = (props) => {
  const [activeItems, setActiveItems] = useState([]);
  const [inactiveItems, setInactiveItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const results = await querySearch(props.queryTitle, "9");
      const allResults = results.info.products;
      if (allResults.length > 3) {
        setActiveItems(allResults.splice(0,3));
        setInactiveItems(allResults.splice(3, allResults.length));
      } else {
        setActiveItems(allResults);
        setInactiveItems(allResults);
      }
    };
    getData();
  }, []);


  return (
    <div>
      <h2 className="pt-3 ps-4"> {props.title}</h2>
      <div id={props.id} className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="cards">
              {activeItems.map((clothingitem) => (
                  <JsonItemComponent key={clothingitem.goods_id} item={clothingitem}/>
              ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className="cards">
              {inactiveItems.map((clothingitem) => (
                  <JsonItemComponent key={clothingitem.goods_id} item={clothingitem}/>
              ))}
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target={`#${props.id}`} data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target={`#${props.id}`} data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default CarouselItems;
