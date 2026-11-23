const SUPABASE_URL = 'https://gsmgxmlemmwqpisfxkpk.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdzbWd4bWxlbW13cXBpc2Z4a3BrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTU0NjQ3MDYsImV4cCI6MjExMTA0MDcwNn0.HACc5hKh0ZGncS5UwQ0ReN23nSfo-lmJi5XkR6Nd9us';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
const formulario = document.getElementById('contato-form');

formulario.addEventListener('submit', async (evento) => {
    evento.preventDefault();

    const dados = {
        nome: document.getElementById('nome').value.trim(),
        email: document.getElementById('email').value.trim(),
        telefone: document.getElementById('telefone').value.trim(),
        mensagem: document.getElementById('mensagem').value.trim()
    };

    if (!dados.nome || !dados.email || !dados.telefone || !dados.mensagem) {
        alert('Preencha todos os campos.');
        return;
    }

    const botao = formulario.querySelector('button[type="submit"]');
    botao.disabled = true;

    const { error } = await supabase
        .from('contatos')
        .insert([dados]);

    if (error) {
        console.error(error);
        alert('Não foi possível enviar a mensagem. Tente novamente.');
    } else {
        formulario.reset();
        alert('Mensagem enviada com sucesso!');
    }

    botao.disabled = false;
});
