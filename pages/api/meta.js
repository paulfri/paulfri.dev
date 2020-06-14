// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200;
  res.json({ status: "ok", revision: process.env.VERCEL_GITHUB_COMMIT_SHA });
};
