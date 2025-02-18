const { Client } = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "Chinnu1408@",
    database: "dmql_project"
})

client.connect();

client.query('select * from public.ipl_match_data;', (err, res) => {
    if (!err) {
        console.log(res.rows);
    } else {
        console.log(err.message);
    }
    client.end;
})