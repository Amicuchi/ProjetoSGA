import mysql from "mysql"

export const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "univesp22",
	database: "sga_mt"
});
