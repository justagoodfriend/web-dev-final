import React, {useEffect, useState} from "react";
import databaseSearch from "../databaseSearch.json";
import UserSection from "../../components/userSection";
import querySearch from "../shein-service";
import JsonItemComponent from "../../components/jsonItem";
import {useParams} from "react-router";

// need to add store to keep track of what an individual typed to maintain searchQuery
// and can be used later to filter data
const SearchResults = () => {
    const {query} = useParams();

    const [database, setDatabase] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setLoading(true);
        const getData = async () => {
            const searchResults = await querySearch(query, "18");
            setDatabase(searchResults.info.products);
            setLoading(false);
        };

        getData();
    }, [query]);


    return(
        <div className="row">
            <UserSection active={"None"}/>
            <div className="col-9">
                <div>
                    <h2 className="pt-3 ps-4">Search Results</h2>
                    <p className="ps-4">results for "{query}"</p>
                </div>
                {loading ? (
                    <div className="text-center">
                        <div className="spinner-border text-purple" role="status">
                        </div>
                    </div>
                ) : (
                <div className="cards result-layout">
                    {database.map((item) => (
                        <JsonItemComponent item={item}/>
                    ))}
                </div> )}
            </div>
        </div>
    );

}

export default SearchResults;