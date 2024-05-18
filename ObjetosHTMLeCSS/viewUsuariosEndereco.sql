CREATE VIEW vw_usuarios_endereco AS
SELECT u.CPF, u.UsuarioTipo, u.UsuarioNome, u.UsuarioEmail, u.UsuarioTelefone,
       e.enderecoId, e.enderecoCEP, e.enderecoLogradouro, e.enderecoNomeLogradouro,
       e.enderecoNumero, e.enderecoComplemento, e.enderecoBairro, e.enderecoCidade, e.enderecoEstado
FROM usuarios u
LEFT JOIN endereco e ON u.CPF = e.usuarioId;