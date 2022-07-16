const { GraphQLScalarType } = require("graphql");

const dateScalar = new GraphQLScalarType({
  name: "Date",
  parseValue(value) {
    return new Date(value);
  },
  serialize(value) {
    return value.toISOString();
  }
});

const resolvers = {
  Query: {
    async findAllUsers(root, args, { models }) {
      return await models.User.findAll();
    },
    async findUserById(root, { id }, { models }) {
      return await models.User.findByPk(id);
    },
    async findUserItems(root, { user_id, severity, dueDate }, { models }) {
      return await models.Item.findAll({
        where: {
          user_id,
          ...(severity && { severity }),
          ...(dueDate && { dueDate })
        }
      });
    }
  },
  Mutation: {
    async createItem(
      root,
      { user_id, title, description, isCompleted, severity, dueDate },
      { models }
    ) {
      return models.Item.create({
        user_id,
        title,
        description,
        severity,
        isCompleted,
        dueDate
      });
    },
    async updateItem(
      root,
      { id, user_id, title, description, isCompleted, severity, dueDate },
      { models }
    ) {
      const res = await models.Item.update(
        { title, user_id, description, isCompleted, severity, dueDate },
        {
          where: {
            id: id
          }
        }
      );
      if (res) return res;
    },
    async deleteItem(root, { id }, { models }) {
      const res = await models.Item.destroy({
        where: {
          id: id
        }
      });
      return res;
    },
    async createUser(root, { username, email }, { models }) {
      return await models.User.create({ username, email });
    },
    async deleteUser(root, { id }, { models }) {
      return await models.User.destroy({ where: { id } });
    }
  },
  Date: dateScalar
};

module.exports = resolvers;
