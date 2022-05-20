import { resolve } from "path";
import prisma from "../../../../../utilities/prisma/client";

const handle = async (req, res) => {
  switch (req.method) {
    case "GET":
      await findArticleID(req, res);
      return resolve();
    case "POST":
      await updateArticle(req, res);
      return resolve();
    case "PUT":
      break;
    case "DELETE":
      break;
    default:
      throw new Error(console.log(req.method));
  }
};

const findArticleID = async (req, res) => {
  const id = req.query.id;
  const category = req.query.category;

  const whereQuery = {
    article_id: parseInt(id),
  };
  const includeQuery = {
    article: { include: { content: true } },
    [category.toLowerCase()]: {
      include: { ...articleIncludeOption(category) },
    },
  };
  const result = await prisma?.[`${category}Article`].findUnique({
    where: whereQuery,
    include: includeQuery,
  });

  await res.json(result);
  return resolve();
};

const updateArticle = async (req, res) => {
  const { title, content, tag, ...rest } = req.body;

  const updateQuery = {
    ...(title !== undefined && { title: title }),
    ...(content !== undefined && { content: content }),
    ...(tag !== undefined && { tag: tag }),
    ...rest,
  };
  const whereQuery = {
    article_id: parseInt(id),
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
