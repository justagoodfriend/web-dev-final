import React from "react";
//a sample database that takes jsons, which includes the names of the clothing, price, and the image:
import databaseRecommended from "../databaseRecommended.json";
import databaseWishlist from "../databaseWishlist.json";
import ItemComponent from "./item";

//props -> title => name of the heading for the component, id => unique id for the carousel items
const CarouselItems = (props) => {
  console.log(props.id);
  let database;
  if (props.id.toString().includes("R")) {
    database = databaseRecommended;
  } else if (props.id.toString().includes("W")) {
    database = databaseWishlist;
  }
  let activeItems = database.slice(0,3);
  let inactiveItems1 = database.slice(3,6);
  return (
    <div>
      <h2 className="pt-3 ps-4"> {props.title}</h2>
      <div id={props.id} className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="cards">
              {activeItems.map((clothingitem) => (
                  <ItemComponent key={clothingitem.id} item={clothingitem} />
              ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className="cards">
              {inactiveItems1.map((clothingitem) => (
                  <ItemComponent key={clothingitem.id} item={clothingitem} />
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
