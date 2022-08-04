const inquirer = require("inquirer");
const chalk = require("chalk");

inquirer
  .prompt([
    {
      name: "nome",
      message: "Qual o seu nome? ",
    },
    {
      name: "profissao",
      message: "Qual a sua profissão? ",
    },
  ])
  .then((answers) => {
    if (!answers.nome || !answers.profissao) {
      throw new Error("Favor informar o nome e profissão!");
    }
    const response = `Nome: ${answers.nome}\nProfissão: ${answers.profissao}`;
    console.log(chalk.bgYellow.black(response));
  })
  .catch((err) => console.log(err));
