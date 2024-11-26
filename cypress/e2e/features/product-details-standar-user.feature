Feature: Swag Labs Product Details
As a standard user
I want to view product details
So that I can get more information about the products
Background:
Given I am logged in as a standard user
Scenario: View Product Details
When I navigate to the Products page
And I select a product
Then I should see the product details page
And the page should display product information