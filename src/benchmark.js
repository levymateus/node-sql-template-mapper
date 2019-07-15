const mapper = require('./index.js');

const row = {
    "id": 1,
    "patient_firstName": "levy mateus",
    "patient_lastName": "macedo",
    "patient_cpf": 54321,
    "patient_birthdate": "1990-01-01",
    "patient_gender": "MALE",
    "patient_rg": 1234,
    "patient_address_city": "Palmeira",
    "patient_address_zip": 999,
    "patient_address_country": "Brasil",
    "patient_address_district": "Centro"
};

const template = {
    id: 0,
    patient: { 
        firstName: '', 
        lastName: '', 
        cpf: 0,
        rg: 0,
        gender: '',
        birthdate: '',
        address: { 
            city: '', 
            zip: 0,
            country: '',
            district: ''
        } 
    }
}

function select (limit) {
    let rows = [];
    for(let i = 0; i < limit; i++) {
        let newRow = Object.assign({}, row);
        newRow.id = i;
        rows.push(newRow);
    }
    return rows;
}

function main() {
    let rows = select(3);

    let start = process.hrtime.bigint();
    let map = mapper.mapToTemplate(rows, '_', template);
    let end = process.hrtime.bigint();
    console.log(`Benchmark took ${(end - start)/BigInt(1000000)} milliseconds`);
    console.log(`Benchmark took ${(end - start)/BigInt(1000000000)} seconds`);
    console.log(map);

    // asyncMap(rows, '_', template);

}

main();