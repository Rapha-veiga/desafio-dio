let nomeheroi = ["Homem-Aranha", "Hulk", "Capitão América"];
let fase = [1000, 2000, 3500, 4630, 5000, 6550, 7421, 8000, 9210, 10001];

if (xp >= 1000) {
  fase = "Ferro";
} else if (xp < 1000 > 2001) {
  fase = "Bronze";
} else if (xp < 2001 > 5001) {
  fase = "Prata";
} else if (xp < 5001 > 7000) {
  fase = "Ouro";
} else if (xp < 7001 > 8000) {
  fase = "Platina";
} else if (xp < 8001 > 9000) {
  fase = "Ascendente";
} else if (xp < 9001 > 10000) {
  fase = "Imortal";
} else if (xp <= 10001) {
  fase = "Radiante";
}

console.log ("O herói de nome " + nomeheroi[1] + "está no nível " + fase[3])