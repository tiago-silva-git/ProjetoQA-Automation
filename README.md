# Projeto de Automação de Testes com Cypress

Este repositório contém um conjunto de testes automatizados para validar o funcionamento de um site de e-commerce de teste usando o Cypress.

## Pré-requisitos

Certifique-se de que você possui as seguintes ferramentas instaladas:

- **Node.js**: versão 20.16.0

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git

2. Navegue até o diretório do projeto:
`cd nome-do-repositorio`

3. Instale as dependências do projeto:
`npm install`

## Configuração

Os testes neste projeto estão configurados para rodar no seguinte site:

- URL do site: `http://www.automationpractice.pl/index.php?controller=my-account`

## Executando os Testes
**Para rodar os testes, utilize um dos comandos abaixo:**

Modo Headless (executa os testes sem abrir o navegador):
`npx cypress run`


Modo Interativo (abre a interface do Cypress para executar os testes manualmente):
`npx cypress open`

## Estrutura do Projeto
cypress/e2e/: contém os arquivos de teste.
cypress/fixtures/: contém dados de teste, como JSONs com dados para simulação.
cypress/support/: contém comandos personalizados e configurações globais.

## Outros Comandos Úteis
 - Limpar Cache:
 `npm cache clean --force`

  - Atualizar Dependências:
 `npm update`