import { resolve } from "path";
import prisma from "../../../../utilities/prisma/client";

const handle = async (req, res) => {
  switch (req.method) {
    case "GET":
      await findArticleID(req, res);
      return resolve();
    case "POST":
      await updateArticle(req, res);
      return resolve();
    case "PUT":
      await updateArticle(req, res);
      return resolve();
    case "DELETE":
      break;
    default:
      throw new Error(console.log(req.method));
  }
};

const findUserID = async (req, res) => {
  const id = req.query.id;

  const whereQuery = {
    user: {
      name: id,
    },
  };
  const result = await prisma.Citizens.findMany({
    where: whereQuery,
  });
  return await res.json(result);
};

const updateArticle = async (req, res) => {
  const id = req.query.id;
  const category = req.query.category;

  const { title, content, tag, ...rest } = req.body;

  const updateQuery = {
    ...(title !== undefined && { title: title }),
    ...(content !== undefined && { content: content }),
    ...(tag !== undefined && { tag: tag }),
    ...rest,
  };
  const whereQuery = {
    id: parseInt(id),
  };
  const result = await prisma?.[`${category}Article`].update({
    where: whereQuery,
    data: updateQuery,
  });
  res.json(result);
  return resolve();
};
export default handle;

const articleIncludeOption = (type) => {
  switch (type) {
    case "Contest":
      return { team: true, Tag: true, tech_stack: true, profession: true };
    default:
      throw new Error(console.log(type));
  }
};
