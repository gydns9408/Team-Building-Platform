import prisma from "../../../utilities/prisma/client";

const permissionChecker = async (req, res) => {
  const { userId } = req.body;
  const queryToFindCitizens = {
    where: {
      user_id: userId,
    },
  };

  const result = await prisma.citizens
    .findUnique(queryToFindCitizens)
    .then(async (result) => {
      return result !== null
        ? result
        : await prisma.Citizens.create({
            data: {
              user: {
                connect: {
                  id: userId,
                },
              },
            },
          });
    });
  res.json(result);
};

export default permissionChecker;
