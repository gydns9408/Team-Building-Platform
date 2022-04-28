import prisma from "../../../utilities/prisma/client";

const take = 10;

const handle = async (req, res) => {
  switch (req.method) {
    case "GET":
      await findContestPage(req.query.page, take, req, res);
      break;
    case "POST":
      await findContestPage(req.query.page, take, req, res);
      break;
    case "PUT":
      handleUPDATE(req, res);
      break;
    case "DELETE":
      handleDELETE(req, res);
      break;
    default:
      throw new Error(console.log(req.method));
  }
};

const findContestPage = async (page, take, req, res) => {
  const result = await prisma.contest.findMany({
    skip: (page - 1) * take,
    take: take,
    orderBy: {
      start_period: "desc",
    },
  });
  res.json(result);
};

export default handle;
