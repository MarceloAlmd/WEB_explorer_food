<h1> Web Explorer Food: https://web-explorer-food.netlify.app/ </h1>
<hr/>
<h2>Guia de Uso</h2>

<hr>

<h3>Descrição</h3>
<p>Este repositório contém uma aplicação web construída com React, Vite e TypeScript, destinada a resolução do desafio final do curso explorer da rocketSeat. Cujo o intuito é Desenvolver uma aplicação completa para um cardápio digital utilizando HTML, CSS, JavaScript, Node.js e React.js. O projeto envolve a criação de uma interface amigável para a visualização e interação com os pratos de um restaurante fictício, oferecendo uma experiência imersiva desde a seleção até o pagamento do pedido. E esse repositório é o nosso front-end para consumir todos os endpoints da API.</p>

<h3>Pré-requisitos</h3>
<ul>
    <li>Node.js instalado (v18.x ou superior)</li>
    <li>npm (Node Package Manager) ou yarn</li>
</ul>

<h3>Instalação</h3>
<ol>
    <li>Clone este repositório em sua máquina local:
        <li>git clone: <code>git@github.com:MarceloAlmd/WEB_explorer_food.git</code></li>
    <li>Acesse o diretório do projeto:
        <code>cd web_explore_food</code></li>
    <li>Instale as dependências do projeto:
        <code>npm install</code></li>
</ol>

 <h3>Faça Login:</h3>

```plaintext
Customer (Cliente): {
   Email: customer@email.com
   Password: 123456
}
Admin (Administrador): {
   Email: admin@email.com
   Password: 123456
}
```
<h3>Teste Online (DEPLOY):</h3>
https://web-explorer-food.netlify.app/

<h3>Crie sua conta</h3>
Todas as contas criadas tem o padrao customer (Cliente)

![image](https://github.com/MarceloAlmd/WEB_explorer_food/assets/85407905/049b8984-62dd-4171-aa0b-a835edcdc771)


<h3>Uso</h3>
<ol>
    <li>Inicie o servidor:
        <code>npm run dev</code></li>
        </li>
    <li>
       Deploy: https://web-explorer-food.netlify.app/
    </li>
</ol>

<h3>Paginas disponíveis:</h3>
<h3>Public</h3>
<ul>
  <li>
   <strong>Tela de Login (Customer/Admin) </strong>: Tela Inicial para entrar na aplicação.
     
   ![image](https://github.com/MarceloAlmd/WEB_explorer_food/assets/85407905/6ab04637-28fa-4a10-9abd-3fc32f68a647)
  </li>
  <li>
   <strong>Tela de Register(Customer)</strong>: Tela para criar conta do cliente.
     
   ![image](https://github.com/MarceloAlmd/WEB_explorer_food/assets/85407905/4888b626-98de-45ba-9c64-c4eef7449d87)
  </li>
   
</ul>

<hr/>

<h3>Autenticada</h3>
<ul>
  <li>
   <strong>Tela Inicial (Home) (Cliente/Admin)</strong>: Pagina Principal do Projeto.

  ![image](https://github.com/MarceloAlmd/WEB_explorer_food/assets/85407905/b0a91763-eca4-4870-99a5-9e9c924f4120)
  </li>
  <li>
   <strong>/favorite (Customer)</strong>: Tela com os pratos favoritos do cliente.

   ![image](https://github.com/MarceloAlmd/WEB_explorer_food/assets/85407905/63c8b22a-0dc7-4dac-ba46-fa87189dec1f)
  </li>
  <li>
   <strong>/details/:id (customer/Admin)</strong>: Tela para mostrar os detalhes de um prato.
     
   ![image](https://github.com/MarceloAlmd/WEB_explorer_food/assets/85407905/0dfd357f-20f7-47eb-b1d9-b82f68920ccb)

  </li>
  <li>
   <strong>/request (Customer/Admin</strong>: Lista todos os pratos pedidos pelo cliente e todos os pratos do restuarante para mudar o status

   ![image](https://github.com/MarceloAlmd/WEB_explorer_food/assets/85407905/cfa1144d-1aa2-4e91-8e79-714b33ae03df)

  </li>
  <li>
   <strong>/cart (customer)</strong>: Tela para comprar os pratos.
     
  ![image](https://github.com/MarceloAlmd/WEB_explorer_food/assets/85407905/3bdf6b77-db55-4a7e-9eda-3011e9be00c3)

  </li>  

  <li>
   <strong>/create ou /edit/:id (admin)</strong>: Tela para criar/atualizar os pratos.
     
  ![image](https://github.com/MarceloAlmd/WEB_explorer_food/assets/85407905/d5a9ab2d-86d3-4f30-8723-4bbaf9c48032)


  </li>  

  
</ul>


<hr/>
