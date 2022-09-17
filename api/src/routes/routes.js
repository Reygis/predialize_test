const ClientController = require('../controllers/ClientController')
const EnterpriseController = require('../controllers/EnterpriseController')
const DashboardController = require('../controllers/DashboardController')

module.exports.load = (app) => {
  /** Get all clients */
  app.get("/", ClientController.listAll);  

  /** Get clients by name */
  app.get("/name/:name", ClientController.listClientByName);
  
  /** Get client totals */
  app.get("/:client_id/totals", ClientController.clientTotals);  

  /** Get all enterprises */
  app.get("/enterprise", EnterpriseController.listAll);

  /** Get enterprises by name */
  app.get("/enterprise/name/:name", EnterpriseController.listEnterpriseByName );

  /** Get all enterprises by client */
  app.get("/:client_id/enterprise", EnterpriseController.getAllEnterprisesByClient);

  /** Get enterprises by client and name */
  app.get("/:client_id/enterprise/name/:name",EnterpriseController.getEnterpriseByClientAndEnterpName );

  /** Get general totals */
  app.get("/totals", DashboardController.totals);

  /** Get a client by _id */
  app.get("/:_id", ClientController.listClietnById);
};