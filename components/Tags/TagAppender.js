import Tag from "./Tag";
import Button from "../CustomButtons/Button";
import { useEffect, useState } from "react";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const componentLabels = {
  button: "add tag",
};

const TagAppender = ({ names = [], type, onClick }) => {
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  useEffect(() => {}, [names]);

  if (loading) return <div>loading</div>;
  return (
    <GridContainer>
      <GridItem>
        <Autocomplete
          multiple
          limitTags={2}
          id="multiple-limit-tags"
          options={tags}
          inputValue={inputValue}
          onInputChange={(event, value, reason) => {
            if (event && event.type === "blur") {
              setInputValue("");
            } else if (reason !== "reset") {
              setInputValue(value);
            }
          }}
          getOptionLabel={(tags) => option.name}
          defaultValue={tags}
          renderInput={(params) => (
            <TextField {...params} label="limitTags" placeholder="Favorites" />
          )}
          sx={{ width: "500px" }}
        />
      </GridItem>
      <GridItem>
        <Button onClick={onClick}>{componentLabels.button}</Button>
      </GridItem>
    </GridContainer>
  );
};

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
export default TagAppender;
