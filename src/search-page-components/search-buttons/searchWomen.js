import React, {useEffect, useState} from "react";
import UserSection from "../../components/userSection";
import querySearch from "../shein-service";
import JsonItemComponent from "../../components/jsonItem";



const SearchWomen = () => {
    const [database, setDatabase] = useState([]);

    useEffect(() => {
        const getWomenData = async () => {
            const womenResults = await querySearch("Women", "18");
            setDatabase(womenResults.info.products);
        };

        getWomenData();
    }, []);

    return (
        <div className="row">
            <UserSection active={"Women"} />
            <div className="col-9">
                <div>
                    <h2 className="pt-3 ps-4">Women</h2>
                </div>

                <div className="cards result-layout">
                    {database.map((item) => (
                        <JsonItemComponent item={item}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchWomen;
