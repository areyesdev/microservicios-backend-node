const db = {
  user: [{ id: 1, name: 'Andres' }],
};

function list(table) {
  return db[table];
}

function get(table, id) {
  let col = list(table);
  return col.find((item) => item.id == id) || null;
}

function upsert(table, data) {
  db[collection].push(data);
}

function remove(table, id) {
  return true;
}

module.exports = {
  list,
  get,
  upsert,
  remove,
};
