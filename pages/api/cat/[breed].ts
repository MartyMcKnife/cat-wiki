import axios, { AxiosError } from "axios";

import handler from "./../../../middleware/handler";

import { Breed, BreedImage } from "./../../../interfaces/catapi";

const baseURL = "https://api.thecatapi.com/v1";

handler.get(async (req, res, next) => {
  const breed = req.query.breed;
  try {
    const info = await axios.get<Breed[]>(
      `${baseURL}/breeds/search?q=${breed}`,
      {
        headers: { "x-api-key": process.env.CATAPI },
      }
    );
    const images = await axios.get<BreedImage[]>(
      `${baseURL}/images/search?breed_id=${breed}&limit=8`,
      {
        headers: { "x-api-key": process.env.CATAPI },
      }
    );

    const refinedImages = images.data.map((image) => {
      return { url: image.url };
    });

    res.status(200).json({ info: info.data[0], images: refinedImages });
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
