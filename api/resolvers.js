const todosSource = require('./todos');

let todos = JSON.parse(JSON.stringify(todosSource));

const query = {
    todo: ({ id }) => _find(id),
    todos: ({ status }) => _getListByStatus(status),
};

const mutation = {
    createTodo: ({ input }) => {
        const todo = new _Todo(input);

        todos.push(todo);

        return todo;
    },
    updateTodo: ({ id, input }) => {
        const todo = _find(id);

        Object.assign(todo, input);

        return todo;
    },
    deleteTodo: ({ id }) => {
        todos = todos.filter(_byID(id, false));
        console.log(100, todos);

        return id;
    },
};

const resolvers = {
    ...query,
    ...mutation
};

const _getListByStatus = (status) => {
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

// UTILS
const _byID = (id, equal = true) => {
    return function(todo) {
        return equal ? todo.id == id : todo.id != id;
    };
};

const _find = (id) => {
    return todos.find(_byID(id));
};

class _Todo {
    static id() {
        return Math.floor(Math.random() * (10000 - 1000) + 1000);
    }

    constructor({ title, completed = false, steps = [] }) {
        this.id = _Todo.id();
        this.title = title;
        this.completed = completed;
        this.steps = steps;
    }
}

// EXPORT
module.exports = resolvers;
