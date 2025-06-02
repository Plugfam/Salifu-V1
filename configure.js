/*
> Recode script give credits to›
Plugfam 

📝 | Created By Plugfam 
🖥️ | Base By Plugfam 
📝 | Created By Plugfam 
📌 |Credits Plugfam 
📱 |Chat wa:233559278841 
👑 |Github: plugfam2740
✉️ |Email: karimsalifu2740@gmail.com
*/
const fs = require('fs')
const chalk = require('chalk')
//=================================================//
// setting bot
global.owner = "233559278841"
global.ownername = "Plugfam"
global.botname = "Salifu-V1"
global.author = "233559278841"
global.xprefix = '.'
global.autostatus = true 
global.Public = true 
//=================================================//
global.egg = "15"
global.loc = "1"
global.domain = ""
global.apikey = ""
global.capikey = ""
//=================================================//
global.mess = {
    owner: '`command reserved for owner only<\>`',
 prem: '`command reserved for premium only<\>`',
    admin: '`command reserved for admins only<\>`',
    group: '`feature for group only<\>`',
    done: '`Done ✓`',
    error: 'Error !',
    success: 'Succes •'
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.green.bold(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
