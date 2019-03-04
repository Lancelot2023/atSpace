const Discord = require("discord.js");
const Client = new Discord.Client();
const prefix = "!";

Client.on('ready' , ()=>{
console.log("Bot is online");
})

Client.on('message' , (message)=>{
    if(!message.content.startsWith(prefix)) return;

    if(message.content.startsWith(prefix + "hello")){
        message.channel.send("Hello.");

    }

    if(message.content.startsWith(prefix + "prune")){
        let args = message.content.split(" ").slice(1);
        let author = message.member;
        let role = message.guild.roles.find('name' , "atSpace Gaming");
        if(author.roles.has(role.id)){
            if(!args[0]){
                message.delete();
                message.author.send("No arguments given.");
                return;
            }
            if(args[0] > 100){
                message.delete();
                message.author.send("Maximum is 100 messages at once.");
                return;    
            }

            message.delete();
            message.channel.bulkDelete(args[0]);
            message.author.send({embed:{
                color: 0x28d62b,
                description: "Done, I have deleted " + args[0] + " messages."

            }})
            return;    
        }

        
    }   
    
    
})

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
