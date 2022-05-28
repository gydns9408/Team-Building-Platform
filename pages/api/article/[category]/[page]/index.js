import { resolve } from "path";
import prisma from "../../../../../utilities/prisma/client";

const findContestPage = async (req, res) => {
  const page = req.query.page;
  const take = req.query.take;
  const category = req.query.category;

  const result = await prisma?.[`${category}Article`].findMany({
    skip: parseInt((page - 1) * take),
    take: parseInt(take),
    orderBy: {
      article: {
        createdAt: "desc",
      },
    },
  });

  res.json(result);
  resolve();
};

export default findContestPage;
