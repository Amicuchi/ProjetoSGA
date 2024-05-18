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