import Editor from "../Editors/CKEditorTextEditor";
import { useRouter } from "next/router";
import Button from "../CustomButtons/Button";
import { useState, useEffect, useReducer, Fragment } from "react";
import { getSession, useSession, signIn, signOut } from "next-auth/react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
const reqCommentPost = async (articleID, comment, userId) => {
  const body = {
    comment: {
      create: {
        body: comment,
        likeCount: 0,
        citizens: {
          connect: {
            user_id: userId,
          },
        },
      },
    },
  };
  const data = await fetch(
    `${process.env.HOSTNAME}/api/comment/${articleID}/`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }
  ).then(async (response) => {
    return await response.json();
  });
  return data;
};
const styles = {};

const useStyles = makeStyles(styles);

const CommentInput = ({ className }) => {
  const classes = useStyles();
  const router = useRouter();
  const { data: session, status } = useSession();
  const [comment, setComment] = useState("");

  const onChangeHandle = (data) => {
    setComment(data);
  };
  useEffect(() => {}, [comment]);
  return (
    <div className={className}>
      <Editor
        name={"commentInput"}
        readOnly={false}
        value={""}
        onChangeHandle={onChangeHandle}
      ></Editor>
      <Button
        onClick={async () => {
          await reqCommentPost(router.query.id, comment, session.user.id).then(
            () => {
              router.reload(window.location.pathname);
            }
          );
        }}
      >
        버튼
      </Button>
    </div>
  );
};

export default CommentInput;
