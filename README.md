# CALCULADORA DE JUROS COMPOSTOS
### [INSTALAÇÃO E CONFIGURAÇÃO](#config)

Aplicação que calcula os juros sobre um valor de investimento inicial e acumula o rendimento, a cada mes fazendo uma projeção gradual mensal.

### Demonstração basica do funcionamento do software

<img src="https://user-images.githubusercontent.com/101780975/226207194-538ad827-4876-4310-92dc-1503c2211f33.png" alt="imagem de projeto no tipo UML">

### Exemplo de entradas e possiveis projeções

> ***Importante:** os calculos não representam e nem podem ser considerados como, possieveis oportunidade de investimentos, todos os calculos são baseados em dados encontrados na internet como a taxa de juros do CDI, mais pode sofrer alterações ao longo do tempo. os dados retornados são apenas para fins de estudos.*

|INVESTIMENTO|JUROS  |PERÍODO| JUROS ACUMULADO | VALOR TOTAL 
|--        | --        |--        |--           | --         |
|R$ 1.000  | 0.83% a.m | 12 anos  |R$ 2.287,96  |R$ 3.287,96|
|R$ 5.000  | 0.83% a.m | 12 anos  |R$ 11.439,79 |R$ 16.439,79|
|R$ 10.000  | 0.83% a.m | 12 anos  |R$ 22.879,59  |R$ 32.879,59|
|R$ 50.000  | 0.83% a.m | 12 anos  |R$ 114.397,98 |R$ 164.397,98|
|R$ 100.000  | 0.83% a.m | 12 anos  |R$ 228.795,96 |R$ 328.795,96|

###  SOBRE O SOFTWARE

|TECNOLOGIA| VERSÃO  |
|--|--|
| TYPESCRIPT | 0.0.1 |

### DISCLAIMER

> Para esse modelo inicial foi considerado apenas regras basicas de programação, prezando pelo funcionamento do projeto. Mesmo ainda em fase de testes o software se mostra promissor em desempenho, algumas regras precisam ser melhoradas.

### AUTORIA
> Marcelo Pimenta

### TODO LIST

 - [x] Receber os valores.
 - [x] calcular o juros em cima do valor inserido.
 - [x] acumular esse valor durante 12 meses.
 - [x] calcular o montante em cima do prazo em anos passado como argumento.
 - [x] Formatar a saida para pt-BR.
 - [x] Criar cenarios de teste de validação de entradas.
 - [ ] Mostrar uma tabela com a projeção de cada ano.
 - [ ] Dar a possibilidade do usuário aportar mais valores ao decorrer dos meses.
 - [ ]   Mostrar a taxa de imposto paga pelo usuário em cima do valor bruto.
 - [ ] Mostrar a taxa de imposto mensal.
 - [ ] Implementar a funcionalidade de buscar os valores dos juros baseados na bolsa, e variações do mercado.
 - [ ] Criar uma interface para interação dinamica do usuário.
 - [ ] Implementar funcionalidade para exportar um arquivo CSV, XLSX e PDF.


### CONFIG 

> Depois de feito o clone do projeto na sua maquina rode os seguintes comandos.  

    yarn
> Para rodar o projeto

    yarn dev
> Depois de feito isso o projeto ira rodar os scripts para gerar o build e executar o codigo gerando o resultado no console.  

> Versão do Node na criação do projeto

    16.13.0

> Em caso de erro na compilação observe a versão do node na sua maquina, talvez seja necessário fazer o downgrade
