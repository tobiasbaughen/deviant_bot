const Discord = require('discord.js');
var opusscript = require("opusscript");
const bot = new Discord.Client();

var cur_channel = 0;
admin_channel = "277269309384818688";
test_channel = "255621660860743681";



//BOT RESOURCES
    brody_quotes = [
        "Go kill yourself faggot.",
        "I bet you dont know how much me and <@229845315145039872> talk behind you back.",
        "I hope Mr.reddix will let me keep going to tabletop gaming after I leave school.",
        "Im unfriending you.",
        "Insensitive cunt I actually hope you die.",
        "Fuck off, I'm unfriending everyone from that stupid fucking school and im never talking to you again so fuck off.",
        "Im serious.",
        "You're actually such a cunt why was I even friends with you?",
        "My aunt beats my cousin.",
        "I actually hope you step on a nail and get lock-jaw and die.",
        "In skyrim I kill people like you without a second thought.",
        "I only talked to you because I felt sorry for you.",
        "<@238545774751907841> bullies me.",
        "Fuck you.",
        "Faggot.",
        "Cunt."
    ];

//BOT COMMANDS
    bot.on('message',(message) =>{

    //CENSORSHIP ENGINE
        incoming = message.content.split(" ");
        if (
            incoming.indexOf("nigger") > -1 ||
            incoming.indexOf("Nigger") > -1 || 
            incoming.indexOf("NIGGER") > -1 ||
            incoming.indexOf("niggers") > -1 ||
            incoming.indexOf("Niggers") > -1 ||
            incoming.indexOf("NIGGERS") > -1 ){
        console.log("CONTRABAND DETECTED. OFFENDER: "+message.author.username+"\nCONTENT: '"+message.content+"'\n");
        bot.channels.get(admin_channel).sendMessage("CONTRABAND DETECTED. OFFENDER: "+message.author.username);
        message.delete(1000);
        message.channel.sendMessage("Keep it PG and PC "+message.author.username+".");
        }

    //COMMANDS 
        if(incoming.indexOf("brody?") > -1 ){
            quote_1 = rand = brody_quotes[Math.floor(Math.random() * brody_quotes.length)];
            quote_2 = rand = brody_quotes[Math.floor(Math.random() * brody_quotes.length - 1)];
            quote_3 = rand = brody_quotes[Math.floor(Math.random() * brody_quotes.length + 1)];
            message.channel.sendMessage(quote_1+" "+quote_2+" "+quote_3);
        }

        if(incoming.indexOf("!ron") > -1 ){
            message.channel.sendMessage(":carrot:");
        }

        if(incoming.indexOf("!jack") > -1 ){
            message.channel.sendMessage("Im spending the night with Sasha.");
        }

        if(incoming.indexOf("!toby") > -1 ){
            message.channel.sendMessage("I bet you dont know how much me and <@229845315145039872> talk behind you back.");
        }

        if(incoming.indexOf("!poka") > -1 ){
            message.channel.sendMessage(":knife: :dagger:");
        }
        
        if(message.content == 'if you wrestle with jeff'){
            message.channel.sendMessage("you're asking for death <:death:272908151941234689>.");
        }


//MUSIC STUFF
        let command = message.content.split(" ")[0];
        let v_channel = message.content.split(" ")[1];
        let source = message.content.split(" ")[2];
        let initiator = message.author.username;

        //VOICE CHANNEL CODES
        switch(v_channel){
            case "gen":
                voice_channel = '238546258568937473';
                cur_channel = "General";
            break;

            case "ow":
                voice_channel = '249830524325986304';
                cur_channel = "Overwatch";
            break;

            case "ow2":
                voice_channel = '269383565630898176';
                cur_channel = "Overwatch 2";
            
            case "other":
                voice_channel = '252363178288087040';
                cur_channel = "Other";
            break;
        }


        if(command == '!play'){
            console.log("PLAY SESSION REQUEST BY "+initiator+"\nCHANNEL: "+cur_channel+"\nFILE: "+source+"\n");
            bot.channels.get(admin_channel).sendMessage("PLAY SESSION REQUEST BY "+initiator+"\nCHANNEL: "+cur_channel+"\nFILE: "+source);
            const ytdl = require('ytdl-core');
            const streamOptions = { seek: 0, volume: 1 };
            let channel = bot.channels.get(voice_channel);
            channel.join()
            .then(connection => {
                const stream = ytdl(source, {filter : 'audioonly'});
                const dispatcher = connection.playStream(stream, streamOptions);
            })
            
            
        }

        if(command == '!stop'){
            console.log("PLAY SESSION CANCELLED BY "+initiator+"\n");
            bot.channels.get(admin_channel).sendMessage("PLAY SESSION CANCELLED BY "+initiator);
            let channel = bot.channels.get(voice_channel);
            channel.leave()
        }

    });

//BOT STARTUP
    bot.login('MjY1MzI5NzU5MjI2MDM2MjI0.C08G_Q.VpqlIGufM-JdZC31XCIpvhLf0rc');
    var lines = process.stdout.getWindowSize()[1];
    for(var i = 0; i < lines; i++) {
        console.log('\r\n');
    }

    console.log("DEVIANT_BOT v1.31\n-----------\nConnected to server...\n");


   



