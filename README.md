# **Hands on 3 - #43 - La Vie**

Um grupo de amigos psicólogos se juntaram e criaram a clínica La Vie - Saúde Mental que oferece diversos tipos de terapia aos seus pacientes.

Com o intuito de melhor atender, agilizar e documentar todas as consultas e atendimentos, solicitaram uma API para proporcionar a criação de registros dos psicólogos, pacientes e atendimentos diários.

<hr>

### Documentação da API

Para acessar a documentação, basta clicar no botão abaixo para ser redirecionado ao Insomnia

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=La%20Vie%20-%20Sa%C3%BAde%20Mental&uri=https%3A%2F%2Fraw.githubusercontent.com%2Ffroyalt%2FHandsOn-3-CreatingAPI%2Fmaster%2Finsomnia.json)

Alternativamente, na pasta "Documentação Insomnia" do repositório, você pode executar localmente o git bash, após isso digitar dentro da linha de comando "npx serve" e abrir no seu navegador o "localhost:(porta que o bash retornou)" para conferir a documentação completa.

<hr>

## **Banco de dados relacional**

Criação do DER no banco de dados
imagem do banco de dados [DER](https://i.imgur.com/CGt1zeg.png)

<hr>

## **API**

Foram utilizado Sequelize e Express na construção e assim dividido em 5 etapas:
<br>

* Login
* Pacientes
* Psicólogos
* Atendimento
* Dashboard
    <br>
    <br>

## **Login**

No área de login é feito uma autenticação de e-mail e senha que retorna um token gerado pelo [JWT](https://www.npmjs.com/package/jsonwebtoken)

## **Pacientes**

Feito um CRUD de acordo com a documentação.

## **Psicólogos**

No CRUD foi utilizado o pacote [bcrypt](https://www.npmjs.com/package/bcrypt) fazendo a criptografia na senha do psicólogo.

### **Atendimentos**

Para criação do atendimento é necessário uma autorização. Essa autorização é feita pelo token JWT.

### **Dashboard**

O Dashboard traz informações como: número de psicólogos, número de pacientes, total de atendimentos e a media de atendimentos por psicólogos.

<hr>
<br>

## **Desenvolvedores**

Desenvolvido pela equipe:  
[Andrei Alcantara](https://github.com/dreialcantara),
[Fernando TF](https://github.com/froyalt),
[Pedro Gonçalves](https://github.com/pedrogoncaalves),
[Silvan Miller](https://github.com/silvanmiller)
