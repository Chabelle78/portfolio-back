const prisma = require("./../../../../prismaClient");

module.exports = async (req, res, next) => {
  const { id } = req.params;
  try {
    const job = await prisma.job.findUnique({ where: { id } });
    res.status(200).json(job);
  } catch (error) {
    next(error);
  }
};
