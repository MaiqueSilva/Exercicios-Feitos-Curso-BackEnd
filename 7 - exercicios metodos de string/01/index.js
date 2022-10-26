const comentario = "Esse PANDEMIA é muito perigoso! ";

if (comentario.includes("COVID") ||
    comentario.includes("covid") ||
    comentario.includes("pandemia") ||
    comentario.includes("PANDEMIA")) {
    console.log("Comentário bloqueado por conter palavras proibidas")
} else {
    console.log("Comentário autorizado")
}