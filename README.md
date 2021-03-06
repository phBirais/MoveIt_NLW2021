# MoveIt_NLW2021
Criação do Move It: Plataforma de gerenciamento de tempo gamificada utilizando o método Pomodoro, desenvolvida durante a Next Level Week, Fevereiro de 2021, utilizando as tecnologias ReactJS, NextJs, CSS e HTML.

Para acessar um demonstrativo da aplicação Acesse: https://moveit-phb.vercel.app

## Método Pomodoro
A técnica foi desenvolvida no final dos anos 80 pelo italiano Francesco Cirillo, que procurava uma maneira de aumentar sua produtividade nos estudos durante os primeiros anos de universidade. Para isso, ele utilizou um timer de cozinha para organizar suas tarefas. O método de baseia na ideia de que dividindo o nosso fluxo de trabalho em blocos de concentração intensa, conseguimos melhorar a agilidade do cérebro e estimular nosso foco. Em outras palavras, melhoramos nossa gestão do tempo e ficamos mais eficientes.

### Aplicando o método
Primeiramente, você deve fazer uma lista de tarefas a serem desempenhadas durante o dia. Depois, basta dividir seu tempo em períodos de 25 minutos (chamados “pomodoros”) e trabalhar ininterruptamente em suas tarefas nesses períodos. Quando o timer tocar (ao fim dos primeiros 25 minutos), faça um X nas tarefas concluídas ou anote o status de seu trabalho (50% concluído, por exemplo) e faça um breve intervalo de 5 minutos.
A cada quatro ciclos, faça uma pausa maior (entre 15 e 30 minutos) para descansar. Esses intervalos entres os pomodoros são fundamentais para “oxigenar o seu cérebro” e aumentar a agilidade mental

![uma-ajudinha-nos-estudos-tecnica-pomodoro-uma-ajudinha-nos-estudos-tecnica-pomodoro-2](https://user-images.githubusercontent.com/13524043/109508425-9ccbc500-7a7e-11eb-970e-c7eed47e9763.png)

Link de referência: [Técnica Pomodoro](https://www.unifebe.edu.br/site/blog/uma-ajudinha-nos-estudos-tecnica-pomodoro/)

## A aplicação
Aplicação consiste em uma SPA(Single page application) na qual o usuário pode controlar os ciclos no métodos pomodoro. Quando esse ciclo é encerrado uma atividade de relaxamento é mostrada na tela valendo pontos de experiência. A cada ciclo + atividade encerrada o usuário ganha mais pontos e pode subir de nível.

### Tela inicial
Tela quando abre a plataforma, permita notificações e pressione inicial um ciclo para começar.

![MainPage](https://user-images.githubusercontent.com/13524043/109545623-d95fe680-7aa7-11eb-84e5-4b4762b544d3.jpg)

### Funcionamento
Segue abaixo o exemplo de como utilizar a plataforma para gerenciar seu tempo:
![2021-03-01-15-47-42](https://user-images.githubusercontent.com/13524043/109544163-fd222d00-7aa5-11eb-8e48-4dca7823249a.gif)


## Copiar para sua máquina
Para rodar e modificar a aplcação do seu jeito basta seguir o passo a passo.
1. Clone o repositório para uma pasta desejada
2. Abra o terminal de sua prefêrencia 
3. Entre na pasta moveit-next
4. Digite *Yarn Dev*
5. No navegador, entre em localhost:3000
6. Pronto! é só testar e modificar como quiser.




