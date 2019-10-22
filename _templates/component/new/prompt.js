module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Qual o nome do componente?',
  },
  {
    type: 'select',
    name: 'type',
    message: 'Qual o tipo do componente?',
    choices: ['atoms', 'molecules', 'organisms', 'templates'],
  },
];
