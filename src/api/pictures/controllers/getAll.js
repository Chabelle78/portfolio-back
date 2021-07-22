const prisma = require("./../../../../prismaClient");

module.exports = async (req, res, next) => {
  try {
    const pictures = await prisma.picture.findMany();
    res.status(200).json(pictures);
  } catch (error) {
    next(error);
  }
};
