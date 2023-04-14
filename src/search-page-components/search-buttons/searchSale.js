import React, {useEffect, useState} from "react";
import UserSection from "../../components/userSection";
import querySearch from "../shein-service";
import JsonItemComponent from "../../components/jsonItem";
import JsonSaleItemComponent from "../../components/jsonSaleItem";

const SearchSale = () => {

    const [database, setDatabase] = useState([]);

    useEffect(() => {
        const getSaleData = async () => {
            const saleResults = await querySearch("Sale&all?is_on_sale=1&");
            setDatabase(saleResults.info.products);
        };

        getSaleData();
    }, []);

    return(
        <div className="row">
            <UserSection active={"Sale"}/>
            <div className="col-9">
                <div>
                    <h2 className="pt-3 ps-4">Sale</h2>
                </div>
                <div className="cards result-layout">
                    {database.map((item) => (
                        <JsonSaleItemComponent item={item}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SearchSale;