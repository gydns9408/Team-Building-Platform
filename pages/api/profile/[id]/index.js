import { resolve } from "path";
import prisma from "../../../../utilities/prisma/client";

const handle = async (req, res) => {
  switch (req.method) {
    case "GET":
      await findProfilePage(req, res);
      return resolve();
    case "POST":
      await updateProfilePage(req, res);
      return resolve();
    case "PUT":
      break;
    case "DELETE":
      break;
    default:
      throw new Error(console.log(req.method));
  }
};

const findProfilePage = async (req, res) => {
    const id = req.query.id;
  
    const whereQuery = {
      user : {
        name : id,
      },

    }

    const result = await prisma.Citizens.findMany({
      where : whereQuery,
      include:{
        user:true,
        tech_stack:true,
        profession:true,
        certificate:true,
        program:true,
        team:{
          include: {
            contest: true,
          },
        },
        profile:{
          include: {
            resume: true,
            contest: true,
          },
        },
        user_attention_profession: {
          include: {
            profession: true,
          },
        }
      }
    }
    );

    return await res.json(result);
  };

  const updateProfilePage = async (req, res) => {
    const { ...rest } = req.body;
  
    const updateQuery = {
      ...(title !== undefined && { title: title }),
      ...(content !== undefined && { content: content }),
      ...(tag !== undefined && { tag: tag }),
      ...rest,
    };
    const whereQuery = {
      article_id: parseInt(id),
    };
    const result = await prisma?.[`${category}Article`].update({
      where: whereQuery,
      data: updateQuery,
    });
    res.json(result);
    return resolve();
  };

  export default handle;