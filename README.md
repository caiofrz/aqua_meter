

![preview](/images/agua-128.png)


# AQUA METER

O AQUA METER trata-se de uma aplicação do tipo PWA para monitorar seu consumo diário de água. 

Segundo o site [tecnoblog](https://tecnoblog.net/responde/o-que-e-pwa-progressive-web-app/), PWA ou Progressive Web App significa um aplicativo de web progressivo. É um aplicativo desenvolvido a partir de tecnologias da web que todos nós conhecemos e gostamos, como HTML, CSS e JavaScript, mas com a sensação e funcionalidade que fica bem próxima de um aplicativo nativo de fato. O projeto foi desenvolvido durante a disciplina de Dispositivos Móveis.

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


## Feedback

Se você tiver algum feedback, por favor não deixe de dá-lo. 

Me contate através do [github](https://github.com/caiofrz) 
ou [LinkedIn](https://www.linkedin.com/in/caio-ferraz-almeida/) 
