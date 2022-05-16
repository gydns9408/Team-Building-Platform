import { resolve } from "path";
import prisma from "../../../../../utilities/prisma/client";

const handle = async (req, res) => {
  switch (req.method) {
    case "GET":
      await findArticleID(req, res);
      return resolve();
    case "POST":
      break;
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
    [category.toLowerCase()]: { include: { ...articleOption(category) } },
  };
  const result = await prisma?.[`${category}Article`].findUnique({
    where: whereQuery,
    include: includeQuery,
  });

  await res.json(result);
  return resolve();
};
const updateArticle = async (req, res) => {
  const result = await prisma?.[`${category}Article`].update({});

  return resolve();
};
export default handle;

const articleOption = (type) => {
  switch (type) {
    case "Contest":
      return { team: true, Tag: true, tech_stack: true };
    default:
      throw new Error(console.log(type));
  }
};
