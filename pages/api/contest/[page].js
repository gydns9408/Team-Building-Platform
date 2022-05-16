import prisma from "../../../utilities/prisma/client";

const findContestPage = async (req, res) => {
  const page = req.query.page;
  const take = req.query.take;
  const type = req.type.type;
  const result = await prisma?.[type].findMany({
    skip: parseInt((page - 1) * take),
    take: parseInt(take),
    orderBy: {
      createAt: "desc",
    },
  });
  res.json(result);
};

export default findContestPage;
