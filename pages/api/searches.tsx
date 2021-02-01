import handler from "./../../middleware/handler";
import counter from "./../../utils/counter.json";

function getKeysWithHighestValue(o: object, n: number) {
  var keys = Object.keys(o);
  keys.sort(function (a, b) {
    return o[b] - o[a];
  });
  return keys.slice(0, n);
}

handler.get((req, res) => {
  res.json(getKeysWithHighestValue(counter, 10));
});

export default handler;
