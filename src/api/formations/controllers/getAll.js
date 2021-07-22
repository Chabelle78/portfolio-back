const prisma = require("./../../../../prismaClient");

module.exports = async (req, res, next) => {
  try {
    const formations = await prisma.formation.findMany();
    res.status(200).json(formations);
  } catch (error) {
    next(error);
  }
};
