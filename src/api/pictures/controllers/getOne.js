const prisma = require("./../../../../prismaClient");

module.exports = async (req, res, next) => {
  const { id } = req.params;
  try {
    const picture = await prisma.picture.findUnique({ where: { id } });
    res.status(200).json(picture);
  } catch (error) {
    next(error);
  }
};
