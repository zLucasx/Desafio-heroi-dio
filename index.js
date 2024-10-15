let nome = "Lucas"
let xp = 1500

if(xp <= 1000){
    console.log("O Herói de nome " + nome + " está no nivel de Ferro")
}
else if (xp === 1001 || xp < 2001){
    console.log("O Herói de nome " + nome + " está no nivel de Bronze")
}
else if (xp === 2001 || xp < 5001){
    console.log("O Herói de nome " + nome + " está no nivel de Prata")
}
else if (xp === 5001 || xp < 7001){
    console.log("O Herói de nome " + nome + " está no nivel de Ouro")
}
else if (xp === 7001 || xp < 8001){
    console.log("O Herói de nome " + nome + " está no nivel de Platina")
}
else if (xp === 8001 || xp < 9001){
    console.log("O Herói de nome " + nome + " está no nivel de Ascendente")
}
else if (xp === 9001 || xp < 10001){
    console.log("O Herói de nome " + nome + " está no nivel de Imortal")
}
else if (xp >= 10001){
    console.log("O Herói de nome " + nome + " está no nivel de Radiante")
}