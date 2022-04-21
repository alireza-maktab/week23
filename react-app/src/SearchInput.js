import React, { useEffect, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { myDebounce } from "./myDebounce";
import { top100Films } from "./data";

async function getOptionsAsync(text) {
  console.log("api call");
  return top100Films
    .filter((film) => {
      return film.label.search(text);
    })
    .slice(0, 4);
}

const getOptionsAsyncWithDelay = myDebounce(getOptionsAsync, 1000);

export function SearchInput() {
  const [options, setOptions] = useState(top100Films);
  const [inputValue, setInputValue] = React.useState("");

  useEffect(() => {
    getOptionsAsyncWithDelay(inputValue).then((newOptions) => {
      setOptions(newOptions);
    });
  }, [inputValue]);

  return (
    <Autocomplete
      sx={{ width: 300, p: 5 }}
      options={options}
      renderInput={(params) => <TextField {...params} label="Combo box" />}
      loading={options.length === 0}
      onInputChange={(e, newInputValue) => setInputValue(newInputValue)}
    />
  );
}
