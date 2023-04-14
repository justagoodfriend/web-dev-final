import React, {useEffect, useState} from "react";
import UserSection from "../../components/userSection";
import querySearch from "../shein-service";
import JsonItemComponent from "../../components/jsonItem";

const SearchKids = () => {
    const [database, setDatabase] = useState([]);

    useEffect(() => {
        const getKidsData = async () => {
            const kidsResults = await querySearch("Toddler");
            setDatabase(kidsResults.info.products);
        };

        getKidsData();
    }, []);

    return(
        <div className="row">
            <UserSection active={"Kids"}/>
            <div className="col-9">
                <div>
                    <h2 className="pt-3 ps-4">Kids</h2>
                </div>
                <div className="cards result-layout">
                    {database.map((item) => (
                        <JsonItemComponent item={item}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SearchKids;