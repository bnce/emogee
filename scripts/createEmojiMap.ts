import fs from "fs/promises";

fs.readFile("annotations.json", "utf8").then((v) => {
  const content = JSON.parse(v);

  const { annotations } = content.annotations;

  const map = Object.keys(annotations).reduce((pv, key) => {
    const annotation = annotations[key];
    pv[annotation.tts[0]] = key;
    return pv;
  }, {});

  console.log(JSON.stringify(map, null, 2));
});
