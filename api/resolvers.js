const todos = require('./todos');

const getListByStatus = (status) => {
    const completedList = () => todos.filter(todo => todo.completed);
    const uncompletedList = () => todos.filter(todo => !todo.completed);

    switch (status) {
        case 'COMPLETED':
            return completedList();

        case 'UNCOMPLETED':
            return uncompletedList();

        default:
            return todos;
    }
};

module.exports = {
    todo: ({ id }) => todos.find(todo => todo.id == id),
    todos: ({ status }) => getListByStatus(status)
};
