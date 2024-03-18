<b>PROGRAMA STARTER FULL STACK WEB - GROWDEV</b>

<b>Módulo: PROGRAMAÇÃO ORIENTADA A OBJETO</b>

<b>Atividade final do módulo de Programação Orientada a Objeto</b>

<b>PROJETO GROWTWITTER</b>

<hr>

Este projeto consiste em uma aplicação desenvolvida em Node.js com o uso de TypeScript e Programação Orientada a Objetos, que simula comandos básicos do Twitter.

<hr>

Requisitos / Features: 

1. Criar um projeto Node.js com o Typescript configurado;
2. Criar classes para representar as entidades necessárias;
  a. Cada classe deve estar em um arquivo separado.
3. Usar todos os pilares da POO pelo menos uma vez;
4. Estabelecer relacionamentos do tipo composição entre as classes;
5. Armazenar os dados em um banco de dados em memória (listas).
6. Para testes, criar pelo menos 3 usuários, 3 tweets, 3 likes e 3 replies.

<b>Feature #1</b> Cadastro de Usuários:
É possível cadastrar usuários com um id único gerado automaticamente;
Os campos obrigatórios para o cadastro são: name, username, email e password

<b>Feature #2</b> Cadastro de Tweets
É possível criar tweets com um id único gerado automaticamente;
Os campos obrigatórios para criação são: content e type (normal ou reply).

<b>Feature #3</b> Exibição de Tweets
Os tweets são mostrados no console no seguinte formato, podendo ter likes e replys;
Nas Features #7 e #8 há informações mais detalhadas sobre likes e replies.

<b>Feature #4</b> Followers
Após criar um usuário, é possível seguir outros usuários, exceto a si próprio;
Além disso, os usuários possuem acesso à lista de quem eles seguem.

<b>Feature #5</b> Like em Tweets
Os usuários podem curtir os tweets de outros usuários.

<b>Feature #6</b> Reply em Tweets
Os usuários podem responder aos tweets de outros usuários, onde se tem um novo tweet do tipo "reply".

<b>Feature #7</b> Exibição de Tweets com Like
Os tweets são exibidos com as informações dos likes recebidos, de acordo com a quantidade de likes.

<b>Feature #8</b> Exibição de Tweets com Reply
Os tweets são exibidos com as informações dos replies recebidos, onde cada reply é sinalizado com o caractere ">".

<b>Feature #9</b> Feed de Tweets
Nessa feature é possível que os usuários vizualizem seu feed de tweets, o qual inclui seus próprios tweets e os tweets dos usuários que segue;
Cada tweet é exibido conforme as Features anteriores.

<b>Abaixo imagens do resultado do projeto:</b>

LISTA DE USUÁRIOS CADASTRADOS:

<img src="https://github.com/Ligueja/atividade_final_poo_growtwitter/blob/main/assets/images/mostrando%20usuarios%20cadastrados.jpg" width="350"/>

VALIDAÇÃO PARA NÃO AUTORIZAR DOIS USERNAMES IGUAIS:

<img src="https://github.com/Ligueja/atividade_final_poo_growtwitter/blob/main/assets/images/validacao_username.jpg" width="350"/>

VALIDAÇÃO PARA QUE UM USUÁRIO NÃO POSSA SEGUIR A SI MESMO:

<img src="https://github.com/Ligueja/atividade_final_poo_growtwitter/blob/main/assets/images/validacao_seguir%20a%20si%20mesmo.jpg" width="350"/>

VISUALIZAÇÃO DE TWEETS DE UM USUÁRIO:

<img src="https://github.com/Ligueja/atividade_final_poo_growtwitter/blob/main/assets/images/tweets%20de%20um%20usu%C3%A1rio.jpg" width="350"/>

VISUALIZAÇÃO DO FEED DE UM USUÁRIO (É POSSÍVEL VER SEUS TWEETS E TWEETS DE USUÁRIOS QUE ESTE SEGUE):

<img src="https://github.com/Ligueja/atividade_final_poo_growtwitter/blob/main/assets/images/feed%20de%20um%20usuario.jpg" width="350"/>

<hr>

<b>Instalação</b>

1 - Clone este repositório;

2 - Execute npm install para instalar as dependências.

<hr>

<b>Execução</b>
Execute npm run dev para iniciar o servidor.



