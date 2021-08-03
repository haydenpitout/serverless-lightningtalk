'use strict';

module.exports.handler = async (event) => {
  // The data below would ideally be validated and saved to the database
  const { title, description } = JSON.parse(event.body);
  return {
    statusCode: 201,
    body: JSON.stringify(`Blog: ${title}, Description: ${description}`),
  };
};
