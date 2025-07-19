Cenários de Teste - Sauce Demo

Testes de Login

LOGIN_001 - Login com sucesso:
  1. Acessar o site https://www.saucedemo.com/
  2. Digitar "standard_user" no campo username
  3. Digitar "secret_sauce" no campo password
  4. Clicar no botão Login
- Resultado Esperado: Usuário deve ser redirecionado para a página de produtos

LOGIN_002 - ogin com usuário inválido:
  1. Acessar o site https://www.saucedemo.com/
  2. Digitar "usuario_inexistente" no campo username
  3. Digitar "secret_sauce" no campo password
  4. Clicar no botão Login
- Resultado Esperado: Deve aparecer mensagem de erro "Username and password do not match"

LOGIN_003 - Login com senha inválida:
  1. Acessar o site https://www.saucedemo.com/
  2. Digitar "standard_user" no campo username
  3. Digitar "senha_errada" no campo password
  4. Clicar no botão Login
- Resultado Esperado: Deve aparecer mensagem de erro "Username and password do not match"

Testes de Funcionalidade

COMPRA_001 - Adicionar item ao carrinho:
  1. Fazer login com "standard_user" e "secret_sauce"
  2. Na página de produtos, clicar em "Add to cart" de qualquer produto
  3. Verificar se o contador do carrinho aumentou
- Resultado Esperado: Produto deve ser adicionado ao carrinho e contador deve mostrar "1"
