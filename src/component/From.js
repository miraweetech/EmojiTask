import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchEntry } from "../redux/reducers/SearchSlice";

const From = () => {
    const dispatch = useDispatch()
    const searchEntry = useSelector((state) => state.search.searchEntry)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        if(searchEntry.trim()){
            navigate(`/search/${searchEntry}`)
        }
    }

    const handleSearchInput = (e) => {
        dispatch(setSearchEntry(e.target.value))
    }
    return(
        <>
        <div className="from-container">
            <input
            type="text"
            name="search"
            placeholder="Find the most relevant emojis"
            value={searchEntry}
            onChange={handleSearchInput}
            />

            <button onClick={handleSubmit}>Search</button>
        </div>
        </>
    )
}

export default From