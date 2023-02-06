const db = require("../config/queries");

const getUsers = (request, response) => {
  db.query("SELECT * FROM omg_users ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = {
  getUsers,
};
