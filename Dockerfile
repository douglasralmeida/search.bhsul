FROM mongo
MAINTAINER douglasralmeida <douglasralmeida@live.com>

RUN db.createCollecatoin('kb')
RUN db.kb.insert({titulo: 'Introdução ao Banco de Conhecimento', descricao: 'O Banco de Conhecimento é um acervo de artigos de informação e conhecimento acumulado...', link: 'bc/artigo.html?id=bc1', conteudo: ''})
RUN db.kb.insert({titulo: 'O comprovante de agendamento é impresso com texto errado', descricao: 'Quando você agenda um segurado existe a opção para imprimir o comprovante...', link: 'bc/artigo.html?id=bc2', conteudo: ''})
RUN db.kb.insert({titulo: 'Não é possível fazer seu cadastro no Auxiliar de Trabalho', descricao: 'Quando você usa o Auxiliar de Trabalho beta8 pela primeira vez...', link: 'bc/artigo.html?id=bc3', conteudo: ''})