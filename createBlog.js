'use strict';

module.exports.handler = async (event) => {
  //const { title } = JSON.parse(event.body);
  return {
    statusCode: 200,
    body: JSON.stringify({ event }),
    //body: JSON.stringify(`Blog title: ${title}`),
  };
};
