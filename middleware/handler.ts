import nc from "next-connect";
import morgan from "morgan";
import { NextApiRequest, NextApiResponse } from "next";

const handler = nc<NextApiRequest, NextApiResponse>();

handler.use(morgan("combined"));

export default handler;
