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
            case "The password is invalid or the user does not have a password.":
            return "Senha/Email incorreto";
        default:
            return console.log(erroCode);
   }
}