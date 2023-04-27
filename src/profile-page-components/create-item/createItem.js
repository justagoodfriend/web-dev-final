import { useDispatch, useSelector } from "react-redux";
import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import { createItemThunk } from "../../ApiClient/thunks/itemThunk";
import { UserContext } from "../../redux/userContextTest";

const CreateItem = ({ userId = null }) => {
  // userId = useParams().uid;
  // const currentUser = useSelector((state) => state.users.currentUser);
  const { user } = useContext(UserContext);
  const currentUser = JSON.parse(user);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const addColorsHandler = () => {
    let container = document.getElementById("container-colors");
    let newInput = document.createElement("input");
    newInput.className =
      "bg-secondary bg-opacity-10 rounded-3 border-2 border-purple p-3 py-2 mb-2 w-100";
    container.appendChild(newInput);
  };
  const removeColorsHandler = () => {
    let container = document.getElementById("container-colors");
    if (container.children.length > 0) {
      const toRemove = container.children[container.children.length - 1];
      container.removeChild(toRemove);
    }
  };

  const addSizesHandler = () => {
    let container = document.getElementById("container-sizes");
    let newInput = document.createElement("input");
    newInput.className =
      "bg-secondary bg-opacity-10 rounded-3 border-2 border-purple p-3 py-2 mb-2 w-100";
    container.appendChild(newInput);
  };

  const removeSizesHandler = () => {
    let container = document.getElementById("container-sizes");
    if (container.children.length > 0) {
      const toRemove = container.children[container.children.length - 1];
      container.removeChild(toRemove);
    }
  };

  const createListingHandler = () => {
    if (title === "" || price === "" || image === "") {
      alert("Must have at least a title, price, and image to create a listing");
    } else {
      let colorsContainer = document.getElementById("container-colors");
      let sizesContainer = document.getElementById("container-sizes");
      let colorsArray = [];
      let sizesArray = [];
      for (let i = 0; i < colorsContainer.children.length; i++) {
        let colorInput = colorsContainer.children[i];
        colorsArray.push(colorInput.value);
      }
      for (let i = 0; i < sizesContainer.children.length; i++) {
        let sizesInput = sizesContainer.children[i];
        sizesArray.push(sizesInput.value);
      }
      const item = {
        itemId: Math.floor(100000000 + Math.random() * 900000000),
        sellerId: currentUser._id,
        title: title,
        price: price,
        colors: colorsArray,
        sizes: sizesArray,
        image: image,
        listing: true,
      };
      console.log(item);
      dispatch(createItemThunk(item));
    }
  };

  return (
    <div className="custom-padding-left pt-3 d-flex flex-row pb-5 mb-5">
      <div className="d-flex flex-column col-10 me-2">
        <div className="row">
          <div className="col-6">
            <h2>List an Item</h2>
          </div>
          <div className="col-6">
            <button
              className="background-purple text-white rounded-3 no-border px-4 py-1 w-75"
              onClick={() => createListingHandler()}
            >
              Create Listing
            </button>
          </div>
        </div>
        <label>
          <div className="pb-1">
            <b>Name</b>
          </div>
          <input
            className="bg-secondary bg-opacity-10 rounded-3 border-2 border-purple p-3 py-2 mb-2 w-100"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>
        <label>
          <div className="pb-1">
            <b>Price (include '$')</b>
          </div>
          <input
            className="bg-secondary bg-opacity-10 rounded-3 border-2 border-purple p-3 py-2 mb-2 w-100"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </label>
        <label>
          <div className="pb-1">
            <b>Image Link</b>
          </div>
          <input
            className="bg-secondary bg-opacity-10 rounded-3 border-2 border-purple p-3 py-2 mb-2 w-100"
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </label>
        <b className="py-1">Colors</b>
        <div className="row py-1">
          <div className="col-6">
            <button
              className="background-purple text-white rounded-3 no-border px-4 py-1 w-75"
              onClick={() => addColorsHandler()}
            >
              Add Color
            </button>
          </div>
          <div className="col-6">
            <button
              className="background-purple text-white rounded-3 no-border px-4 py-1 w-75"
              onClick={() => removeColorsHandler()}
            >
              Remove Color
            </button>
          </div>
        </div>
        <div id="container-colors"></div>
        <b className="py-1">Sizes</b>
        <div className="row py-1">
          <div className="col-6">
            <button
              className="background-purple text-white rounded-3 no-border px-4 py-1 w-75"
              onClick={() => addSizesHandler()}
            >
              Add Size
            </button>
          </div>
          <div className="col-6">
            <button
              className="background-purple text-white rounded-3 no-border px-4 py-1 w-75"
              onClick={() => removeSizesHandler()}
            >
              Remove Size
            </button>
          </div>
        </div>
        <div id="container-sizes"></div>
      </div>
    </div>
  );
};

export default CreateItem;
