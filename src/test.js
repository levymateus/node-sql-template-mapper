const mapper = require('./index');
const mariadb = require('mariadb');
var express = require('express');
var app = express();
const type = require('./types');

const config = {
    host: 'localhost', 
    user: 'root', 
    password: '',
    database: 'people',
    connectionLimit: 5
};

async function fetchPeoples() {
   const pool = mariadb.createPool(config);
   const connection = await pool.getConnection();

    let rows = await connection.query("SELECT p.firstName, p.lastName, a.zip as address_zip, c.country as address_country FROM people as p, address as a, country as c WHERE p.addressId = a.id AND c.id = a.countryId");
    let mappedRows = mapper.mapToTemplate(rows, '_', type.People);
    return mappedRows;
}

app.get('/', function(req, res) {
    fetchPeoples().then((peoples) => {
        res.send(peoples);
    });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

// fetchPeoples();