import { resolve } from "path";
import prisma from "../../../../utilities/prisma/client";

const handle = async (req, res) => {
  switch (req.method) {
    case "GET":
      return findOneTag(req, res);
    case "POST":
      return createTag(req, res);
    case "PUT":
      return updateTag(req, res);
    case "DELETE":
      return deleteTag(req, res);
    default:
      throw new Error(console.log(req.method));
  }
};

const findOneTag = async (req, res) => {
  const { type, name } = req.query;
  const teckStackFindQuery = {
    ...(name !== undefined && { name: name }),
  };
  const result = await prisma?.[type].findUnique({
    where: teckStackFindQuery,
  });
  await res.json(result);
  resolve();
};

const createTag = async (req, res) => {
  const { description, image_url } = req.body;
  const { type, name } = req.query;

  const techStackCreateQuery = {
    ...(name !== undefined && { name: name }),
    ...(description !== undefined && { description: description }),
    ...(image_url !== undefined && { image_url: image_url }),
  };
  const result = await prisma?.[type].create({ data: techStackCreateQuery });

  await res.json(result);
  resolve();
};

const updateTag = async (req, res) => {
  const { id, description, imageUrl } = req.body;
  const { type, name } = req.query;
  const techStackUpdateQuery = {
    ...(name !== undefined && { name: name }),
    ...(description !== undefined && { description: description }),
    ...(imageUrl !== undefined && { image_url: imageUrl }),
  };

  const result = await prisma?.[type].update({
    where: { id: id },
    data: techStackUpdateQuery,
  });

  await res.json(result);
  resolve();
};

const deleteTag = async (req, res) => {
  const { id } = req.body;
  const { type } = req.query;
  const result = await prisma?.[type].delete({
    where: {
      id: id,
    },
  });
  await res.json(result);
  resolve();
};

export default handle;
