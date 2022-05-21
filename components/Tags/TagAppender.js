import Button from "../CustomButtons/Button";
import { useEffect, useState } from "react";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Chip } from "@mui/material";
const componentLabels = {
  button: "add tag",
};

const TagAppender = ({ tag = [], type, onClick }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  useEffect(() => {}, [tag]);

  if (loading) return <div>loading</div>;
  return (
    <GridContainer>
      <GridItem>
        <Autocomplete
          multiple
          id="tags-filled"
          options={tag.map((option) => option.name)}
          defaultValue={tag}
          freeSolo
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                variant="outlined"
                label={option}
                {...getTagProps({ index })}
              />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              variant="filled"
              label="freeSolo"
              placeholder="Favorites"
            />
          )}
        />
      </GridItem>
    </GridContainer>
  );
};

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
export default TagAppender;
