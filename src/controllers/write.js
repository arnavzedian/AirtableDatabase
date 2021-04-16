const AIRTABLEAPI = process.env.AIRTABLE_API_KEY;
const AIRTABLEBASEID = process.env.AIRTABLEBASEID;
const AIRTABLETABLENAME = process.env.AIRTABLETABLENAME;

const fetch = require("node-fetch");

function write(req, res, next) {
  var datain = req.body;

  var payload = {
    records: [
      {
        fields: datain,
      },
    ],
  };

  //we need to send a "POST" request with our base id, table name, our API key, and send a body with the new data we wish to add.

  fetch(`https://api.airtable.com/v0/${AIRTABLEBASEID}/${AIRTABLETABLENAME}`, {
    method: "post", // make sure it is a "POST request"
    body: JSON.stringify(payload),
    headers: {
      Authorization: `Bearer ${AIRTABLEAPI}`, // API key
      "Content-Type": "application/json", // we will recive a json object
    },
  })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = write;
