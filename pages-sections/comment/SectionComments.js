import CommentInput from "../../components/comment/commentInput";
import CommentContainer from "../../components/comment/commentContainer";
import CommentItem from "../../components/Comment/CommentItem";
import { useEffect, useState } from "react";
import { getSession, useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

const reqComments = async (id) => {
  const data = await fetch(`${process.env.HOSTNAME}/api/comment/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((response) => {
    return response.json();
  });

  return data;
};

const SectionComments = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const { data: section, state } = useSession();

  useState(() => {
    console.log(router.query);
    reqComments(router.query.id).then((data) => {
      setComments(data[0].comment, setLoading(false));
    });
  }, []);

  if (loading) return <div>loading</div>;
  return (
    <div>
      <CommentInput />
      <CommentContainer>
        {comments.map((data) => {
          return (
            <CommentItem
              avatar={
                data.citizens[0] === undefined
                  ? `/asset/image/background/contest/default.svg`
                  : data.citizens[0].user.image
              }
              author={
                data.citizens[0] === undefined
                  ? "익명"
                  : data.citizens[0].user.name
              }
              body={data.body}
              createAt={data.createAt}
              key={data.id}
            ></CommentItem>
          );
        })}
      </CommentContainer>
    </div>
  );
};

export default SectionComments;
