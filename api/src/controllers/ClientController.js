const db = require('../database/clients.mock')
const filtred = require('../helper/filter-db')

const ClientController = {
    /** Get all clients */
    async listAll (req, res, next)  {
        return res.status(200).json(filtred)
    },
    /** Get clients by name */
    async listClientByName (req, res, next) {
        const {name} = req.params;
        let getClientByName
    
        getClientByName = filtred.find(item => {
            if (item.name.includes(name)) {
              return true;
            }
        });
    
        if (!getClientByName) return res.status(404).send('Client not found');
    
        return res.json(getClientByName)
    },
    /** Get client totals */
    async clientTotals (req, res, next)  {
        let {client_id} = req.params;
        let getClientById
    
        getClientById = filtred.find( item => item._id == client_id)
        if (!getClientById) return res.status(404).send('Client not found');
    
        let bodyResponse = {
          numOfEnterprises: getClientById.numOfEnterprises,
          numOfRealties: getClientById.numOfRealties,
        }
        return res.status(200).send(bodyResponse)
    
      },
      async listClietnById (req, res, next)  {
        let {_id} = req.params;
        
        let getClientById
        getClientById = filtred.find( item => item._id == _id)
        if (!getClientById) return res.status(404).send('Client not found');
    
        let bodyResponse = {
          _id: getClientById._id,
          name: getClientById.name,
          image_src: getClientById.image_src,
        }
    
        return res.status(200).json(bodyResponse)
      }

}

module.exports = ClientController