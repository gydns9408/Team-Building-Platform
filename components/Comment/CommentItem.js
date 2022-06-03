import { useState, useEffect } from "react";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import { Button, Comment, Form, Header } from "semantic-ui-react";
import Parser from "html-react-parser";
const commentItem = ({ avatar, author, createAt, body }) => {
  return (
    <Comment>
      <Comment.Avatar src={avatar} />
      <Comment.Content>
        <Comment.Author as="a">{author}</Comment.Author>
        <Comment.Metadata>
          <div>{createAt}</div>
        </Comment.Metadata>
        <Comment.Text>{Parser(body)}</Comment.Text>
      </Comment.Content>
    </Comment>
  );
};

export default commentItem;
