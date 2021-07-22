const prisma = require("./../../../../prismaClient");

module.exports = async (req, res, next) => {
  try {
    const projects = await prisma.project.findMany();
    res.status(200).json(projects);
  } catch (error) {
    next(error);
  }
};
