# Dashboard de Clientes

Este desafio faz parte do processo seletivo para desenvolvedores FullStack da **Predialize**. O projeto já possui uma estrutura básica inicial para que você não perca tempo com coisas que não estamos interessados em avaliar.

Vale dizer também que o propósito deste projeto serve apenas para objetivos de avaliação em relação à sua _experiência_, _capacidade em resolver problemas_ e _conhecimentos da stack utilizada._ Os dados contidos aqui são todos fictícios.

Para saber mais sobre nós, acesse: https://predialize.com.br

# Premissas e Restrições

- Este repositório deve ser baixado (download) e não clonado;
- **Não faça fork** do projeto, sob efeito de desclassificação imediata;
- **Não faça merge/pull requests**, sob efeito de desclassificação imediata;
- Você **pode e deve** mexer o quanto quiser na estrutura de pastas e no código já disponibilizado de acordo com o que acredita que seja melhor;
- Você **não deve** utilizar libs ou frameworks que já não estejam no package.json a não ser que decida criar um ou que seja destinado a testes automatizados (não obrigatório). Em todo caso, disponibilize o código junto ao projeto.

# Sobre a Entrega

Coloque seu código em um repositório público seu após finalizar o teste. Não importa onde (github, gitlab etc), desde que esteja público, e envie o link do seu repositório no corpo do email de resposta ao nosso contato.

# Próximas Etapas

Seu código será analisado por nossa equipe e, em caso positivo, entraremos em contato para um pair programming em cima do seu código criado.

# Sobre o Projeto

O projeto está divido em dois módulos: **Api** e **App**. A Api foi construída utilizando **NodeJs** e no App, utilizamos **Angular**. Ambas tecnologias utilizadas na Predialize.

Na raíz da Api, está mantido o arquivo `clients.mock.js`. Este arquivo será a base para realizar consultas e retornar os resultados. Será o nosso banco de dados!

Este projeto não utiliza Docker, mas se você quiser adicionar, fique à vontade. Se o fizer, pedimos que _crie o stack para o Docker Compose_ também.

Também não será necessário desenvolver testes automatizados, mas se você quiser adicionar, fique à vontade.

# Problema

Queremos construir um dashboard de clientes e empreendimentos para termos uma visão estratégica do nosso portfólio. Mas, para alcançarmos nosso objetivo, precisamos resolver alguns BUGs e evoluir um pouco mais nossa Api e App.

## Jogo dos 7 erros

Nosso dashboard **não está funcionando.**

Para começarmos a melhorá-lo, precisamos primeiro fazê-lo funcionar. Existem _7 erros_ em nosso **App** e cabe a você descobrir o que está acontecendo.

PS: **Corrija, anote** os erros e mostre a lista no corpo do email de resposta ao nosso contato.

Mãos à obra!

## Novas Features

Se vocês chegou até aqui, parabéns! Agora, vamos melhorar nosso projeto? Abaixo segue o escopo das novas funcionalidades desejadas. Não precisa fazer mais do que está sendo pedido, mas é claro, trabalhe seu layout e código para ficarem minimamente aceitáveis.

- **Ao entrar na página de Clientes, o usuário deve visualizar todos os resultados exibidos em cards**.
  - Requisitar informações do endpoint `get("/")`;
  - Retornar da Api somente: _\_id, imagem, nome, quantidade de empreendimentos e quantidade de imóveis de cada cliente._
  - Exibir os resultados obtidos;
- **Na página de Clientes, o usuário deve poder pesquisar por nome.**
  - Input para pesquisa.
  - Requisitar o endpoint `get("/name/:name")` ao digitar a pesquisa. Nenhum botão "pesquisar" deve ser criado;
  - Retornar da Api somente: _\_id, imagem, nome, quantidade de empreendimentos e quantidade de imóveis de cada cliente._
  - A pesquisa deve retornar os resultados mesmo que não se tenha um _match_ completo do termo pesquisado.
  - Exibir somente os resultados retornados em cards;
- **Na página de Clientes, o usuário deverá poder visualizar alguns totalizadores:**
  - Requisitar informações do endpoint `get("/totals")`;
  - Retornar somente os totais de: _Clientes, Empreendimentos e Imóveis;_
  - Exibir os resultados dos totais obtidos;
- **Na página de Clientes, o usuário deverá poder ver seus detalhes de forma individual:**

  - A página de detalhamento do App deve possuir uma rota `(/client/:_id)` e um **componente próprio.**
  - Requisitar informações do endpoint `get("/:_id")`;
  - Retornar somente: _\_id, imagem e nome_;
  - Exibir as informações obtidas;

- **Na página de Detalhes do Cliente, o usuário deverá poder visualizar alguns totalizadores:**

  - Requisitar informações do endpoint `get("/:client_id/totals")`;
  - Retornar somente os totais de: _Empreendimentos e Imóveis;_
  - Exibir os resultados dos totais obtidos;

- **Na página de Detalhes do Cliente, o usuário deverá poder ver todos os empreendimentos referentes a ele:**

  - Requisitar informações do endpoint `get("/:client_id/enterprise")`;
  - Retornar somente: _\_id, imagem e nome_;
  - Exibir as informações obtidas.

- **Na página de Detalhes do Cliente, o usuário deve poder pesquisar pelo nome do empreendimento:**

  - Input para pesquisa.
  - Requisitar o endpoint `get("/:client_id/enterprise/name/:name")` ao digitar a pesquisa. _Nenhum botão "pesquisar" deve ser criado;_
  - Retornar da Api os empreendimentos com somente: _\_id, imagem, nome e quantidade de imóveis de cada cliente._
  - A pesquisa deve retornar os resultados mesmo que não se tenha um "match" completo do termo pesquisado.
  - Exibir somente os resultados retornados;

- **Ao entrar na página de Empreendimentos, o usuário deve visualizar todos os resultados exibidos em cards.**

  - Requisitar informações do endpoint `get("/enterprise")`;
  - Retornar da Api somente: _\_id, imagem, nome, nome do cliente (empresa) e quantidade de imóveis de cada empreendimento._
  - Exibir os resultados obtidos em cards;

- **Na página de Empreendimentos, o usuário deve poder pesquisar por nome.**
  - Input para pesquisa.
  - Requisitar o endpoint `get("/enterprise/name/:name")` ao digitar a pesquisa. _Nenhum botão "pesquisar" deve ser criado_;
  - Retornar da Api somente: _\_id, imagem, nome, nome do cliente (empresa) e quantidade de imóveis de cada cliente._
  - A pesquisa deve retornar os resultados mesmo que não se tenha um "match" completo do termo pesquisado;
  - Exibir somente os resultados retornados;
# predialize_test
