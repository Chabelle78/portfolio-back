const prisma = require("./../../../../prismaClient");

module.exports = async (req, res, next) => {
  const { id } = req.params;
  try {
    const company = await prisma.company.findUnique({ where: { id } });
    res.status(200).json(company);
  } catch (error) {
    next(error);
  }
};
