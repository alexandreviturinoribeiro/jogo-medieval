const nomes = ["Eldrin", "Aethelgard", "Lyra", "Gwen", "Valerius", "Kaelen", "Isolda"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);
