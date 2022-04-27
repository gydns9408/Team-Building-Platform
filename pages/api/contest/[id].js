import prisma from "../../../utilities/prisma/client";

const handle = async (req, res) => {
  switch (req.method) {
    case "":
  }
};

const findContestPage = (page, take, res) => {
  prisma.contest.findMany({
    skip: (page - 1) * take,
    take: take,
    where: {},
    orderBy: {
      createAt: "desc",
    },
  });
};

export default handle;
