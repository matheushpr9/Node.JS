import { createCipheriv, randomBytes, createDecipheriv } from "crypto";

const mensagem  = "mensgaem secreta";
const chave = randomBytes(32);
const vetordeInicializacao = randomBytes(16);

const cifra = createCipheriv("aes256", chave, vetordeInicializacao);

const mensagemCifrada = cifra.update(mensagem, 'utf-8', 'hex') + cifra.final('hex');

console.log(mensagemCifrada)

// transmissão ------------ chave, vetordeInicializacao, menssagem

const decifra = createDecipheriv('aes256', chave, vetordeInicializacao);

const mensagemDecifrada = decifra.update(mensagemCifrada)