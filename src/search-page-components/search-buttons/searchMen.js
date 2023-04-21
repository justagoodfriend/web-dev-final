import React, {useEffect, useState} from "react";
import UserSection from "../../components/userSection";
import querySearch from "../shein-service";
import JsonItemComponent from "../../components/jsonItem";

const SearchMen = () => {

    const [database, setDatabase] = useState([]);

    useEffect(() => {
        const getMenData = async () => {
            const menResults = await querySearch("Men", "18");
            setDatabase(menResults.info.products);
        };

        getMenData();
    }, []);

    return(
        <div className="row">
            <UserSection active={"Men"}/>
            <div className="col-9">
                <div>
                    <h2 className="pt-3 ps-4">Men</h2>
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

export default SearchMen;