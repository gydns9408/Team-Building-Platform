import Typography from "@mui/material/Typography";

const contestPage = ({ data }) => {
  return (
    <div className="post">
      <div className="postContent">
        <h2>{data.article.content.title}</h2>
        <p className="time">
          <strong>
            <i>Создано: </i>
          </strong>
          <span>date</span>
        </p>
        <p>{data.article.content.body}</p>
      </div>
      <div className="postControl">
        <button className="editBtn">
          {/* <EditIcon /> */}
          EditIcon
        </button>
        <button className="deleteBtn">
          {/* <DeleteForeverIcon /> */}
          DeleteForeverIcon
        </button>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { page } = context.query;
  const { id } = context.query;
  const data = await fetch(
    `${process.env.HOSTNAME}/api/article/Contest/${page}/${id}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  ).then((response) => {
    return response.json();
  });
  return { props: { data } };
}

export default contestPage;
