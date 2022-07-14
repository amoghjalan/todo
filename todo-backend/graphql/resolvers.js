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
    async allItems(root, { severity, dueDate }, { models }) {
      if (severity && dueDate)
        return models.Item.findAll({
          where: {
            severity: severity,
            dueDate: dueDate
          }
        });
      else if (severity)
        return models.Item.findAll({
          where: {
            severity: severity
          }
        });
      else if (dueDate)
        return models.Item.findAll({
          where: {
            dueDate: dueDate
          }
        });
      return models.Item.findAll();
    }
  },
  Mutation: {
    async addItem(
      root,
      { title, description, isCompleted, severity, dueDate },
      { models }
    ) {
      return models.Item.create({
        title,
        description,
        severity,
        isCompleted,
        dueDate
      });
    },
    async updateItem(
      root,
      { id, title, description, isCompleted, severity, dueDate },
      { models }
    ) {
      const res = await models.Item.update(
        { title, description, isCompleted, severity, dueDate },
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
    }
  },
  Date: dateScalar
};

module.exports = resolvers;
