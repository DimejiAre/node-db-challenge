
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'write a book', description: 'Write a good fantasy novel'},
        {name: 'create an Ad', description: 'Create a very interesting advertisement for television'}
      ]);
    });
};
