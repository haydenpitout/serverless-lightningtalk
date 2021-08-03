'use strict';

module.exports.handler = async (event) => {
  // The data below would ideally come from a call to the database
  return {
    statusCode: 200,
    body: JSON.stringify([
      {
        title: 'Blog title 1',
        description: 'Blog description 1',
      },
      {
        title: 'Blog title 2',
        description: 'Blog description 2',
      },
    ]),
  };
};
