import { suma, multiplica } from "./controller.js";
import chalk from "chalk";

const sum = suma(4,12);
console.log(sum);

const multi = multiplica(8,4);
console.log(chalk.green(multi));