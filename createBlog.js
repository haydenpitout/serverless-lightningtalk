'use strict';

module.exports.handler = async (event) => {
  //const { title } = JSON.parse(event.body);
  return {
    statusCode: 201,
    body: JSON.stringify({ event }),
    //body: JSON.stringify(`Blog title: ${title}`),
  };
};
