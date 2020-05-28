const Todo = require('./model');

const queries = {
    todo: ({ id }) => Todo.findById(id),
    todos: ({ status }) => Todo.find({ status }),
};

const mutations = {
    createTodo: ({ input }) => {
        return Todo.create(input);
    },
    updateTodo: ({ id, input }) => {
        return Todo.findByIdAndDelete(id, input, { new: true });
    },
    deleteTodo: ({ id }) => {
        return Todo.deleteOne({ _id: id }).then(() => id);
    },
};

const resolvers = {
    ...queries,
    ...mutations
};

// EXPORT
module.exports = resolvers;
