import axios, { AxiosError } from "axios";

import handler from "./../../../middleware/handler";

import { BreedsList } from "./../../../interfaces/catapi";

const baseURL = "https://api.thecatapi.com/v1";

handler.get(async (req, res, next) => {
  try {
    const resp = await axios.get<BreedsList[]>(
      `${baseURL}/breeds/search?q=${req.query.query}`,
      {
        headers: { "x-api-key": process.env.CATAPI },
      }
    );
    const cats = resp.data.map((cat) => {
      return { name: cat.name, id: cat.id };
    });

    res.status(200).json(cats);
  } catch (error) {
    if (error.response) {
      const err: AxiosError = error;
      res.status(503).json({
        message: "Error getting info from TheCatApi",
        error: err.response,
      });
    } else {
      next(Error("There was a problem with your request"));
    }
  }
});

export default handler;
