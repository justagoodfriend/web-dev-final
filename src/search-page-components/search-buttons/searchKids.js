import React, {useEffect, useState} from "react";
import UserSection from "../../components/userSection";
import querySearch from "../shein-service";
import JsonItemComponent from "../../components/jsonItem";

const SearchKids = () => {
    const [database, setDatabase] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getKidsData = async () => {
            const kidsResults = await querySearch("Toddler", "18");
            setDatabase(kidsResults.info.products);
            setLoading(false);
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
                </div>
                    )}
            </div>
        </div>
    );
}

export default SearchKids;