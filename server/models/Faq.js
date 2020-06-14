const Sequelize = require('sequelize'); 
const db = require('../config/DBConfig'); 

 const Faq = db.define('faq', {     
    question: {         
        type: Sequelize.STRING(512)    
    },     
    answer: {         
        type: Sequelize.STRING(4096)     
    },   
    uuid: {         
        type: Sequelize.STRING   
    },
    dateRelease: { 
        type: Sequelize.DATE 
    }
});
module.exports = Faq;