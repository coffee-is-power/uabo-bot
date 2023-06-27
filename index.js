const { Client } = require('discord.js-selfbot-v13');
const client = new Client();
const child_process = require('child_process');
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}! We're ready to spam some memes on your screen!`);
});
client.on('message', msg => {
  if (msg.content.includes("uabo")) {
    const command = "./uabo.sh";
    child_process.exec(command);
   }
});
client.login(process.env.TOKEN);
