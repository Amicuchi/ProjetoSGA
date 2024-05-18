USE sga_mt;
CREATE TABLE `tipo_usuario` (
  `tipoUsuario` varchar(30) NOT NULL,
  `permissaoCriar` tinyint(1) DEFAULT NULL,
  `permissaoLer` tinyint(1) DEFAULT NULL,
  `permissaoAlterar` tinyint(1) DEFAULT NULL,
  `permissaoDeletar` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`tipoUsuario`);
)

CREATE TABLE usuarios (
    CPF BIGINT PRIMARY KEY,
    UsuarioTipo VARCHAR(30),
    UsuarioNome VARCHAR(150),
    UsuarioEmail VARCHAR(100),
    UsuarioTelefone VARCHAR(14),
    FOREIGN KEY (UsuarioTipo) REFERENCES tipo_Usuario(tipoUsuario)
);

CREATE TABLE endereco (
  enderecoId INT NOT NULL,
  usuarioId BIGINT NOT NULL,
  enderecoCEP INT NULL,
  enderecoLogradouro VARCHAR(20) NULL,
  enderecoNomeLogradouro VARCHAR(150) NULL,
  enderecoNumero INT NULL,
  enderecoComplemento VARCHAR(45) NULL,
  enderecoBairro VARCHAR(45) NULL,
  enderecoCidade VARCHAR(70) NULL,
  enderecoEstado VARCHAR(2) NULL,
  
  PRIMARY KEY (enderecoId),
  FOREIGN KEY (usuarioId) REFERENCES usuarios(CPF) ON DELETE CASCADE
);

CREATE TABLE `sga_mt`.`eventos` (
  `eventoID` INT,
  `usuarioId` BIGINT,
  `eventoTipo` VARCHAR(45),
  `eventoNome` VARCHAR(45),
  `eventoData` DATE,
  `eventoDescricao` LONGTEXT,
  `eventoMaisInfo` LONGTEXT,
  PRIMARY KEY (`eventoID`),
  FOREIGN KEY (usuarioId) REFERENCES usuarios(CPF)
  );
  
  CREATE TABLE IF NOT EXISTS `sga_mt`.`contas` (
  `contaID` INT,
  `usuarioId` BIGINT,
  `contaTipo` VARCHAR(45),
  `contaValor` DECIMAL(2,0),
  `contaVencimento` DATE,
  `contaFoiPago` VARCHAR(3),
  `contaMaisInfo` VARCHAR(100),
  
  PRIMARY KEY (`contaID`),
  FOREIGN KEY (usuarioId) REFERENCES usuarios(CPF)
  );
  
  
  
INSERT INTO tipo_usuario (tipoUsuario, permissaoCriar, permissaoLer, permissaoAlterar, permissaoDeletar)
VALUES ('Admin', TRUE, TRUE, TRUE, TRUE);

INSERT INTO tipo_usuario (tipoUsuario, permissaoCriar, permissaoLer, permissaoAlterar, permissaoDeletar)
VALUES ('Funcionario', TRUE, TRUE, TRUE, FALSE);

INSERT INTO tipo_usuario (tipoUsuario, permissaoCriar, permissaoLer, permissaoAlterar, permissaoDeletar)
VALUES ('Aluno', FALSE, TRUE, TRUE, FALSE);


-- Inserindo os usuários Admin
INSERT INTO usuarios (CPF, UsuarioTipo, UsuarioNome, UsuarioEmail, UsuarioTelefone)
VALUES 
(11111111111, 'Admin', 'Admin1', 'admin1@example.com', '111111111'),
(22222222222, 'Admin', 'Admin2', 'admin2@example.com', '222222222');

-- Inserindo os usuários Funcionários
INSERT INTO usuarios (CPF, UsuarioTipo, UsuarioNome, UsuarioEmail, UsuarioTelefone)
VALUES 
(33333333333, 'Funcionario', 'Funcionario1', 'funcionario1@example.com', '333333333'),
(44444444444, 'Funcionario', 'Funcionario2', 'funcionario2@example.com', '444444444'),
(55555555555, 'Funcionario', 'Funcionario3', 'funcionario3@example.com', '555555555');

-- Inserindo os usuários Alunos
INSERT INTO usuarios (CPF, UsuarioTipo, UsuarioNome, UsuarioEmail, UsuarioTelefone)
VALUES 
(66666666666, 'Aluno', 'Aluno1', 'aluno1@example.com', '666666666'),
(77777777777, 'Aluno', 'Aluno2', 'aluno2@example.com', '777777777'),
(88888888888, 'Aluno', 'Aluno3', 'aluno3@example.com', '888888888'),
(99999999999, 'Aluno', 'Aluno4', 'aluno4@example.com', '999999999'),
(10101010101, 'Aluno', 'Aluno5', 'aluno5@example.com', '101010101');



 -- Inserindo endereços para cada usuário
INSERT INTO endereco (enderecoId, usuarioId, enderecoCEP, enderecoLogradouro, enderecoNomeLogradouro, enderecoNumero, enderecoComplemento, enderecoBairro, enderecoCidade, enderecoEstado) VALUES 
(1, 11111111111, 12345678, 'Rua A', 'Centro', 100, 'Apto 101', 'Bairro A', 'Cidade A', 'AA'),
(2, 22222222222, 87654321, 'Rua B', 'Centro', 200, 'Apto 102', 'Bairro B', 'Cidade B', 'BB'),
(3, 33333333333, 13579246, 'Rua C', 'Centro', 300, 'Sala 201', 'Bairro C', 'Cidade C', 'CC'),
(4, 44444444444, 24681357, 'Rua D', 'Centro', 400, 'Sala 202', 'Bairro D', 'Cidade D', 'DD'),
(5, 55555555555, 98765432, 'Rua E', 'Centro', 500, 'Sala 203', 'Bairro E', 'Cidade E', 'EE'),
(6, 66666666666, 36925814, 'Rua F', 'Centro', 600, 'Apto 301', 'Bairro F', 'Cidade F', 'FF'),
(7, 77777777777, 25814736, 'Rua G', 'Centro', 700, 'Apto 302', 'Bairro G', 'Cidade G', 'GG'),
(8, 88888888888, 14736925, 'Rua H', 'Centro', 800, 'Apto 303', 'Bairro H', 'Cidade H', 'HH'),
(9, 99999999999, 36925814, 'Rua I', 'Centro', 900, 'Apto 304', 'Bairro I', 'Cidade I', 'II'),
(10, 10101010101, 25814736, 'Rua J', 'Centro', 1000, 'Apto 305', 'Bairro J', 'Cidade J', 'JJ');


