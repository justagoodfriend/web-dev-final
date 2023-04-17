import React from "react";
import ItemComponent from "../../components/item";
import databaseSearch from "../databaseSearch.json";
import UserSection from "../../components/userSection";

// need to add store to keep track of what an individual typed to maintain searchQuery
// and can be used later to filter data
const SearchResults = (searchQuery = "") => {

    let database = databaseSearch;

    return(
        <div className="row">
            <UserSection active={"None"}/>
            <div className="col-9">
                <div>
                    <h2 className="pt-3 ps-4">Search Results</h2>
                    <p className="ps-4">{databaseSearch.length} results for "{searchQuery.query}"</p>
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

export default SearchResults;