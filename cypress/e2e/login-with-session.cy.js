describe("login with session",()=>{
    beforeEach(()=>{
        cy.loginWithSession("Admin","admin123")
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    })

    it("testcase1",()=>{
        cy.log("test case 1")
    })

    it("testcase2",()=>{
        cy.log("test case 2")
    })

    it("testcase3",()=>{
        cy.log("test case 3")
    })

    it("testcase4",()=>{
        cy.log("test case 4")
    })

    it("testcase5",()=>{
        cy.log("test case 5")
    })

    it("testcase6",()=>{
        cy.log("test case 6")
    })
})