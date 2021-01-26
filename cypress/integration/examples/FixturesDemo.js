
describe ('Fistures Test Suite',function(){

    before(function() {

 cy.fixture('DemoQA').then(function(data){

this.data = data;


 })

})

it ('Create an Account',function(){

cy.visit('http://shop.demoqa.com/')
cy.get('a[href="http://shop.demoqa.com/my-account/"]').click({force:true})
cy.get('#reg_username').type(this.data.UserName)
cy.get('#reg_email').type(this.data.Email)
cy.get('#reg_password').type(this.data.Password , {log:false})
cy.get('.woocommerce-Button').click({multiple:true})







})








})