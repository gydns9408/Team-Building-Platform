import prisma from "../../../../utilities/prisma/client";

const handle = async (req, res) => {
  switch (req.method) {
    case "GET":
      findOneTag(req, res);
      break;
    case "POST":
      createTag(req, res);
      break;
    case "PUT":
      updateTag(req, res);
      break;
    case "DELETE":
      deleteTag(req, res);
      break;
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
  res.json(result);
};

const createTag = async (req, res) => {
  const { description, imageUrl } = req.body;
  const { type, name } = req.query;

  const techStackCreateQuery = {
    ...(name !== undefined && { name: name }),
    ...(description !== undefined && { description: description }),
    ...(imageUrl !== undefined && { image_url: imageUrl }),
  };
  const result = await prisma?.[type].create({ data: techStackCreateQuery });

  res.json(result);
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

  res.json(result);
};

const deleteTag = async (req, res) => {
  const { id } = req.body;
  const { type } = req.query;
  const result = await prisma?.[type].delete({
    where: {
      id: id,
    },
  });
  res.json(result);
};

export default handle;

/*
const typeOption = async (type, name) => {
  switch (type) {
    case "Role":
      return { role_name: name };
    case "Tag":
      return { tag_name: name };
    case "TechStack":
      return { tech_stack_name: name };
    case "Program":
      return { program_name: name };
    case "Profession":
      return { profession_name: name };
    case "Certification":
      return { certificate_name: name };
    default:
      throw new Error(console.log(type));
  }
};
*/ 
