export const messageErroCodeLogin = (erroCode) =>{
    switch(erroCode){
        case "auth/wrong-password" :
            return "Senha Incorreta.";
        case "auth/invalid-email":
            return "Email Inválido.";
        case "auth/user-disabled":
            return "Email Informado Desativado.";           
        case "auth/user-not-found":
            return "Usuário não encontrado.";
        default:
            return "Erro 404. Favor entrar em contato com o suporte.";
   }
}