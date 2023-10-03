 
 
 class orangehrm  {

    //elemnts 
    usernameElement = () => cy.get('[name="username"]')
    passwordElement = () => cy.get('[name="password"]')
    loginBtnElement = () => cy.get('.oxd-button')
    invalidLoginMessage = () => cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]')
    dashboardElement = () => cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')
    adminElement = () => cy.get('[href="/web/index.php/admin/viewAdminModule"]')
    addUserElement = () => cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary"]')
    selectUserRoleElement = () => cy.get('[class="oxd-icon bi-caret-down-fill oxd-select-text--arrow"]').first()
    adminRoleElement = () => cy.get('[class="oxd-select-option"]').eq(1)
    statusElement = () => cy.get('[class="oxd-icon bi-caret-down-fill oxd-select-text--arrow"]').last()
    selectStatusElement = () => cy.get('[class="oxd-select-option"]').eq(1)
    employeeNameElement = () => cy.get('[placeholder="Type for hints..."]')
    autoCompleteElement = () => cy.get('.oxd-autocomplete-option')
    addUserNameElement = () => cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input')
    choosePasswordElement = () => cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input')
    confrimPasswordElement = () => cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
    saveBtnElement = () => cy.get('.oxd-button--secondary')
    successfulAdd = () => cy.get('.oxd-text--toast-title')
    
    //actions
    navigate () {
        cy.visit('/')
    }
    addUserName (username) {
        this.usernameElement().type(username)
    }
     
     addPassword(password) {
         this.passwordElement().type(password)
    }
     
     clickLoginBtn() {
         this.loginBtnElement().click()
    }
     
    goToAdminPage() {
        this.adminElement().click()
    }

    addNewUser () {
        this.addUserElement().click()
    }
    
    
    selectStatus() {
        this.statusElement().click()
        this.selectStatusElement().click()
    }

    selectUserRole () {
        this.selectUserRoleElement().click()
        this.adminRoleElement().click()
    }
    
    addEmployeeName(name) {
        this.employeeNameElement().type(name)
        cy.wait(2000)
        this.autoCompleteElement().click()
    }
    
    enterUserName(name) {
        this.addUserNameElement().type(name)
    }
    
    enterPassword(passowrd) {
        this.choosePasswordElement().type(passowrd)
    }
    
    confirmPassowrd(password) {
        this.confrimPasswordElement().type(password)
    }
    
    save() {
        this.saveBtnElement().click()
        cy.wait(1500)
    }
    
    //assertions  
    validateInvalidLogin() {
        this.invalidLoginMessage().should('have.text','Invalid credentials')
    }
    
    validateSuccessfulLogin () {
        this.dashboardElement().should('be.visible')
    }
        
    validateAdd() {
        this.successfulAdd().should('have.text' , 'Success')
    }

    userID_Alpha() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789";
    
        for (var i = 0; i < 6; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
    
        return text;
      }
    
}

export const orangeHRM = new orangehrm()
