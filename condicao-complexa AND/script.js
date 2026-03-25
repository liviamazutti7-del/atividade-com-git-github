let idade = Number (prompt("insira sua idade:"));
let temCNH= prompt ("possui CNH? (sim ou nao)");

if (idade >= 18 && temCNH === "sim")  {
    alert("Você pode dirigir");
} else {
    alert("você nao pode dirigir");
}