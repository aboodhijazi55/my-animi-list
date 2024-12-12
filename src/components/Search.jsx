import React from "react";
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';

import SearchIcon from '@mui/icons-material/Search';

function Search() {
    return <>
        <div className="search">
            <label htmlFor=""></label>
            <input type="text" placeholder="Search.." />
            <Stack direction="row" spacing={1}>
                <IconButton aria-label="fingerprint" size={"large"} style={{ color: "#424242" }} onClick={() => {
                    console.log("i got click");
                }}>
                    <SearchIcon />
                </IconButton>
            </Stack>
        </div>
    </>
}
export default Search