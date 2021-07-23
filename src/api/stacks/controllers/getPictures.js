const prisma = require("./../../../../prismaClient");

module.exports = async (req, res, next) => {
  const { id } = req.params;
  try {
    const allPictures = await prisma.stack
      .findUnique({ where: { id } })
      .pictures();
    res.status(200).json(allPictures);
  } catch (error) {
    next(error);
  }
};
