const db = require('../database/clients.mock')
const filtred = require('../helper/filter-db')

const DashboardController = {
  /** Get general totals */
async totals (req, res, next)  {
    let totals = {
      clientsTotal : db.length,
      enterprisesTotal : filtred.reduce((accumulator, object) => accumulator + object.numOfEnterprises,0),
      realtiesTotal : filtred.reduce((accumulator, object) => accumulator + object.numOfRealties,0)
    }

    return res.status(200).send(totals);
  }

}

module.exports = DashboardController