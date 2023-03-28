import React from "react";
import BEIGETOP from "../images/Beige-Button-Up.jpeg";
import BLACKTOP from "../images/black-wrap-up.jpeg";
import CARGOS from "../images/Cargos.jpeg";
import WHITETOPFLOWERS from "../images/white-blue-flowers.jpeg";
import WHITETOP from "../images/white-button-up.jpeg";
import WHITETEE from "../images/White-Graphic-Tee.jpeg";

//in here an item gets passed , also idk why but I have to access the fields in the json like this, if you know a better way pls fix!
const ItemComponent = ({
  item = {
    id: "something",
    image: "something",
    title: "something",
    price: "something",
  },
}) => {
  //not sure why but I can't get the image from the public/image file, so they're still blank,
  //do we want to copy over the images into source as well too?
  let imageSource;
  if (item.id.toString().includes("A")) {
    imageSource = WHITETOP;
  } else if (item.id.toString().includes("B")) {
    imageSource = BLACKTOP;
  } else if (item.id.toString().includes("C")) {
    imageSource = WHITETOPFLOWERS;
  } else if (item.id.toString().includes("D")) {
    imageSource = BEIGETOP;
  } else if (item.id.toString().includes("E")) {
    imageSource = WHITETEE;
  } else if (item.id.toString().includes("F")) {
    imageSource = CARGOS;
  }
  return (
    <div className="card">
      <img src={imageSource} className="card-image-top" alt="..." />
      <div className="card-body">
        <p className="card-text">
          {item.title}
          <br />
          <b>${item.price}</b>
        </p>
      </div>
    </div>
  );
};

export default ItemComponent;
