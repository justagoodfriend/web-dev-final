import React, { useState, useEffect } from "react";
import * as userService from "../ApiClient/users.js";
import SearchResults from "../search-page-components/search-buttons/searchResults";
import SearchWomen from "../search-page-components/search-buttons/searchWomen";
import SearchMen from "../search-page-components/search-buttons/searchMen";
import SearchKids from "../search-page-components/search-buttons/searchKids";
import SearchSale from "../search-page-components/search-buttons/searchSale";

const SearchPage = ({page = "None"}) => {
    const [user, setUser] = useState(null);
    const currentUser = async () => {
        const user1 = await userService.profile();
        setUser(user1);
    };

    useEffect(() => {
        currentUser();
    }, []);
    if (page === "None") {
        return (<SearchResults/>);
    } else if (page === "Women") {
        return (<SearchWomen/>);
    }
    else if (page === "Men") {
        return (<SearchMen/>);
    }
    else if (page === "Kids") {
        return (<SearchKids/>);
    }
    else if (page === "Sale") {
        return (<SearchSale/>);
    }
}
export default SearchPage;