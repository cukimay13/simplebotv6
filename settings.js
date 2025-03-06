/*

  !- Credits By Skyzopedia
  https://wa.me/6285624297894
  
*/

const fs = require('fs');
const chalk = require('chalk');
const { version } = require("./package.json")

//~~~~~~~~~~~ Settings Bot ~~~~~~~~~~~//
global.owner = '62882003155815'
global.versi = "6.0.0"
global.namaOwner = "han"
global.packname = 'Simple WhatsAp'
global.botname = 'Simple Hanz'
global.botname2 = 'Simple Hanz'

//~~~~~~~~~~~ Settings Link ~~~~~~~~~~//
global.linkOwner = "https://wa.me/62882003155815"
global.linkWebsite = "https://restapi.simplebot.my.id"
global.linkGrup = "-"

//~~~~~~~~~~~ Settings Jeda ~~~~~~~~~~//
global.delayJpm = 3500
global.delayPushkontak = 6000

//~~~~~~~~~~ Settings Saluran ~~~~~~~~~//
global.linkSaluran = "https://whatsapp.com/channel/0029VavuWOkBPzjXlCxASl3j"
global.idSaluran = ""
global.namaSaluran = "Hanz Anak Baik🥰🥰"

//~~~~~~~~~ Settings Orderkuota ~~~~~~~~//
global.pinH2H = "-"
global.passwordH2H = "-"
global.merchantIdOrderKuota = "-"
global.apiOrderKuota = "-"
global.qrisOrderKuota = "-"

//~~~~~~~~~~ Settings Apikey ~~~~~~~~~~//
global.apiDigitalOcean = "-"
global.apiSimpleBot = "skyzo"

//~~~~~~~~~ Settings Payment ~~~~~~~~~//
global.dana = "082192140458"
global.ovo = "082192140458"
global.gopay = "082144385548"

//~~~~~~~~~~ Settings Image ~~~~~~~~~~//
global.image = {
menu: "https://files.catbox.moe/ndu1t8.jpg", 
reply: "https://files.catbox.moe/bvkj7x.jpg", 
logo: "https://files.catbox.moe/bvkj7x.jpg", 
qris: "https://files.catbox.moe/ndu1t8.jpg"
}

//~~~~~ Settings Api Panel Buy Panel ~~~~~//
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = "https://hanzz.turu.biz.id"
global.apikey = "ptla_bWNQIJpKJkPERlnQs8p2UUIZUYrTF0mESeTO7UM1z" //ptla
global.capikey = "ptlc_e5HDwnIfiUDyDNst8501HOu0aeuSWxMmxKFWRyOjc" //ptlc

//~~~~~~~ Settings Api Subdomain ~~~~~~~//
global.subdomain = {
"serverku.biz.id": {
"zone": "4e4feaba70b41ed78295d2dcc090dd3a", 
"apitoken": "d6kmqwlvi0qwCyMxoGuc3EBAYRYvbulhjhR9T0I7"
}, 
"privatserver.my.id": {
"zone": "699bb9eb65046a886399c91daacb1968", 
"apitoken": "fnl7ixlJ-Y-7zxJ7EUGEXitfmfLiPGW985iXobdu"
}, 
"panelwebsite.biz.id": {
"zone": "2d6aab40136299392d66eed44a7b1122", 
"apitoken": "ImdyjF7XVU7ObDbdCr7LwSUZ4eDQJ-QozAbUIWoF"
}, 
"mypanelstore.web.id": {
"zone": "c61c442d70392500611499c5af816532", 
"apitoken": "ImdyjF7XVU7ObDbdCr7LwSUZ4eDQJ-QozAbUIWoF"
}, 
"pteroserver.us.kg": {
"zone": "f693559a94aebc553a68c27a3ffe3b55", 
"apitoken": "ImdyjF7XVU7ObDbdCr7LwSUZ4eDQJ-QozAbUIWoF"
}, 
"digitalserver.us.kg": {
"zone": "df13e6e4faa4de9edaeb8e1f05cf1a36", 
"apitoken": "ImdyjF7XVU7ObDbdCr7LwSUZ4eDQJ-QozAbUIWoF"
}, 
"shopserver.us.kg": {
"zone": "54ca38e266bfdf2dcdb7f51fd79c2db5", 
"apitoken": "ImdyjF7XVU7ObDbdCr7LwSUZ4eDQJ-QozAbUIWoF"
}
}

//~~~~~~~~~~ Settings Message ~~~~~~~~//
global.mess = {
	owner: "*[ Akses Ditolak ]*\nFitur ini hanya untuk owner bot!",
	admin: "*[ Akses Ditolak ]*\nFitur ini hanya untuk admin grup!",
	botAdmin: "*[ Akses Ditolak ]*\nFitur ini hanya untuk ketika bot menjadi admin!",
	group: "*[ Akses Ditolak ]*\nFitur ini hanya untuk dalam grup!",
	private: "*[ Akses Ditolak ]*\nFitur ini hanya untuk dalam private chat!",
	prem: "*[ Akses Ditolak ]*\nFitur ini hanya untuk user premium!",
	wait: 'Loading...',
	error: 'Error!',
	done: 'Done'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})