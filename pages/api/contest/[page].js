import prisma from "../../../utilities/prisma/client";

const findContestPage = async (req, res) => {
  const page = req.query.page;
  const take = req.query.take;

  const result = await prisma.contest.findMany({
    skip: (page - 1) * take,
    take: take,
    orderBy: {
      start_period: "desc",
    },
  });
  res.json(result);
};

export default findContestPage;
