const prisma = require("./../../../../prismaClient");

module.exports = async (req, res, next) => {
  const { id } = req.params;
  try {
    const formation = await prisma.formation.findUnique({ where: { id } });
    res.status(200).json(formation);
  } catch (error) {
    next(error);
  }
};
