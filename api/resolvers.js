const todos = require('./todos');

module.exports = {
    todo: ({ id }) => {
        return todos.find(todo => todo.id == id);
    },
    todos: () => todos
};
