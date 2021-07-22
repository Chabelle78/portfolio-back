const prisma = require("./../../../../prismaClient");

module.exports = async (req, res, next) => {
  const { id } = req.params;
  try {
    const stack = await prisma.stack.findUnique({ where: { id } });
    res.status(200).json(stack);
  } catch (error) {
    next(error);
  }
};
