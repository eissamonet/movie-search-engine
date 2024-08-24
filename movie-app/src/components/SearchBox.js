import React from "react";

const SearchBox = (props) => {
    return (
        <div class="col col-sm-4">
            <input
                class="form-control"
                value={props.value}
                onChange={(event) => props.setSearchValue(event.target.value)}
                placeholder="Search Movie..."
            ></input>
        </div>
    );
}

export default SearchBox;