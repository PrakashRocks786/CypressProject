import { BlueLionOrderActions } from "../../../PageObjects/PageActions/BlueLionOrderActions"

const Order_Action = new BlueLionOrderActions()

describe('BlueLion Home Page', function() {
    it('Open BlueLion Home Page and navigate to product details', function() {
        cy.visit("https://www.bluelionlifestyle.com/")
        // Clicking a product on the homepage
        Order_Action.HomePageProduct()
    })
  
    it('Add Product To Cart and Login With OTP', function() {
        cy.visit("https://www.bluelionlifestyle.com/product-details/ff5c495c-8f8c-ef11-9cf1-a4bf016ce56d/0")

        // Adding the product to cart
        Order_Action.AddProductToCart()
        cy.fixture('blueLionLoginData').then((data) =>{

        // Login with OTP
            Order_Action.TypePhoneNumberToLogin(data.phoneNumber)
            Order_Action.ClickLoginButton()

        //Enter OTP
            Order_Action.FirstDigitOtp(data.FirstDigit)
            Order_Action.SecondDigitOtp(data.SecondDigit)
            Order_Action.ThirdDigitOtp(data.ThirdDigit)
            Order_Action.FourthDigitOtp(data.FourthDigit)
        })
        // CheckOut
        Order_Action.ProceedToCheckOut()

        //Order_Action.AddANewAddress()
        cy.get('body').then(($body) => {
            if ($body.find(Order_Action.NoAddressAddedYet()).is(':visible').length > 0) {
                

        //Add Address
        cy.fixture('blueLionLoginData').then((data) =>{
            Order_Action.AddANewAddress()
            Order_Action.FirstAddressLine(data.AddressLineFirst)
            Order_Action.SecondAddressLine(data.AddressLineSecond)
            Order_Action.AddCity(data.City)
            Order_Action.AddPostalCard(data.PostalCode)
            Order_Action.Country(data.Country)
        })
            } else {
                Order_Action.PlaceOrder()
            }
        })
              
    })        
        })
    



