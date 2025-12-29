#!/usr/bin/env node
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { pastel } from "gradient-string";
import figlet from "figlet";
import boxen from "boxen";
import ora from "ora";
import { select } from "@clack/prompts";


const sleep = (ms: number = 1500) =>
  new Promise(resolve => setTimeout(resolve, ms));

async function welcome() {
  const anim = chalkAnimation.rainbow("Powering up Shreyansh CLI ...");
  await sleep(2000);
  anim.stop();

  console.log(
    pastel(
      figlet.textSync("SHREYANSH", {   horizontalLayout: "fitted",
        verticalLayout: "fitted" })
    )
  );
}

async function typewriter(text: string, speed: number = 25) {
  for (const c of text) {
    process.stdout.write(c);
    await new Promise(r => setTimeout(r, speed));
  }
  process.stdout.write("\n");
}

async function showProfile() {
  console.log(
    boxen(
      `
${chalk.bold("Name")} : Shreyansh Paliwal
${chalk.bold("Role")} : Software Engineer
${chalk.bold("Education")} : Pre final year, \B.Tech, Information Technology, Guru Gobind Singh Indraprastha University
${chalk.bold("Location")} : New Delhi, India

${chalk.bold("Tech-stack")}
Typescript • Javascript • C/C++ • AWS • GCP
Next.js • React.js • Node.js • Express.js • Tailwind, Socket.IO, LLMs
Serverless • Docker • CI/CD • MongoDB • MySQL • Redis

${chalk.bold("Contact")}
Email    : Shreyanshpaliwal18@gmail.com
GitHub   : https://github.com/shreyp135
LinkedIn : https://linkedin.com/in/shreyanshpaliwal135
`,
      { padding: 1, borderColor: "green", borderStyle: "round" }
    )
  );
}

async function techStack() {
  await typewriter("\n> Loading brain modules...\n");
  const spinner = ora("Fetching Tech Powers...").start();
  await sleep(1200);
  spinner.succeed("Tech Powers Loaded");

  console.log(
    boxen(
      `
${chalk.bold("Tech Stack")}

${chalk.cyan("Languages")}
Typescript • Javascript • C/C++

${chalk.cyan("Cloud")}
AWS • GCP • Serverless

${chalk.cyan("Frontend")}
Next.js • React.js • TailwindCSS

${chalk.cyan("Backend")}
Node.js • Express.js • Socket.IO • LLMs

${chalk.cyan("DevOps")}
Docker • CI/CD

${chalk.cyan("Databases")}
MongoDB • MySQL • Redis
`,
      {
        padding: 1,
        borderColor: "yellow",
        borderStyle: "round",
      }
    )
  );
}

async function funFacts() {
  await typewriter(`
💡 Fun Facts:
• Debugs life like Production
• Fell in love with coding with the first error message of arrayindexoutofbound exception
• Sleeps... but background threads keep running
• Music is life
• Movies and Series binge-watcher
`);
}

async function easterEgg() {
  await typewriter(`
🤖 Hidden Stark Protocol Activated...

"Sometimes you gotta run before you can walk.
Developers aren’t born. They’re engineered — in late nights, hard problems,
lines of code, caffeine, and impossible bugfixes.
If you're nothing without the AI, then you shouldn't be using it."
– Tony Stark (reinterpreted by Shreyansh)


This developer?
Runs while others are still learning to stand.
Builds when others hesitate.
Delivers when it matters most.

Not just a coder.
An upgrade waiting to happen to your team.
`);
}


async function menu() {
  const choice = await select({
    message: "What do you want to explore?",
    options: [
      { label: "View Profile", value: "profile" },
      { label: "Tech Stack", value: "stack" },
      { label: "Fun Facts", value: "fun" },
      { label: "Easter Egg", value: "egg" },
      { label: "Exit", value: "exit" },
    ],
  });

  switch (choice) {
    case "profile":
      await showProfile();
      break;
    case "stack":
      await techStack();
      break;
    case "fun":
      await funFacts();
      break;
    case "egg":
      await easterEgg();
      break;
    case "exit":
      process.exit(0);
  }

  await menu();
}

(async () => {
  await welcome();
  await menu();
})();
