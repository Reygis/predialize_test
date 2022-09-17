const db = require('../database/clients.mock')
const filtred = require('../helper/filter-db')

const EnterpriseController = {
    /** Get all enterprises */
    async listAll (req, res, next) {
        let enterprises = db.map(item => ({
          clientName : item.name ,
          enterprise: item.enterprises
        }))
    
        return res.send(enterprises)
      },
      /** Get enterprises by name */
      async listEnterpriseByName (req, res, next) {
        const {name} = req.params;
        let getEnterprises = db.map(item => item.enterprises.find(
          enterpriseName => {
            if (enterpriseName.name.includes(name)) {
              return true;
            }
        })).filter(y => y != undefined)
    
        if (getEnterprises.length == 0) return res.status(404).send('Enterprise not found');
        
        return res.send(getEnterprises)
    
      },
      /** Get all enterprises by client */
      async getAllEnterprisesByClient (req, res, next) {
        let {client_id} = req.params;
    
        let getClientById
        getClientById = db.find( item => item._id == client_id)
        if (!getClientById) return res.status(404).send('Client not found');
    
        let bodyResponse = getClientById.enterprises.map(item => ({
            _id : item._id,
            image_src : item.image_src,  
            name : item.name,
        }));
    
        return res.status(200).send(bodyResponse)
    
      },
      /** Get enterprises by client and name */
      async getEnterpriseByClientAndEnterpName (req, res, next) {
        let {client_id} = req.params;
        let {name} = req.params;
    
        let getClientById
        getClientById = db.find( item => item._id == client_id)
        if (!getClientById) return res.status(404).send('Client not found');
    
        let bodyResponse = getClientById.enterprises.find(item => {
          if (item.name.includes(name)) {
            return true;
          }
        });
        if (!bodyResponse) return res.status(404).send('Enterprise not found')
    
        return res.status(200).send(bodyResponse)
      }

}

module.exports = EnterpriseController