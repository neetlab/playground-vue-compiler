import fs from "node:fs/promises";
import path from "node:path";
import {
  parse,
  compileScript,
  compileTemplate,
  compileStyle,
} from "vue/compiler-sfc";

const filename = "App.vue";
const source = await fs.readFile(path.join("./src", filename), "utf-8");
const parseResult = parse(source);

{
  const result = compileScript(parseResult.descriptor, {
    id: "root",
    filename,
  });
  fs.writeFile("out/script.js", result.content);
}

{
  const result = compileTemplate({
    id: "root",
    filename,
    source,
  });
  fs.writeFile("out/template.js", result.code);
}

{
  const result = compileStyle({
    id: "root",
    filename,
    source: parseResult.descriptor.styles.at(0).content,
  });
  console.log(result);
  fs.writeFile("out/style.css", result.code);
}
