const prisma = require("./../../../../prismaClient");

module.exports = async (req, res, next) => {
  try {
    const jobs = await prisma.job.findMany();
    res.status(200).json(jobs);
  } catch (error) {
    next(error);
  }
};
