import { resolve } from "path";
import prisma from "../../../../utilities/prisma/client";

const handle = async (req, res) => {
  switch (req.method) {
    case "GET":
      findTags(req, res);
      resolve();
      break;
    case "POST":
      break;
    case "PUT":
      break;
    case "DELETE":
      break;
    default:
      throw new Error(console.log(req.method));
  }
};

const findTags = async (req, res) => {
  const { type } = req.query;
  console.log(type);
  const result = await prisma?.[type].findMany({});
  res.json(result);
};

export default handle;
