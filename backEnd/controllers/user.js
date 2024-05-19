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
		if (err) {
			return res.status(500).json({ error: 'Erro ao buscar usuários.', details: err });
		}
		return res.status(200).json(data);
	});
};

export const addUser = (req, res) => {
    const qUsers = "INSERT INTO usuarios (`CPF`, `UsuarioTipo`, `UsuarioNome`, `UsuarioEmail`, `UsuarioTelefone`) VALUES (?, ?, ?, ?, ?)";
    const qEndereco = "INSERT INTO endereco (`enderecoId`, `enderecoCEP`, `enderecoLogradouro`, `enderecoNomeLogradouro`, `enderecoNumero`, `enderecoComplemento`, `enderecoBairro`, `enderecoCidade`, `enderecoEstado`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

    const { CPF, UsuarioTipo, UsuarioNome, UsuarioEmail, UsuarioTelefone, enderecoId, enderecoCEP, enderecoLogradouro, enderecoNomeLogradouro, enderecoNumero, enderecoComplemento, enderecoBairro, enderecoCidade, enderecoEstado } = req.body;

    const userValues = [CPF, UsuarioTipo, UsuarioNome, UsuarioEmail, UsuarioTelefone];
    const enderecoValues = [enderecoId, enderecoCEP, enderecoLogradouro, enderecoNomeLogradouro, enderecoNumero, enderecoComplemento, enderecoBairro, enderecoCidade, enderecoEstado];

    db.query(qUsers, userValues, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao adicionar usuário.', details: err });
        }
        db.query(qEndereco, enderecoValues, (err) => {
            if (err) {
                return res.status(500).json({ error: 'Erro ao adicionar endereço.', details: err });
            }
            return res.status(200).json({ message: 'Usuário adicionado com sucesso.' });
        });
    });
};


export const updateUser = (req, res) => {
    const qUsers = "UPDATE usuarios SET `CPF` = ?, `UsuarioTipo` = ?, `UsuarioNome` = ?, `UsuarioEmail` = ?, `UsuarioTelefone` = ? WHERE `CPF` = ?";
    const qEndereco = "UPDATE endereco SET `enderecoId` = ?, `enderecoCEP` = ?, `enderecoLogradouro` = ?, `enderecoNomeLogradouro` = ?, `enderecoNumero` = ?, `enderecoComplemento` = ?, `enderecoBairro` = ?, `enderecoCidade` = ?, `enderecoEstado` = ? WHERE `CPF` = ?";

    const { CPF, UsuarioTipo, UsuarioNome, UsuarioEmail, UsuarioTelefone, enderecoId, enderecoCEP, enderecoLogradouro, enderecoNomeLogradouro, enderecoNumero, enderecoComplemento, enderecoBairro, enderecoCidade, enderecoEstado } = req.body;

    const userValues = [CPF, UsuarioTipo, UsuarioNome, UsuarioEmail, UsuarioTelefone];
    const enderecoValues = [enderecoId, enderecoCEP, enderecoLogradouro, enderecoNomeLogradouro, enderecoNumero, enderecoComplemento, enderecoBairro, enderecoCidade, enderecoEstado, CPF];

    db.query(qUsers, userValues, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao atualizar usuário.', details: err });
        }
        db.query(qEndereco, enderecoValues, (err) => {
            if (err) {
                return res.status(500).json({ error: 'Erro ao atualizar endereço.', details: err });
            }
            return res.status(200).json({ message: 'Usuário atualizado com sucesso.' });
        });
    });
};

export const deleteUser = (req, res) => {
    const qUsers = "DELETE FROM usuarios WHERE `CPF` = ?";
    const qEndereco = "DELETE FROM endereco WHERE `usuarioId` = ?";

    const CPF = req.params.CPF;

    db.query(qUsers, [CPF], (err) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao excluir usuário.', details: err });
        }
        db.query(qEndereco, [CPF], (err) => {
            if (err) {
                return res.status(500).json({ error: 'Erro ao excluir endereço.', details: err });
            }
            return res.status(200).json({ message: 'Usuário excluído com sucesso.' });
        });
    });
};