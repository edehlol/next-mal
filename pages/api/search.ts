import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query, page } = req.query;
  console.log(query);
  console.log(page);

  console.log(
    `https://api.jikan.moe/v3/search/anime?q=${query}&page=${page}&genre=12&genre_exclude=1`
  );
  const response = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&page=${page}`);
  const data = await response.json();
  console.log(data);
  res.statusCode = 200;
  res.json(data);
}
