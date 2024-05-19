import mysql from "mysql"

export const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "univesp22",
	database: "sga_mt"
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    } else {
        console.log('Conectado ao banco de dados');
    }
});
