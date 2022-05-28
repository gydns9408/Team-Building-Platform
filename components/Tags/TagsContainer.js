import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Tag from "./Tag";
import Button from "../CustomButtons/Button";
const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function ChipsArray({ tags, type, form, children }) {
  console.log(tags);
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "left",
        flexWrap: "wrap",
        listStyle: "none",
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      {tags.length !== 0
        ? tags.map((data) => {
            return (
              <ListItem key={data.id}>
                <Tag name={data.name} type={type} form={form} />
              </ListItem>
            );
          })
        : null}
      {children}
    </Paper>
  );
}