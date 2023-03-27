import React from "react";
//a sample database that takes jsons, which includes the names of the clothing, price, and the image:
import database from "../database.json";
import ItemComponent from "./item";

//props -> title => name of the heading for the component, id => unique id for the carousel items
const CarouselItems = (props) => {
  console.log(props.id);
  return (
    <div>
      <h2 className="pt-3 ps-4"> {props.title}</h2>
      <div id={props.id} className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active"></div>
          <div className="cards">
            {database.map((clothingitem) => (
              <ItemComponent item={clothingitem} />
            ))}
          </div>
        </div>
        <div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target={`#${props.id}`}
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <div>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target={`#${props.id}`}
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselItems;
