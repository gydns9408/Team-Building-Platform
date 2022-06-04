import { resolve } from "path";
import prisma from "../../../../../utilities/prisma/client";

const findContestPage = async (req, res) => {
  const { page, take, category, currentProfession, contest } = req.query;
  const result = await prisma?.[`${category}Article`].findMany({
    include: {
      ...articleIncludeOption(category),
    },
    skip: parseInt((page - 1) * (take === undefined ? 1 : take)),
    take: parseInt(take === undefined ? 1 : take),
    orderBy: {
      article: {
        createdAt: "asc",
      },
    },
    ...(currentProfession !== null &&
      currentProfession !== undefined && {
        where: {
          contest: {
            profession: {
              some: { name: currentProfession },
            },
          },
        },
      }),
    ...(contest !== undefined && {
      where: {
        contest_id: parseInt(contest),
      },
    }),
  });
  res.json(result);
  resolve();
};

const articleIncludeOption = (type) => {
  switch (type) {
    case "Contest":
      return {
        contest: {
          include: {
            profession: true,
          },
        },
      };
    case "Team":
      return {
        team: {
          include: {
            role: true,
            citizens: true,
            profession: true,
          },
        },
        article: {
          include: {
            content: {
              select: {
                title: true,
              },
            },
          },
        },
      };
    default:
      throw new Error(console.log(type));
  }
};

export default findContestPage;
