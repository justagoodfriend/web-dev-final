import CarouselItems from "../components/carouselitems";
import React, { useState, useEffect } from "react";
import UserSection from "../components/userSection";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";
import querySearchByGoodsID from "../search-page-components/shien-queries-goodsId";
import querySearch from "../search-page-components/shein-service";
import CreateItem from "../profile-page-components/create-item/createItem";

const CreateItemPage = () => {
    // const user = useSelector((state) => state.users.currentUser);

    return (
        <div className="row">
            <UserSection active="Home" />
            <div className="col-9">
                <CreateItem/>
            </div>
        </div>
    );
};
export default CreateItemPage;
