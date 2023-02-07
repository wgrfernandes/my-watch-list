const { db } = require("../../db");

async function findUserById(id) {
  const user = db.users.find((user) => user.id === Number(id));

  return user;
}

module.exports = {
  findUserById,
};
