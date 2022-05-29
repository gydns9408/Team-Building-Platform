import { resolve } from "path";
import prisma from "../../../../utilities/prisma/client";

const CountPage = async (req, res) => {
  const category = req.query.category;
  const currentProfession = req.query.currentProfession;
  const result = await prisma?.[`${category}Article`].count({
    ...(currentProfession !== undefined && {
      where: {
        contest: {
          profession: {
            some: { name: currentProfession },
          },
        },
      },
    }),
  });

  res.json(result);
  resolve();
};

export default CountPage;
