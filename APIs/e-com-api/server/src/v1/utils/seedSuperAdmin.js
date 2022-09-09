
const inquirer = require('inquirer');
const chalk = require('chalk');

const UserService = require('../services/user');
const config = require('../config');

const { SUPER_MENTOR } = config.MODEL.UserRoles;
const promptForSuperMentor = () => {
  if (process.env.NODE_ENV !== 'production') {
    return new Promise((resolve, reject) => {
      inquirer
        .prompt([
          {
            name: 'name',
            message: `[?] Enter ${SUPER_MENTOR} Name (default: admin):`,
            default: 'admin'
          },
          {
            name: 'username',
            message: `[?] Enter ${SUPER_MENTOR} username (default: admin):`,
            default: 'admin'
          },
          {
            name: 'email',
            message: `[?] Enter ${SUPER_MENTOR} email (default: email@example.com):`,
            default: 'email@example.com'
          },
          {
            type: 'password',
            name: 'password',
            message: '[?] Enter Password:',
            mask: '*'
          }
        ])
        .then(resolve)
        .catch(reject);
    });
  }
  return {
    name: 'Africoders MP',
    email: 'email@example.com',
    password: 'something',
    username: 'africodersMP'
  };
};
const seedSuperMentor = async () => {
  try {
    let logInit = chalk.yellowBright(`[!] Initializing ${SUPER_MENTOR}!`);
    console.log(logInit);

    const superMentors = await UserService.findUsersByRole(SUPER_MENTOR);
    if (superMentors.length) {
      logInit = chalk.green(`[✔] ${SUPER_MENTOR} already initialized`);
      console.log(logInit);
    } else {
      const answers = await promptForSuperMentor();

      const superMentorAccount = {
        name: answers.name,
        username: answers.username,
        email: answers.email,
        password: answers.password,
        role: SUPER_MENTOR
      };
      await UserService.addUser(superMentorAccount);
      const log = chalk.green(`[✔] ${SUPER_MENTOR} created successfully.`);
      console.log(log);
    }
  } catch (error) {
    const errorLog = chalk.redBright(`[X] ${error.name}: ${error.message}`);
    console.log(errorLog);
    console.log('Please, restart the application.');

    process.exit(0);
  }
};

module.exports = seedSuperMentor;