
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'Laptop', description: 'An electronic devices for achieving multiple tasks'},
        {name: 'Money', description: 'What you use to buy stuff'},
        {name: 'Animation Software', description: 'Software you use to create cool graphics and animation'},
      ]);
    });
};
