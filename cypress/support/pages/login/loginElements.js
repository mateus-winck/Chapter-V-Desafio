export default new class loginElements {
  
  inputUsername = () => '[placeholder="Username"]'
  inputEmail = () => '[placeholder="Email"]'
  inputPassword = () => '[placeholder="Password"]'
  loginButton = () => 'button.btn-primary'
  yourFeedValidation = () => '[show-authed="true"] > .nav-link'
  displayErrorLogin = () => 'div.ng-scope > .ng-binding'
  
}