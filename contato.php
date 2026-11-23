<?php
header('Content-Type: text/html; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit('Método não permitido.');
}

$nome = trim($_POST['nome'] ?? '');
$email = trim($_POST['email'] ?? '');
$telefone = trim($_POST['telefone'] ?? '');
$mensagem = trim($_POST['mensagem'] ?? '');

if ($nome === '' || $email === '' || $telefone === '' || $mensagem === '') {
    exit('Preencha todos os campos obrigatórios.');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    exit('Informe um e-mail válido.');
}

if (strlen($nome) > 100 || strlen($email) > 150 || strlen($telefone) > 20 || strlen($mensagem) > 1000) {
    exit('Um ou mais campos ultrapassaram o limite permitido.');
}

$servidor = 'localhost';
$usuario = 'root';
$senha = '';
$banco = 'portal_mbl';

$mysqli = new mysqli($servidor, $usuario, $senha);

if ($mysqli->connect_error) {
    exit('Não foi possível conectar ao servidor MySQL.');
}

$mysqli->set_charset('utf8mb4');

if (!$mysqli->query("CREATE DATABASE IF NOT EXISTS `$banco` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci")) {
    exit('Não foi possível preparar o banco de dados.');
}

if (!$mysqli->select_db($banco)) {
    exit('Não foi possível selecionar o banco de dados.');
}

$sqlTabela = "CREATE TABLE IF NOT EXISTS contatos (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    mensagem VARCHAR(1000) NOT NULL,
    data_envio DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci";

if (!$mysqli->query($sqlTabela)) {
    exit('Não foi possível preparar a tabela de contatos.');
}

$stmt = $mysqli->prepare('INSERT INTO contatos (nome, email, telefone, mensagem) VALUES (?, ?, ?, ?)');

if (!$stmt) {
    exit('Não foi possível preparar o envio.');
}

$stmt->bind_param('ssss', $nome, $email, $telefone, $mensagem);

if (!$stmt->execute()) {
    $stmt->close();
    $mysqli->close();
    exit('Não foi possível salvar sua mensagem.');
}

$stmt->close();
$mysqli->close();
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mensagem enviada</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="contato.css">
</head>
<body class="pagina-contato">
    <main class="contato-container">
        <section class="contato-card">
            <h1>Mensagem enviada!</h1>
            <p>Sua mensagem foi registrada com sucesso.</p>
            <a href="index.html" class="contato-voltar">← Voltar ao início</a>
        </section>
    </main>
</body>
</html>
