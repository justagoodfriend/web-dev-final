import React from "react";

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
  const imageSource = `../images/${item.image}`;
  return (
    <div className="card">
      <img src={imageSource} className="card-image-top" alt="" />
      <div className="card-body">
        <p className="card-text">
          {" "}
          {item.title}
          <br />
          <b>{item.price}</b>
        </p>
      </div>
    </div>
  );
};

export default ItemComponent;
