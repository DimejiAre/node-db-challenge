
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: 'Do Research', project_id: 1, notes: 'searh for creative motivation'},
        {description: 'Contact Editors', project_id: 1, notes: ''},
        {description: 'Design flow', project_id: 2, notes: 'structure ad'},
        {description: 'Create animation', project_id: 2, notes: ''},
        {description: 'Direct the ad video', project_id: 2, notes: ''}
      ]);
    });
};
