import prisma from "../../../utilities/prisma/client";

const createContest = async (req, res) => {
  const {
    contest_name,
    content,
    prize,
    start_period,
    end_period,
    spcialization,
    corporate_type,
  } = req.body;

  const result = await prisma.contest.create({
    data: {
      contest_name: contest_name,
      content: content,
      prize: prize,
      start_period: start_period,
      end_period: end_period,
      //분야와 규모정의
      spcialization: {
        connectOrCreate: spcialization.map((sp) => {
          return {
            where: { spcialization_name: sp },
            create: { spcialization_name: sp },
          };
        }),
      },
      corporate_type: {
        connectOrCreate: {
          where: { corporate_name: corporate_type },
          create: { corporate_name: corporate_type },
        },
      },
    },
  });
  res.json(result);
};

export default createContest;
