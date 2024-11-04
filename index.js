  function calcularPontos (jogador, vitorias, derrotas){
    let mediaPontos = vitorias - derrotas;

    if (mediaPontos < 10) {
      nivel = "Ferro"
     
    }
    console.log ("O jogador " + jogador + " tem um saldo de " + mediaPontos + " pontos e está no nível ")
 }

 calcularPontos("Matheuzinho Gameplay", 20, 15)