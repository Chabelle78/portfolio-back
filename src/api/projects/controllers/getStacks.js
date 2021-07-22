const prisma = require("./../../../../prismaClient");

module.exports = async (req, res, next) => {
  const { id } = req.params;
  try {
    const allStacks = await prisma.project
      .findUnique({ where: { id } })
      .stacks();
    res.status(200).json(allStacks);
  } catch (error) {
    res.status(404);
    next(error);
  }
};
