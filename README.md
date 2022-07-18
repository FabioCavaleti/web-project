# Projeto disciplina de web - Book store


Fabio Henrique Alves Cavaleti 11200550 

Gabriel Ribeiro Fonseca de Freitas - 12542651

João Victor Dionizio de Oliveira Santos - 12543912


## Requisitos
---
- Nosso sistema terá 2 tipos de usuários: Adminstradores e clientes 
- Os admnistradores poderão fazer CRUD dos livros e gerenciar clientes e outros administradores
- Os administradores possuem os seguintes atributos:
  - nome
  - id
  - telefone
  - email
- Os clientes possuem os seguintes atributos:
  - nome
  - id
  - endereço
  - telefone
  - email
- Os livros (nosso produto) possuem os seguintes atributos:
  - nome
  - id
  - autores
  - edição
  - editora
  - photo
  - descrição
  - preço
  - quantidade em estoque
  - quantidade vendida
- Nossa loja tem como produto livros
- Os clientes devem selecionar quais livros eles querem comprar e em que quantidade, ao selecionar isso, os livros selecionados serão incluídos no carrinho.
- A venda será realizada através do cartão de crédito
- O carrinho é esvaziado após a compra mas também pode ser esvaziado pelo próprio cliente.
- Os produtos vendidos serão subtraídos dos produtos em estoque, para que se mantenha um estoque atualizado
- O sistema de atender requisitos de acessibilidade
- O sistema deve apresentar boa usabilidade
- O sistema deve ser responsivo
- Funcionalidade extra: será possível visualizar algumas páginas do livro antes de comprá - lo ou terá uma lista de desejo para os livros.

## Descrição do projeto
---
Nosso projeto é um site de venda de livros. Nos inspiramos no site da Amazon para criarmos a base de nosso site.

### Funcionalidades:
- Busca de livro
  - Temos um campo para busca de livros, será possível buscar por autor, editora, ou título do livro.
  - O campo de busca estará incluso na maioria das páginas
- Criação de conta utilizando um email 
- Login na conta com email
- Visualização e alteração da sua própria conta (cliente)
- Visualizar livros
  - Será exibido a informações do livro (Valor, descrição, etc)
- Carrinho de compras, por onde as compras serão realizadas
- Quando a compra for ser realizada, o usuário deve informar os dados do cartão
### Páginas:
- Página principal
  - Apresenta livros mais vendidos como recomendação
- Carrinho de compras
  - Mostra os livros selecionados e o valor total
  - É possível remover
- Cadastro de cliente
- Login do cliente
- Dados do cliente (perfil)
- Pedidos realizados
### Mockup e diagrama de navegação
Os mockups, bem como o diagrama de navegação pode ser encontrado no nosso [figma](https://www.figma.com/file/RQKM6Qg41ATPenkY6mN88S/Web-Project?node-id=19%3A90)


## Comentários sobre o código
---
O código está dentro do diretório FinalProject
## Plano de teste
---
Nosso plano de teste é apenas navegar pelo site. É possivel se cadastrar, criando uma nova conta sem direitos de administradores. Para testar as páginas de admnistrador é necessário fazer login em uma conta de admnistrador. Utilize a conta padrão (login: admin, senha: admin). Observe que nosso site apresenta um problema nesse  quesito, por conta disso é necessário atualizar a página para que se possa ver a página de administrador
## Resultados dos testes
---
## Build
---
Clone o repositório. Com o terminal, entre no diretório '/web-project/FinalProject/server-side'. Após isso, rode os comandos para rodar código react com npm:
- npm install (esse comando automaticamente da npm install na parte do cliente também)
- npm run start_dev (inicia servidor e abre o site)
## Problemas
--- 
- As seguintes funcionalidades estão ausentes: Editar clientes e informações de perfil
## Comentários
---

