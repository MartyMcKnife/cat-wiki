import handler from "../../../middleware/handler";
import editJsonFile from "edit-json-file";

handler.get((req, res) => {
  const id = req.query.id;
  const path = `${process.cwd()}/utils/counter.json`;
  console.log(path);
  console.log(id);
  const file = editJsonFile(path);

  const oldValue: number = file.get(`${id}`);
  console.log("updating value");
  file.set(`${id}`, oldValue + 1);
  file.save();
  res.json({ message: "success" });
});

export default handler;
