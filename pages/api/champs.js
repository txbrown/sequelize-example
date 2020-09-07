// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Champ from '../../models/Champ';

export default async (req, res) => {
  const champs = await Champ.findAll();

  res.statusCode = 200;
  res.json(champs);
};
