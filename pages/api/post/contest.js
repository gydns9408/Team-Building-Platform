import prisma from "../../../utilities/prisma/client";

//나중에 게시물 타입별로 나눌 수 있도록 핸들러를 구성하도록한다.
// export default async function handle(req, res) {
//   switch (req.method) {
//     case "CREATE":
//       handleCREATE(req, res);
//       break;
//     case "READ":
//       handleREAD(req, res);
//       break;
//     case "UPDATE":
//       handleUPDATE(req, res);
//       break;
//     case "DELETE":
//       handleDELETE(req, res);
//       break;
//     default:
//       throw new Error(console.log(req.method));
//   }
// }

export default async function handleCREATE(req, res) {
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
        connectOrCreate: {
          where: { name: spcialization },
          create: { name: spcialization },
        },
      },
      corporate_type: {
        connectOrCreate: {
          where: { name: corporate_type },
          create: { name: corporate_type },
        },
      },
    },
  });
  res.json(result);
}

// const handleREAD = async (req, res) => {
//   const {
//     contest_name,
//     content,
//     prize,
//     start_period,
//     end_period,
//     spcialization,
//     corporate_type,
//   } = req.body;

//   const result = await prisma.contest.create({
//     data: {
//       contest_name: contest_name,
//       content: content,
//       prize: prize,
//       start_period: start_period,
//       end_period: end_period,
//       //connectOrCreate에서 where의 값은 unique여만한다.
//       //분야와 규모정의
//       spcialization: {
//         connectOrCreate: {
//           where: { name: spcialization },
//           create: { name: spcialization },
//         },
//       },
//       corporate_type: {
//         connectOrCreate: {
//           where: { name: corporate_type },
//           create: { name: corporate_type },
//         },
//       },
//     },
//   });
//   res.json(result);
// };

// const handleUPDATE = async (req, res) => {
//   const {
//     contest_name,
//     content,
//     prize,
//     start_period,
//     end_period,
//     spcialization,
//     corporate_type,
//   } = req.body;

//   const result = await prisma.contest.create({
//     data: {
//       contest_name: contest_name,
//       content: content,
//       prize: prize,
//       start_period: start_period,
//       end_period: end_period,
//       //connectOrCreate에서 where의 값은 unique여만한다.
//       //분야와 규모정의
//       spcialization: {
//         connectOrCreate: {
//           where: { name: spcialization },
//           create: { name: spcialization },
//         },
//       },
//       corporate_type: {
//         connectOrCreate: {
//           where: { name: corporate_type },
//           create: { name: corporate_type },
//         },
//       },
//     },
//   });
//   res.json(result);
// };

// const handleDELETE = async (req, res) => {
//   const {
//     contest_name,
//     content,
//     prize,
//     start_period,
//     end_period,
//     spcialization,
//     corporate_type,
//   } = req.body;

//   const result = await prisma.contest.create({
//     data: {
//       contest_name: contest_name,
//       content: content,
//       prize: prize,
//       start_period: start_period,
//       end_period: end_period,
//       //connectOrCreate에서 where의 값은 unique여만한다.
//       //분야와 규모정의
//       spcialization: {
//         connectOrCreate: {
//           where: { name: spcialization },
//           create: { name: spcialization },
//         },
//       },
//       corporate_type: {
//         connectOrCreate: {
//           where: { name: corporate_type },
//           create: { name: corporate_type },
//         },
//       },
//     },
//   });
//   res.json(result);
// };
