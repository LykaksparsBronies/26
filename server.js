var Discord = require("discord.js");
var Client = new Discord.Client();
var ClientID = "207527979276828672";
var prefix = "!";
var jsonHttp = require('json-http');

Client.on("message", function(message) {
  if(message.content) {
    console.log(message.content + " // " + message.server.name);
  }
  if(message.content === prefix + "hi") {
    Client.sendMessage(message.channel, "Hello, Im Am 26! :sangoHappy:");
  }
  if(message.content === prefix + "get") {
    Client.sendMessage(message.channel, "https://discordapp.com/oauth2/authorize?client_id=" + ClientID + "&scope=bot&permissions=0");
  }
  if(message.content === prefix +"getwithperm") {
    Client.sendMessage(message.channel, "https://discordapp.com/oauth2/authorize?client_id=" + ClientID + "&scope=bot&permissions=1");
  }
  // START TAG //
  if(message.content === prefix + "melons") {
    Client.sendFile(message.channel, "Melons.png");
  }
  if(message.content === prefix + "killme") {
    Client.sendMessage(message.channel, "Your are now... DEAD!");
  }
  // END TAG //
  if(message.content === prefix + "create") {
    Client.sendMessage(message.channel, "Sorry, i cant create.. Talk to create at https://discord.gg/v9hrgch !");
  }
  if(message.content === prefix + "cat") {
    Client.sendMessage(message.channel, "Loading Cats..");
    jsonHttp.getJson("http://random.cat/meow", function(err, response) {
      Client.sendMessage(message.channel, response);
    });
  }
  // START CONFIG //
  if (message.content === "26Config/Prefix/]") {
    prefix = "]";
    Client.sendMessage(message.channel, "Prefix Has Been Changed!");
  }
  // END CONFIG //
});

Client.loginWithToken("***CENSORED TOKENS***");
