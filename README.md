# Citei
**Version 1.0.0**

Citei é uma API open source e de uso gratuito de citações. A API retorna citações em ordem, aleatórias, por autor ou por categoria. Se você quer construir sua própria versão da API continue lendo, caso contrário leia a [documentação](/) e aprenda como usá-la.

<p align="center">
  <img src="assets/citeilogobranco.png">
</p>

## Conteúdos
* [Começando](#começando)
* [Instalação](#instalação)
* [Modo de usar](#modo-de-usar)
* [Construído Com](#construído-com)
* [Autor](#autor)

##  Começando
Essas instruções fornecerão uma cópia do projeto instalado e funcionando em sua máquina local para fins de desenvolvimento e teste.

## Instalação
Execute os comandos a seguir e você terá uma versão local do projeto em execução.
```bash
$ git clone https://github.com/jonathasgouv/citei-api
$ cd citei-api/
$ npm install
```
Renomeie o arquivo `.env.example` para `.env` e preencha as variáveis de ambiente. Pronto, agora basta iniciar o server de desenvolvimento com:

```bash
$ npm run dev
```

:grinning:

Para popular a database siga o esquema de quotes disponível na [documentação](/).

## Modo de usar
Confira os endpoints disponíveis na [documentação](/).

## Construído com
* [Javascript](https://www.javascript.com/)
* [Node.js](https://nodejs.org/en/)
* [MongoDB](https://www.mongodb.com/)
* [Typescript](https://www.typescriptlang.org/)
* [Jest](https://jestjs.io/)

## Autor
* [Jônathas Gouveia](https://github.com/jonathasgouv/)

## Licença
This project is licensed under the  GPL-3.0 License - see the [LICENSE](https://github.com/jonathasgouv/bmicalculator/blob/master/LICENSE) file for details
