
/*Faça um "jogo da velha" criando uma matriz em duas dimensões 
(Você deve criar um array com 3 arrays de 3 elementos cada dentro). 
O programa deve pedir as coordenadas (linha e coluna) alternadamente para 2 jogares e marcar X ou O em cada caso.
Caso um jogador vença, ele deve perguntar se desejam jogar mais uma vez,
e registrar quem venceu aquela rodada, se os jogadores desejarem parar, 
o programa deve mostrar quem ganhou mais rodadas e quem é o grande vencedor.

Valor da entrega: 10 pontos.
A avaliação será feita por entregáveis obrigatórios, cada um valerá uma quantidade de pontos,
 todos começarão com 0 pontos, a cada item entregue, você receberá a quantia pertinente aquela entrega.
Criação da Matriz de duas dimensões. (1,0)
Solicitar coordenadas aos jogadores. (1,0)
Laço de repetição que determinará se os jogadores querem continuar o jogo ou não. (2,0)
 Variável para controle do vencedor de cada rodada. (2,0)
Mostrar o resultado e quem foi o grande vencedor. (2,0)
Conteúdo de variáveis, arrays, matrizes, condicionais e laços bem aplicados. (2,0)

*/

const prompt = require('prompt-sync')()
let list0 = [
    [0,1,2],
    [3,4,5],
    [6,7,8]
   ]
   console.log('Este é o jogo da velha e para gaanhá-lo, basta que o jogador consigar inserir 3, movimentos, podendo ser na vertical, horizontal ou diagonais');
   cosole.log('O jogador1 tem como representação "X" e o jogador2 tem sua representação com "O"')
   var playerv1= 0;
   var playerv2=0;
   function VerificadorGeral(lista) {
    var ganhar = false
    
   
    loop: while(ganhar === false){
    
     
       console.table(lista)
       let play1 = +prompt ('Jogador 1, escolha um indice para alterar');
      
       if (play1 === 0){
         lista[0][0] = 'X'
       }else if(play1 === 1){
         lista[0][1] = 'X'
       }else if(play1 === 2){
         lista[0][2] = 'X'
       }else if (play1 === 3){
         lista[1][0] = 'X'
       }else if(play1 === 4){
         lista[1][1] = 'X'
       }else if (play1 === 5){
         lista[1][2] = 'X'
       }else if(play1 === 6){
         lista[2][0] = 'X'
       }else if (play1 === 7){
         lista[2][1] = 'X'
       }else if(play1 === 8){
         lista[2][2] = 'X'
       }
       
       VerificadorDeGanhador(VerificadorGeral)
      if(ganhar == true){
         let reiniciar= prompt('Deseja jogar novamente?').toLowerCase();
         if(reiniciar== 'sim'){
           ganhar=false
           lista = [
            [0,1,2],
            [3,4,5],
            [6,7,8]
           ];
           continue loop;
         }else{
         console.log('O jogador1 teve, ',playerv1,' vitórias e o jogador2 teve,',playerv2, ', vitórias')  
         break;
           
         }  
       }       
       
       console.table(lista)
      
     let play2 = +prompt ('Jogador 2, escolha um indice para alterar'); 
       if (play2 === 0){
         lista[0][0] = 'O'
       }else if(play2 === 1){
         lista[0][1] = 'O'
       }else if(play2 === 2){
         lista[0][2] = 'O'
       }else if (play2 === 3){
         lista[1][0] = 'O'
       }else if(play2 === 4){
         lista[1][1] = 'O'
       }else if (play2 === 5){
         lista[1][2] = 'O'
       }else if(play2 === 6){
         lista[2][0] = 'O'
       }else if (play2 === 7){
         lista[2][1] = 'O'
       }else if(play2 === 8){
         lista[2][2] = 'O'
       }
       VerificadorDeGanhador(VerificadorGeral)
      
       if(ganhar == true){
         let reiniciar= prompt('Deseja jogar novamente?').toLowerCase();
         if(reiniciar== 'sim'){
           ganhar=false;
             lista = [
              [0,1,2],
              [3,4,5],
              [6,7,8]
             ];
           continue;
         }else{
         console.log('O jogador1 teve, ',playerv1,' vitórias e o jogador2 teve,',playerv2, ', vitórias')  
         break;
           
         }  
       }
       
      
         function VerificadorDeGanhador(VerificadorGeral){
       
       if((lista[0][0] == 'X') && (lista[0][1] == 'X') && (lista[0][2] == 'X')){
         ganhar = true;
         console.log('As casas 0,1 e 2, forma preenchidas  com "X", o Jogador 1 é o Campeão, Parabéns ;) !!!')
         playerv1++
       }else if((lista[1][0] == 'X') && (lista[1][1] == 'X') && (lista[1][2] == 'X')){
         ganhar = true;
         console.log('As casas 3,4 e 5, forma preenchidas  com "X", o Jogador 1 é o Campeão, Parabéns ;) !!!');
         playerv1++
       }else if((lista[2][0] == 'X') && (lista[2][1] == 'X') && (lista[2][2] == 'X')){
         ganhar = true;
         console.log('As casas 6,7 e 8, forma preenchidas  com "X", o Jogador 1 é o Campeão, Parabéns ;) !!!');
       }else if((lista[0][0] == 'X') && (lista[1][0] == 'X') && (lista[2][0] == 'X')){
         ganhar = true;
         console.log('As casas 3,4 e 5, forma preenchidas  com "X", o Jogador 1 é o Campeão, Parabéns ;) !!!');
         playerv1++
       }else if((lista[0][1] == 'X') && (lista[1][1] == 'X') && (lista[2][1] == 'X')){
         ganhar = true;
         console.log('As casas 3,4 e 5, forma preenchidas  com "X", o Jogador 1 é o Campeão, Parabéns ;) !!!');
         playerv1++
       }else if((lista[0][2] == 'X') && (lista[1][2] == 'X') && (lista[2][2] == 'X')){
         ganhar = true;
         console.log('As casas 3,4 e 5, forma preenchidas  com "X", o Jogador 1 é o Campeão, Parabéns ;) !!!');
         playerv1++
       }else if((lista[0][2] == 'X') && (lista[1][1] == 'X') && (lista[2][0] == 'X')){
         ganhar = true;
         console.log('As casas 3,4 e 5, forma preenchidas  com "X", o Jogador 1 é o Campeão, Parabéns ;) !!!');
         playerv1++
       }else if((lista[0][0] == 'X') && (lista[1][1] == 'X') && (lista[2][2] == 'X')){
         ganhar = true;
         console.log('As casas 3,4 e 5, forma preenchidas  com "X", o Jogador 1 é o Campeão, Parabéns ;) !!!');  
         playerv1++
       }else if((lista[0][0] == 'O') && (lista[0][1] == 'O') && (lista[0][2] == 'O')){
         ganhar = true;
         console.log('As casas 0,1 e 2, forma preenchidas  com "O", o Jogador 2 é o Campeão, Parabéns ;) !!!')
         playerv2++
       }else if((lista[1][0] == 'O') && (lista[1][1] == 'O') && (lista[1][2] == 'O')){
         ganhar = true;
         console.log('As casas 3,4 e 5, forma preenchidas  com "O", o Jogador 2 é o Campeão, Parabéns ;) !!!');
         playerv2++
       }else if((lista[2][0] == 'O') && (lista[2][1] == 'O') && (lista[2][2] == 'O')){
         ganhar = true;
         console.log('As casas 6,7 e 8, forma preenchidas  com "O", o Jogador 2 é o Campeão, Parabéns ;) !!!');
         playerv2++
       }else if((lista[0][0] == 'O') && (lista[1][0] == 'O') && (lista[2][0] == 'O')){
         ganhar = true;
         console.log('As casas 0,3 e 6, forma preenchidas  com "O", o Jogador 2 é o Campeão, Parabéns ;) !!!');
         playerv2++
       }else if((lista[0][1] == 'O') && (lista[1][1] == 'O') && (lista[2][1] == 'O')){
         ganhar = true;
         console.log('As casas 1,4 e 7, forma preenchidas  com "O", o Jogador 2 é o Campeão, Parabéns ;) !!!');
         playerv2++
       }else if((lista[0][2] == 'O') && (lista[1][2] == 'O') && (lista[2][2] == 'O')){
         ganhar = true;
         console.log('As casas 2,5 e 8, forma preenchidas  com "O", o Jogador 2 é o Campeão, Parabéns ;) !!!');
         
       }else if((lista[0][2] == 'O') && (lista[1][1] == 'O') && (lista[2][0] == 'O')){
         ganhar = true;
         console.log('As casas 2,4 e 6, forma preenchidas  com "O", o Jogador 2 é o Campeão, Parabéns ;) !!!');
         playerv2++
       }else if((lista[0][0] == 'O') && (lista[1][1] == 'O') && (lista[2][2] == 'O')){
         ganhar = true;
         console.log('As casas 0,4 e 8, forma preenchidas  com "O", o Jogador 2 é o Campeão, Parabéns ;) !!!');  
         playerv2++
       }
     
       return VerificadorGeral;
     
       }
         function VerificadorDeEspacos(VerificadorGeral){
           if((lista[0][0] == 'X') || (lista[0][0] =='O')||(lista[0][1] == 'X')||(lista[0][1] == 'O') || (lista[0][2] == 'X')|| (lista[0][2] == 'X')|| (lista[1][0] == 'X')||(lista[1][0] == 'O') || (lista[1][1] == 'X')||(lista[1][1] == 'O')|| (lista[1][2] == 'X')||(lista[1][2] == 'O')|| (lista[2][0] == 'X')||(lista[2][0] == 'O')||(lista[2][1] == 'X')||(lista[2][1] == 'O')||(lista[2][2] == 'X')||(lista[2][2] == 'O')){
             console.log('Local já ocupado')
           }
           return VerificadorGeral
         }
     }
   }
   
   VerificadorGeral(list0)
   console.log()