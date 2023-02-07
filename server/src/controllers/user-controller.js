const userService = require("../services/userService");

async function findUserById(request, response) {
  const id = request.params.id;
  const user = await userService.findUserById(id);
  return response.send(user);
}

module.exports = {
  findUserById,
};
