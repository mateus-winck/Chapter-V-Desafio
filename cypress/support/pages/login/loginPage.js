import loginElements from './loginElements'
import user from '../fixtures/ui-cadastro.json'


export default new class LoginPage {

  CriarUser() {
    cy.request( {
        method: 'post',
        url: 'https://api.realworld.io/api/users',
        body: user,
        failOnStatusCode: false

    }).as('postUsers')
  }
  RealizarLoginComSucesso() {
    cy.visit('login')
    cy.get(loginElements.inputEmail()).type(user.user.email)
    cy.get(loginElements.inputPassword()).type(user.user.password)
    cy.get(loginElements.loginButton()).click()
    cy.get(loginElements.yourFeedValidation()).should('contain', 'Your Feed')  
  }
  RealizarLoginSemInserirEmail() {
    cy.visit('login')
    cy.get(loginElements.inputPassword()).type(user.user.password)
    cy.get(loginElements.loginButton()).click()
    cy.get(loginElements.displayErrorLogin()).should('contain', "email can't be blank")
  }
  RealizarLoginSemInserirSenha() {
    cy.visit('login')
    cy.get(loginElements.inputEmail()).type(user.user.email)
    cy.get(loginElements.loginButton()).click()
    cy.get(loginElements.displayErrorLogin()).should('contain', "password can't be blank")
  }
  RealizarLoginComEmailInválido() {
    cy.visit('login')
    cy.get(loginElements.inputEmail()).type('email@errado')
    cy.get(loginElements.inputPassword()).type(user.user.password)
    cy.get(loginElements.loginButton()).click()
    cy.get(loginElements.displayErrorLogin()).should('contain', "email or password is invalid")
  }
  RealizarLoginComSenhaInválida() {
    cy.visit('login')
    cy.get(loginElements.inputEmail()).type(user.user.email)
    cy.get(loginElements.inputPassword()).type('1')
    cy.get(loginElements.loginButton()).click()
    cy.get(loginElements.displayErrorLogin()).should('contain', "email or password is invalid")
  }
  RealizarLoginComEmailSemArroba() {
    cy.visit('login')
    cy.get(loginElements.inputEmail()).type('email.email')
    cy.get(loginElements.inputPassword()).type('1')
    cy.get(loginElements.loginButton()).click()
    cy.request({
      url: 'https://conduit.productionready.io/api/users/login',
      failOnStatusCode:false,
  }).then((resp) => {
      expect(resp.status).to.eq(404)
  })
  }
}