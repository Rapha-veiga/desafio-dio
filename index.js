  function calcularPontos (jogador, vitorias, derrotas){
    let mediaPontos = vitorias - derrotas;
    let nivel

    if (mediaPontos < 10) {
      nivel = "Ferro"

    } else if (mediaPontos == 11 && mediaPontos <= 20) {
      nivel = "Bronze"
      
    } else if (mediaPontos == 21 && mediaPontos <= 50) {
      nivel = "Prata"
      
    } else if (mediaPontos == 51 && mediaPontos <= 80) {
      nivel = "Ouro"
      
    } else if (mediaPontos == 81 && mediaPontos <= 90) {
      nivel = "Diamante"
      
    } else if (mediaPontos == 91 && mediaPontos <= 100) {
      nivel = "Ferro"
       
    } else {
      nivel = "Imortal"
      
    }

    console.log ("O jogador " + jogador + " tem um saldo de " + mediaPontos + " pontos e está no nível " + nivel)
 }

 calcularPontos("Matheuzinho Gameplay", 120, 12)