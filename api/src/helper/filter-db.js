const db = require('../database/clients.mock')

const filtredDb = db.map(item => (
    {
      _id : item._id,
      image_src : item.image_src,  
      name : item.name,
      numOfEnterprises : item.enterprises.length,
      numOfRealties : item.enterprises.reduce((accumulator, object) => accumulator + parseInt(object.realties),0)
    }  
  ))

module.exports = filtredDb