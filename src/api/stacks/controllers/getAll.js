const prisma = require("./../../../../prismaClient");

module.exports = async (req, res, next) => {
  try {
    const stacks = await prisma.stack.findMany();
    res.status(200).json(stacks);
  } catch (error) {
    next(error);
  }
};
