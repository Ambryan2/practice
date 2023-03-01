// CommonJS, every file in node is a module (by default)
//Modules - Encapsulated Code (only share minimum)
const names = require('../4-name') //have to start with dot
const sayHi = require('../5-utils')

const data = require('../6- alternative-flavor')
console.log(data)

require('../7-mind-grenade') //when you import a module you also invoke it

sayHi(names.john)
sayHi(names.peter)