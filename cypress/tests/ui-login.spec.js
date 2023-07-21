// <reference types="cypress"  />

import loginPage from "../support/pages/login/loginPage";


describe('Validar Fluxos de Login', () => {
    it('Realiza Login com sucesso', () => {
       loginPage.CriarUser()
       loginPage.RealizarLoginComSucesso()   
    });
    it('Tenta realizar login sem inserir Email', () => {
        loginPage.RealizarLoginSemInserirEmail()
    });
    it('Tenta realizar login sem inserir Senha', () => {
        loginPage.RealizarLoginSemInserirSenha()
    });
    it('Tenta realizar login com Email inválido', () => {
        loginPage.RealizarLoginComEmailInválido()
    });
    it('Tenta realizar login com Senha inválida', () => {
        loginPage.RealizarLoginComSenhaInválida()
    });
    it('Tenta realizar login com email sem arroba', () => {
        loginPage.RealizarLoginComEmailSemArroba()
    });
});