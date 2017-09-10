conexao = new Mongo();
db = conexao.getDB('kb');
db.kb.insert({
    titulo: 'Introdução ao Banco de Conhecimento',
    descricao: 'O Banco de Conhecimento é um acervo de artigos de informação e conhecimento acumulado...',
    link: '/bc/artigo.html?id=bc1',
    conteudo: ''});
db.kb.insert({
    titulo: 'O comprovante de agendamento é impresso com texto errado',
    descricao: 'Quando você agenda um segurado existe a opção para imprimir o comprovante...',
    link: '/bc/artigo.html?id=bc2',
    conteudo: ''});
db.kb.insert({
    titulo: 'Não é possível fazer seu cadastro no Auxiliar de Trabalho',
    descricao: 'Quando você usa o Auxiliar de Trabalho beta8 pela primeira vez...',
    link: '/bc/artigo.html?id=bc3',
    conteudo: ''});
db.kb.insert({
    titulo: 'Informações sobre o Auxiliar gama1',
    descricao: 'O Auxiliar gama1 é a versão pré-final do Auxiliar. Isso significa...',
    link: '/bc/artigo.html?id=bc4',
    conteudo: ''});
db.kb.insert({
    titulo: 'O Auxiliar de Trabalho exibe uma mensagem de erro no soquete TCP',
    descricao: 'Após se conectar no Auxiliar de Trabalho você recebe várias mensagens de erro no...',
    link: '/bc/artigo.html?id=bc5',
    conteudo: ''});
db.kb.insert({
    titulo: 'Informações sobre o Auxiliar gama2',
    descricao: 'O Auxiliar gama2 é a versão pré-final do Auxiliar. Isso significa que nenhum...',
    link: '/bc/artigo.html?id=bc6',
    conteudo: ''});
db.kb.insert({
    titulo: 'Informações sobre o Auxiliar gama3',
    descricao: 'O Auxiliar gama2 é a versão pré-final do Auxiliar. Isso significa que nenhum...',
    link: '/bc/artigo.html?id=bc7',
    conteudo: ''});
db.kb.insert({
    titulo: 'Ao agendar uma perícia, o SABI informa que já existe um requerimento em aberto',
    descricao: 'Quando alguem tenta marcar uma perícia, seja no SABI, na Internet ou na Central 135...',
    link: '/bc/artigo.html?id=bc8',
    conteudo: ''});
db.kb.insert({
    titulo: 'Motivos de cessação, suspensão e reativação de benefícios',
    descricao: 'Este artigo contém os motivos de cessação, reativação e suspensão de benefícios usados pelo Prisma e pelo SUB',
    link: '/bc/artigo.html?id=bc9',
    conteudo: ''});
db.kb.insert({
    titulo: 'Usando o Auxiliar versão Treinamento',
    descricao: 'Este artigo informa como usar o Auxiliar versão Treinamento e as senhas de acesso de cada usuário-modelo.',
    link: '/bc/artigo.html?id=bc10',
    conteudo: ''});

db.kb.createIndex({
    titulo: 'text',
    descricao: 'text'});

/* 
PARA PESQUISAR:
db.kb.find({$text: {$search: 'sabi'}})

*/