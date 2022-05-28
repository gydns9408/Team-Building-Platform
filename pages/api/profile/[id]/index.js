import { resolve } from "path";
import prisma from "../../../../utilities/prisma/client";

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
        profession:true
      }
    }
    );

    return await res.json(result);
  };


  export default findProfilePage;