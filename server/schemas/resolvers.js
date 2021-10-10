const { User, Book } = require('../models');

const resolvers = {
    Query: {
        user: async() => {
            return User.find({});
        },
        book: async (parent, { _id }) => {
            const params = _id ? { _id } : {};
            return Book.find(params);
        },
    },
    Mutation: {
        createUser: async (parent, args) => {
            const user = await User.create(args);
            return user;
        },
        saveBook: async (parent, { userId }) => {
            const book = await Book.findOneAndUpdate(
                { _id: userId },
                {
                    $addToSet: { savedBooks: book },
                }
            )
        },
        deleteBook: async (parent, { userId }) => {
            const book = await Book.findOneAndDelete(
                { _id: userId},
                { savedBooks: book },
            )
        },
    }
};


module.exports = resolvers;