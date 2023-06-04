

![preview](/images/preview.png)


# AQUA METER

O AQUA METER trata-se de uma aplicação do tipo PWA para monitorar seu consumo diário de água. 

Segundo o site [tecnoblog](https://tecnoblog.net/responde/o-que-e-pwa-progressive-web-app/), PWA ou Progressive Web App significa um aplicativo de web progressivo. É um aplicativo desenvolvido a partir de tecnologias da web que todos nós conhecemos e gostamos, como HTML, CSS e JavaScript, mas com a sensação e funcionalidade que fica bem próxima de um aplicativo nativo de fato. O projeto foi desenvolvido durante a disciplina de Dispositivos Móveis.

## Funcionalidades 

- É possível registrar o consumo de água 
- Os registros são mostrados com a data e a hora que foram feitas, juntamente com a quantidade de água consumida
- A aplicação também contém com um dashboard que mostra o progresso diário de consumo do usuário
- Na tela inicial, são mostrados apenas os registros feitos naquele dia. Para vizualisar todos os registros feitos, basta acessar a aba histórico.
- Também é possível realizar a configuração do app. O usuário poderá definir uma meta diária de consumo e se esse consumo será reprensentado em litros(L) ou mililitros(ml) 

## Stack utilizada

 HTML5, CSS3, Bootstrap, JavaScript e NodeJs.

 Além da stack principal, também foi usado [Indexed Database API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) e o [LocalStorage](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage). Ambas tecnologias, são formas de armazenar dados do lado do cliente.

 Outro ponto, é a utilização de [Service Workers](https://developer.mozilla.org/pt-BR/docs/Web/API/Service_Worker_API/Using_Service_Workers), tecnologia que permite o uso offline do app garatindo seu funcionamento.





## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/caiofrz/aqua_meter.git
```

Entre no diretório do projeto

```bash
  cd aqua_meter
```

Primeiramente você precisará do node instalado em sua máquina. [Aqui](https://nodejs.org/en) você poderá fazer a instalação, caso não tenha, e/ou saber um pouco mais sobre essa ferramenta.

Rode o comando abaixo para instalar as dependências do projeto: 
```bash
  npm install
```

Depois, rode o comando abaixo para criar um servidor http em sua máquina: 
```bash
  npx http-server -c-1
```
O complemento *-c-1* fará que o cache do navegador seja desabilitado ao iniciar a aplicação. 

Pronto, o app deverá ser aberto automaticamente em seu navegador. Caso não aconteça, no seu terminal aparecerá o ip local em que o servidor foi criado, basta digitar este ip na barra de pesquisa do navegador.


É possível fazer download da aplicação em seu computador. Ao acessar a aplicação, uma mensagem irá aparecer perguntando se você deseja baixar o app. Caso não aconteça, próximo a barra de pesquisa deverá ter um ícone de dowload. 

## Feedback

Se você tiver algum feedback, por favor não deixe de dá-lo. 

Me contate através do [github](https://github.com/caiofrz) 
ou [LinkedIn](https://www.linkedin.com/in/caio-ferraz-almeida/) 
