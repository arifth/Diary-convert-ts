import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import type { Searchbar } from "../../../@types/SearchBarProps";

export default function SearchBar({ options }: Searchbar) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      sx={{ width: "100%" }}
      renderInput={(params) => (
        <TextField {...params} label="Search for diary here " />
      )}
    />
  );
}
