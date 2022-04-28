import fs from "fs";
import { csvPaser } from "d3";
import { text } from "stream/consumers";

const csv = async () => {
  text = fs.readFile(
    "220410 링커리어 공모전 데이터.csv",
    "utf8",
    function (err, data) {
      if (err) throw err;
      console.log(data);
    }
  );
  console.log(typeof text);
  return csvPaser(text);
};

export default csv;
