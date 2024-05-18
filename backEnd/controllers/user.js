import { db } from "../db.js";

export const getUsers = (_, res) => {
	// const q = "SELECT * FROM usuarios";
	
	const q = `
	SELECT u.CPF, u.UsuarioTipo, u.UsuarioNome, u.UsuarioEmail, u.UsuarioTelefone,
		e.enderecoId, e.enderecoCEP, e.enderecoLogradouro, e.enderecoNomeLogradouro,
		e.enderecoNumero, e.enderecoComplemento, e.enderecoBairro, e.enderecoCidade, e.enderecoEstado
	FROM usuarios u
	LEFT JOIN endereco e ON u.CPF = e.usuarioId;
`;

	db.query(q, (err, data) => {
		if (err) return res.json(err);

		return res.status(200).json(data);
	});
};

export const addUser = (req, res) => {
	const q = 
		"INSERT INTO usuarios(`CPF`, `UsuarioTipo`, `UsuarioNome`, `UsuarioEmail`, `UsuarioTelefone`) VALUES(?)"

		"INSERT INTO endereco(`enderecoId`, `enderecoCEP`, `enderecoLogradouro`, `enderecoNomeLogradouro`, `enderecoNumero`, `enderecoComplemento`, `enderecoBairro`, `enderecoCidade`, `enderecoEstado`,) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, LAST_INSERT_ID());";

		const values = [
			req.body.CPF,
			req.body.UsuarioTipo,
			req.body.UsuarioNome,
			req.body.UsuarioEmail,
			req.body.UsuarioTelefone,
			req.body.enderecoId,
			req.body.enderecoCEP,
			req.body.enderecoLogradouro,
			req.body.enderecoNomeLogradouro,
			req.body.enderecoNumero,
			req.body.enderecoComplemento,
			req.body.enderecoBairro,
			req.body.enderecoCidade,
			req.body.enderecoEstado,
		];

		db.query(q, [values, values], (err) => {
			if (err) return res.json(err);
			return res.status(200).json("Usuário criado com sucesso.")
		});
};

export const updateUser = (req, res) => {
	const q = 
	"UPDATE usuarios SET `CPF`, `UsuarioTipo`, `UsuarioNome`, `UsuarioEmail`, `UsuarioTelefone` WHERE `CPF` = ?"
	"UPDATE endereco SET `enderecoId`, `enderecoCEP`, `enderecoLogradouro`, `enderecoNomeLogradouro`, `enderecoNumero`, `enderecoComplemento`, `enderecoBairro`, `enderecoCidade`, `enderecoEstado` WHERE CPF = ?";

	const values = [
		req.body.CPF,
		req.body.UsuarioTipo,
		req.body.UsuarioNome,
		req.body.UsuarioEmail,
		req.body.UsuarioTelefone,
		req.body.enderecoId,
		req.body.enderecoCEP,
		req.body.enderecoLogradouro,
		req.body.enderecoNomeLogradouro,
		req.body.enderecoNumero,
		req.body.enderecoComplemento,
		req.body.enderecoBairro,
		req.body.enderecoCidade,
		req.body.enderecoEstado,
		req.params.CPF,
	];

	db.query(q, [...values, req.params.CPF], (err) => {
		if (err) return res.json(err);

		return res.status(200).json("Usuário atualizado com sucesso.");
	});
};

export const deleteuser = (req, res) => {
	const q = "DELETE FROM usuarios EHERE `CPF` = ?";

	db.query(q, [req.params.CPF], (err) => {
		if (err) return res.json(err);

		return res.status(200).json("Usuário deletado com sucesso.")
	});
};