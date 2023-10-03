import { orangeHRM, orangehrm } from "../orangeHRM-pages/orange"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  
describe('orangehrm login test',()=>{
    
    beforeEach(()=>{
        orangeHRM.navigate()
    })

    it('shouldnot login successfully' , ()=>{
        orangeHRM.addUserName('wrongusername')
        orangeHRM.addPassword('admin123')
        orangeHRM.clickLoginBtn()
        orangeHRM.validateInvalidLogin()
    })

    it('should login successfully' , ()=>{
        orangeHRM.addUserName('Admin')
        orangeHRM.addPassword('admin123')
        orangeHRM.clickLoginBtn()
        orangeHRM.validateSuccessfulLogin()
    })

    it('should add new user', ()=>{
        orangeHRM.addUserName('Admin')
        orangeHRM.addPassword('admin123')
        orangeHRM.clickLoginBtn()
        orangeHRM.goToAdminPage()
        orangeHRM.addNewUser()
        orangeHRM.selectStatus()
        orangeHRM.selectUserRole()
        orangeHRM.enterUserName(orangeHRM.userID_Alpha())
        orangeHRM.enterPassword('Test1234')
        orangeHRM.confirmPassowrd('Test1234')
        orangeHRM.addEmployeeName('john smith')
        orangeHRM.save()
        orangeHRM.validateAdd()
    })
})
