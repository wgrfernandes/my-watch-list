const db = {
  users: [
    {
      id: 1,
      name: "John",
      email: "john@example.com",
      password: "password",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 2,
      name: "Ueslei",
      email: "ueslei@example.com",
      password: "password",
      created_at: new Date(),
      updated_at: new Date(),
    },
  ],
  watchList: [
    {
      id: 1,
      user_id: 2,
      name: "My anime watch list",
      description: "My personal anime list to watch in 2023",
      category: "anime",
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null,
    },
  ],
  items: [
    {
      id: 1,
      watch_list_id: 1,
      name: "attack on title",
      genre: "comedy",
      season: "6",
      episode: "3",
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null,
    },
  ],
};

module.exports = { db };
