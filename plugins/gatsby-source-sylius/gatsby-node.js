const validateOptions = require("./validateOptions");
const createResolvers = require("./createResolvers");
const createPages = require("./createPages");
const sourceNodes = require("./sourceNodes");
const provideProductsField = require("./provideProductsField");

exports.onPreBootstrap = validateOptions;
exports.createResolvers = createResolvers;
exports.sourceNodes = sourceNodes;
exports.createPages = createPages;
exports.onCreateNode = ({ node, getNode, createNodeId, actions }) => {
  const { createNodeField } = actions;
  provideProductsField({ node, getNode, createNodeId, createNodeField });
};
