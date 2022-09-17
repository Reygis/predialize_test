const db = require('../database/clients.mock')

const filtred = db.map(item => (
  {
    _id : item._id,
    image_src : item.image_src,  
    name : item.name,
    numOfEnterprises : item.enterprises.length,
    numOfRealties : item.enterprises.reduce((accumulator, object) => accumulator + parseInt(object.realties),0)
  }  
))

module.exports.load = (app) => {
  /** Get all clients */
  app.get("/", (req, res, next) => {
    return res.status(200).json(filtred)
  });  

  /** Get clients by name */
  app.get("/name/:name", (req, res, next) => {
    const {name} = req.params;
    let getClientByName

    getClientByName = filtred.find(item => {
        if (item.name.includes(name)) {
          return true;
        }
    });

    if (!getClientByName) return res.status(404).send('Client not found');

    return res.json(getClientByName)
  });
  
  /** Get client totals */
  app.get("/:client_id/totals", (req, res, next) => {
    let {client_id} = req.params;
    let getClientById

    getClientById = filtred.find( item => item._id == client_id)
    if (!getClientById) return res.status(404).send('Client not found');

    let bodyResponse = {
      numOfEnterprises: getClientById.numOfEnterprises,
      numOfRealties: getClientById.numOfRealties,
    }
    return res.status(200).send(bodyResponse)

  });  

  /** Get all enterprises */
  app.get("/enterprise", (req, res, next) => {});

  /** Get enterprises by name */
  app.get("/enterprise/name/:name", (req, res, next) => {});

  /** Get all enterprises by client */
  app.get("/:client_id/enterprise", (req, res, next) => {
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

  });

  /** Get enterprises by client and name */
  app.get("/:client_id/enterprise/name/:name", (req, res, next) => {
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
  });

  /** Get general totals */
  app.get("/totals", (req, res, next) => {
    let totals = {
      clientsTotal : db.length,
      enterprisesTotal : filtred.reduce((accumulator, object) => accumulator + object.numOfEnterprises,0),
      realtiesTotal : filtred.reduce((accumulator, object) => accumulator + object.numOfRealties,0)
    }

    return res.status(200).send(totals);
  });

  /** Get a client by _id */
  app.get("/:_id", (req, res, next) => {
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
  });
};