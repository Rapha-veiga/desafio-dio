let nomeheroi = ["Homem-Aranha", "Hulk", "Capitão América"];
let xp = [1000, 2000, 3500, 4630, 5000, 6550, 7421, 8000, 9210, 10001];
let fase

if (xp[5] <= 1000) {
  fase = "Ferro";
} else if (xp[5] > 1000 && xp[5] <= 2000) {
  fase = "Bronze";
} else if (xp[5] > 2001 && xp[5] <= 5000) {
  fase = "Prata";
} else if (xp[5] > 5001 && xp[5] <= 7000) {
  fase = "Ouro";
} else if (xp[5] > 7001 && xp[5] <= 8000) {
  fase = "Platina";
} else if (xp[5] > 8001 && xp[5] <= 9000) {
  fase = "Ascendente";
} else if (xp[5] > 9001 && xp[5] <= 10000) {
  fase = "Imortal";
} else if (xp[5] >= 10001) {
  fase = "Radiante";
}

console.log ("O herói de nome " + nomeheroi[1] + " está no nível " + fase)