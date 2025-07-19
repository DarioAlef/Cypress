- Projeto de Testes Automatizados
Este projeto contém testes automatizados para o site Sauce Demo usando Cypress.

- Descrição
O projeto testa funcionalidades básicas do site https://www.saucedemo.com/, incluindo:
- Login com diferentes cenários
- Adicionar produtos ao carrinho

-Pré-requisitos
- Node.js instalado
- NPM instalado

-Instalação
1. Clone o repositório
2. Instale as dependências:
bash
npm install



 Estrutura do Projeto
- `cypress/e2e/` - Contém os arquivos de teste
- `cypress/fixtures/` - Dados de teste
- `cypress/support/` - Comandos customizados
- `Cenarios_de_Teste.md` - Documentação dos cenários

-Testes Incluídos

#Testes de Login:
- LOGIN_001: Login com sucesso
- LOGIN_002: Login com usuário inválido  
- LOGIN_003: Login com senha inválida

#Testes de Carrinho:
- COMPRA_001: Adicionar produto ao carrinho
- COMPRA_002: Ver carrinho vazio inicialmente

#Usuários de Teste

- **Usuário**: standard_user
- **Senha**: secret_sauce

#Observações

Os testes foram criados de forma simples e direta, adequados para iniciantes em automação de testes.