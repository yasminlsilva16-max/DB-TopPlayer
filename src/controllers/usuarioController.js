import * as usuarioModel from "../models/usuarioModel.js"
import crypto from "crypto";

export async function listar(req,res){
    const usuarios = await usuarioModel.listarUsuarios();
    res.json(usuarios);
}

export async function buscarPorId(req,res){
    const usuario = await usuarioModel.buscarPorId(req,params.id);

    if(!usuario){
        return res.status(404).json({msg: "usuario não encontrado"})
    }
    res,json(usuarios)
}

export async function criar(req,res) {
    const{nome,email,senha}= req.body;

    if (!nome || !email || !senha_hash){
        return res.status(400).json({
            msg:"nome,senha e email são obrigátorios"
        })
    }
    const senha_hash = crypto.createHash("sha256")
    .update(senha)
    .disgest("hex");

    const id = await usuarioModel.criarUsuario({
        nome,email,senha_hash
    })

}

export async function login(req,res){
    const{email,senha} = req.body;

    if (!email || !senha){
        return res.status(400).json({msg:"email e senha são obrigatórios"})
    }
    
    const usuario = await usuarioModel.buscarporEmail(email);
    if(!usuario){
        return res.status(400).json({"credenciais invalidas"});
    }

    const token = crypto.randomBytes(24).toString("hex");

    return res.status(200).json({
        msg:"login realizado com sucesso",
        token,
        usuario:{
            id:usuario.id,
            nome:usuario.nome,
            usuario:usuario.email
        }

    })
}