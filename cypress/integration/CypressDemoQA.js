describe('My first demo test suite',function(){

    it('Open DemoQA site',function(){

     cy.visit("https://demoqa.com/");
     cy.contains("Elements").click()
     cy.get('.col-md-6').contains("Please select an item from left to start practice.")
     cy.get("#item-0").click()
     cy.get('#userName').type("Shreya Sharma")
     cy.get('#userEmail').type("shreya.dasharathi@gmail.com")
     cy.get('#currentAddress').type("Harrow 180 ,Roxborough Heights,Harrow")
     cy.get('#permanentAddress').type("XYZ")
     cy.get("#submit").click()

    })

    it('Practice check boxes',function(){

      cy.get("#item-1").click()
      cy.get('.rct-collapse > .rct-icon').click()
      cy.get(':nth-child(2) > .rct-text > label > .rct-checkbox > .rct-icon').click()
      cy.get(":nth-child(2)> .rct-text > .rct-collapse> .rct-icon ").click({multiple:true})
      cy.get(":nth-child(3) > .rct-text > label > .rct-checkbox > .rct-icon").click()

 })

 it('Practice Radiobuttons',function(){

 cy.get('#item-2').click()   
 cy.get('.col-md-6 > :nth-child(1) > :nth-child(3)').click()

})

it('Practice Web Tables',function(){

cy.get('#item-3').click()
cy.get('#edit-record-2').click()
cy.get('#age').clear()
cy.get('#age').type('40')
cy.get('#submit').click()
cy.get('select').select('20 rows').should('have.value','20')

})

it('Practice Buttons',function(){

    cy.get('#item-4').click()
    cy.get('#rightClickBtn').click()

})
 
it('Practice Links',function(){

    cy.get('#item-5').click()
    cy.get("#created").click()
    cy.get('#simpleLink').click()

})

it('Practice Broken Links',function(){


cy.get("#item-6").click()

cy.contains('Click Here for Broken Link').click()



})


})