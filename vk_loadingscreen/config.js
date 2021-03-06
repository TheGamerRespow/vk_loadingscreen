/*
    This script was developed by Piter Van Rujpen/TheGamerRespow for Vulkanoa (https://discord.gg/bzMnYPS).
    Do not re-upload this script without my authorization. (I only give authorization by PM on FiveM.net (https://forum.fivem.net/u/TheGamerRespow))
*/

var VK = new Object(); // DO NOT CHANGE
VK.server = new Object(); // DO NOT CHANGE

VK.backgrounds = new Object(); // DO NOT CHANGE
VK.backgrounds.actual = 0; // DO NOT CHANGE
VK.backgrounds.way = true; // DO NOT CHANGE
VK.config = new Object(); // DO NOT CHANGE
VK.tips = new Object(); // DO NOT CHANGE
VK.music = new Object(); // DO NOT CHANGE
VK.info = new Object(); // DO NOT CHANGE
VK.social = new Object(); // DO NOT CHANGE
VK.players = new Object(); // DO NOT CHANGE 

//////////////////////////////// CONFIG

VK.config.loadingSessionText = "Chargement de la session..."; // Loading session text
VK.config.firstColor = [0, 191, 255]; // First color in rgb : [r, g, b]
VK.config.secondColor = [255, 150, 0]; // Second color in rgb : [r, g, b]
VK.config.thirdColor = [52, 152, 219]; // Third color in rgb : [r, g, b]

VK.backgrounds.list = [ // Backgrounds list, can be on local or distant(http://....)
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg"
];
VK.backgrounds.duration = 3000; // Background duration (in ms) before transition (the transition lasts 1/3 of this time)

VK.tips.enable = true; //Enable tips (true : enable, false : prevent)
VK.tips.list = [ // Tips list
    "Appuyez sur \"Y\" pour accèder à votre iPhone, attention il faut d'abord le récupérer aux bureaux de Life Invader !", // If you use double-quotes, make sure to put a \ before each double quotes
    "Appuyez sur \"T\" pour accèder à votre menu personnel !",
    "Appuyez sur \"U\" pour vérouiller ou déverouiller votre véhicule !",
    "Maintenez \"X\" pour mettre vos mains en l'air !",
];

VK.music.url = "music.ogg"; // Music url, can be on local or distant(http://....) ("NONE" to desactive music)
VK.music.volume = 0.2; // Music volume (0-1)
VK.music.title = "Post Malone - Go Flex"; // Music title ("NONE" to desactive)
VK.music.submitedBy = "suggérée par Piter Van Rujpen"; // Music submited by... ("NONE" to desactive)

VK.info.logo = "icon/vulkanoa.png"; // Logo, can be on local or distant(http://....) ("NONE" to desactive)
VK.info.text = "fondé et développé par Piter Van Rujpen"; // Bottom right corner text ("NONE" to desactive) 
VK.info.website = "vulkanoa.com"; // Website url ("NONE" to desactive) 
VK.info.ip = "145.239.74.177:2302"; // Your server ip and port ("ip:port")

VK.social.discord = ".me/vulkanoa"; // Discord url ("NONE" to desactive)
VK.social.twitter = "/vulkanoa"; // Twitter url ("NONE" to desactive)
VK.social.facebook = "/vulkanoa"; // Facebook url ("NONE" to desactive)
VK.social.youtube = "/thegamerrespow"; // Youtube url ("NONE" to desactive)
VK.social.twitch = "/thegamerrespow"; // Twitch url ("NONE" to desactive)

VK.players.enable = true; // Enable the players count of the server (true : enable, false : prevent)
VK.players.multiplePlayersOnline = "@players joueurs en ligne"; // @players equals the players count
VK.players.onePlayerOnline = "1 joueur en ligne"; // Text when only one player is on the server
VK.players.noPlayerOnline = "Aucun joueur en ligne"; // Text when the server is empty

////////////////////////////////
