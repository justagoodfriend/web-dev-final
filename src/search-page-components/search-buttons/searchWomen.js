import React from "react";
import ItemComponent from "../../components/item";
import databaseSearch from "../databaseSearch.json";
import UserSection from "../../components/userSection";

const SearchWomen = () => {

    let database = databaseSearch;

    return(
        <div className="row">
            <UserSection active={"Women"}/>
            <div className="col-9">
                <div>
                    <h2 className="pt-3 ps-4">Women</h2>
                </div>
                <div className="cards result-layout">
                    {database.map((item) => (
                        <ItemComponent key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SearchWomen;