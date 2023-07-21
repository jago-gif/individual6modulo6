import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

const argv = yargs(hideBin(process.argv))
  .command({
    command: "adulto",
    describe: "Evalúa si la edad del individuo es mayor o igual a 18.",
    builder: (yargs) => {
      return yargs.option("edad", {
        alias: "e",
        describe: "Edad del individuo",
        demandOption: true,
        type: "number",
      });
    },
    handler: (argv) => {
      const edad = argv.edad;

      if (edad >= 18) {
        console.log("El individuo es mayor de edad.");
      } else {
        console.log("El individuo es menor de edad.");
      }
    },
  })
 
  .parse();
