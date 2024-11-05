  function calcularPontos (jogador, vitorias, derrotas){
    let mediaPontos = vitorias - derrotas;
    let nivel

    if (mediaPontos < 10) {
      nivel = "Ferro"

    }
    if (mediaPontos == 11 <= 20) {
      nivel = "Bronze"
      
    }
    if (mediaPontos == 21 <= 50) {
      nivel = "Prata"
      
    }
    if (mediaPontos == 51 <= 80) {
      nivel = "Ouro"
      
    }
    if (mediaPontos == 81 <= 90) {
      nivel = "Diamante"
      
    }
    if (mediaPontos == 91 <= 100) {
      nivel = "Ferro"
      
    }
    if (mediaPontos >= 101) {
      nivel = "Imortal"
      
    }

    console.log ("O jogador " + jogador + " tem um saldo de " + mediaPontos + " pontos e está no nível " + nivel)
 }

 calcularPontos("Matheuzinho Gameplay", 80, 12)