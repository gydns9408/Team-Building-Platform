import { resolve } from "path";
import prisma from "../../../../../utilities/prisma/client";

const findContestPage = async (req, res) => {
  const { page, take, category, currentProfession } = req.query;

  const result = await prisma?.[`${category}Article`].findMany({
    include: {
      contest: {
        include: {
          profession: true,
        },
      },
    },
    skip: parseInt((page - 1) * take),
    take: parseInt(take),
    orderBy: {
      article: {
        createdAt: "desc",
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
  });

  // const result = await prisma?.[`${category}Article`].findMany({
  //   include: {
  //     contest: {
  //       include: {
  //         profession: true,
  //       },
  //     },
  //   },
  // });
  res.json(result);
  resolve();
};

export default findContestPage;
