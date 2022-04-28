import prisma from "../../../utilities/prisma/client";

const handle = async (req, res) => {
  switch (req.method) {
    case "GET":
      break;
    case "POST":
      break;
    case "PUT":
      updateContest(req, res);
      break;
    case "DELETE":
      deleteContest(req, res);
      break;
    default:
      throw new Error(console.log(req.method));
  }
};

//특정 아이디의 대회 정보를 삭제
const deleteContest = async (req, res) => {
  const { id } = req.body;
  const result = await prisma.contest.delete({
    where: {
      id: id,
    },
  });
  res.json(result);
};

export default handle;

const updateContest = async (req, res) => {
  const { id } = req.body;
  const {
    contest_name,
    content,
    prize,
    start_period,
    end_period,
    spcialization,
    corporate_type,
  } = req.body;
  const result = await prisma.contest.update({
    where: {
      id: id,
    },
    data: {
      contest_name: contest_name,
      content: content,
      prize: prize,
      start_period: start_period,
      end_period: end_period,
      //분야와 규모정의
      spcialization: {
        connectOrCreate: {
          spcialization_name: spcialization,
        },
      },
      corporate_type: {
        connectOrCreate: {
          corporate_name: corporate_type,
        },
      },
    },
  });
  res.json(result);
};
