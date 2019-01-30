exports.up = function (connection, Promise) {
  return connection.schema.createTable('articles', function (articlesTable) {
    articlesTable.increments('article_id').primary();
    articlesTable.string('title');
    articlesTable.text('body');
    articlesTable.integer('votes').defaultTo(0);
    articlesTable.string('topic').references('topics.slug').onDelete('CASCADE');
    articlesTable.string('username').references('users.username').onDelete('CASCADE');
    articlesTable.timestamp('created_at').defaultTo(connection.fn.now());
  })
}

exports.down = function (connection, Promise) {
  return connection.schema.dropTable('articles')
};