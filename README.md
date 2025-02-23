# CRUD simples (simulação de controle remoto de câmeras)

Este projeto consiste em um exemplo de webservice CRUD (cliente e servidor) 

## Requisitos

- nodejs
- npm
- yarn

## Dependências
```bash
npm install --global yarn
```

## Execução
```bash
yarn run server
```
o site cliente estará hospedado no localhost:3000


## Funcionalidades

### adicionando nova câmera
- preencher id e location e clicar no botão create
![gif1](https://github.com/Ary2941/CRUD/assets/155399987/c7b92ea1-aef1-4661-991b-31874bf910fa)

### selecionando câmera
- clicar no botão verde à direita (a câmera selecionada estará no rótulo do botão)
![gif2](https://github.com/Ary2941/CRUD/assets/155399987/d7ce8b13-b5d9-4ed4-af41-6735767ccaa7)

### movimentar câmera
- botões de seta atualizam o último movimento da câmera (último movimento aparecerá no rótulo do botão vermelho)
![gif3](https://github.com/Ary2941/CRUD/assets/155399987/66daffe1-f3e3-4ef3-ace2-33e020d38786)

### trocar câmera
- clicar no botão verde à direita
![gif4](https://github.com/Ary2941/CRUD/assets/155399987/f1fa870a-63e6-456d-922f-2bd9c9aa7e17)

### remover câmera
- selecionar câmera
- clicar no botão vermelho
![gif5](https://github.com/Ary2941/CRUD/assets/155399987/dff2ae10-aae4-425a-823b-646754fea2dd)


# observações
- é possível ver resposta do servidor pelo terminal, basta inspecionar a página
- há um cliente de teste sem precisar usar a UI do localhost
```bash
node CRUD\coeur\client.js
```
x
