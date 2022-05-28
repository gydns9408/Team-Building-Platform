import { resolve } from "path";
import prisma from "../../../../utilities/prisma/client";

const CountPage = async (req, res) => {
  const category = req.query.category;
  const result = await prisma?.[`${category}Article`].count();
  console.log(result);

  res.json(result);
  resolve();
};

export default CountPage;
