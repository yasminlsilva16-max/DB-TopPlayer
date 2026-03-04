import { conexao } from "../config/db";

export async function listarUsuarios(){
    const [rows] = await conexao.query("SELECT id, nome, email, criado_em FROM usuarios ORDER BY id DESC"

    );
    return resultado
}

export async function buscarUsuario(id){
    const [resultado] = await conexao.query(
        "SELECT id, nome,email,criado_em FROM usuarios WHERE id =?"
        [id]
    );
    return resultado
}

export async function criarUsuario(nome,email,senha_hash){
    const [resultado] = await conexao.query(
        "INSERT INTO usuarios (nome,email,senha_hash) VALUES (?,?,?)",
        [nome,email,senha_hash]
    )
    return resultado.insertId
}