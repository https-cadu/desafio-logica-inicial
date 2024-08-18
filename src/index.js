let nome = "Alexandre, o Pequeno";
let exp = 8500;
let apresentacao = "O herói " + nome + ", " + "está no nível ";

if (exp < 1000) {
    console.log(apresentacao + "Ferro.");
} else if (exp >= 1000 && exp < 2000) {
    console.log(apresentacao + "Bronze.");
} else if (exp >= 2000 && exp < 5000) {
    console.log(apresentacao + "Prata.");
} else if (exp >= 5000 && exp < 7000) {
    console.log(apresentacao + "Ouro.");
} else if (exp >= 7000 && exp < 8000) {
    console.log(apresentacao + "Platina.");
} else if (exp >= 8000 && exp < 9000) {
    console.log(apresentacao + "Ascendente.")
} else if (exp >= 9000 && exp <10000) {
    console.log(apresentacao + "Imortal.")
} else if (exp >1000) {
    console.log(apresentacao + "Radiante.")
}