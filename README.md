# FCM Digital - QA Technical challenge
Welcome to the FCM Digital QA team technical challenge, the objective of this challenge is to learn more about the way you work. There is no single solution, so don't worry, just do the best you can. 

## Challenge information
You will have to create a private repository on which you will work using this file as README and add **josele88** and **CarlosPintoF** as collaborators. Once you complete the challenge, you will contact us via email and we will proceed to review it.

## Goals
Given some user stories witch their acceptance criterias:
 1. Write the test cases in the README.md file, [Test Cases](#test-cases) section.
 2. Create a project using YARN.
 3. Install Cypress using YARN.
 4. Implement in Cypress as many tests as test cases have been defined to be validated automatically. Upload to your fork all the code structure needed to run the tests as well as the instructions so that they can be easily executed (write the instructions on the README.md file, [How to Run the Tests](#how-to-run-the-tests) section).
 5. Write the git commands used during the challenge in the README.md file, [Git Commands](#git-commands) section.
 6. Write down the problems you have encountered during the challenge in the README.md file, [Problems](#problems) section.

# Challenge
## Challenge URL
https://www.saucedemo.com

## User Story 1
As a Swag Labs admin, I need to access/logout the platform with the 4 different user types.

## Acceptance Criterias 1
Ensure the Swag Labs admins are able to:
1. Log in/Log out to Swag Labs (standard_user)
2. Not logging in to Swag Labs and getting an error (locked_out_user)
3. Log in/Log out to Swag Labs (problem_user)
4. Log in/Log out to Swag Labs (performance_glitch_user)

## User Story 2
As a Swag Labs standard_user, I need to open the products detail page in the Swag Labs ordering platform so that get more information about the products

## Acceptance Criterias 2
Ensure the Swag Labs standard_user are able to:
1. Log in to Swag Labs
2. Navigate in the Products page
3. Able to access to the products details view

## User Story 3
As a Swag Labs standard_user, I need to add to cart products in the Swag Labs ordering platform so that I can buy it

## Acceptance Criterias 3
Ensure the Swag Labs standard_user are able to:
1. Log in to Swag Labs
2. Navigate in the Products page
3. Able to add to cart product(s) to buy
4. Navigate into the Products details page
5. Able to add to cart product(s) to buy

## User Story 4
As a Swag Labs standard_user, I need to review my previous added to cart products in the Swag Labs ordering platform so that I can remove it

## Acceptance Criterias 4
Ensure the Swag Labs standard_user are able to:
1. Log in to Swag Labs
2. Navigate in the Products page
3. Able to add to cart product(s) to buy
3. Able to remove product(s)
4. Navigate into the Products details page
5. Able to remove product(s)
6. Navigate into the shopping cart
7. Able to remove product(s)

## User Story 5
As a Swag Labs standard_user, I need to sort products in the Swag Labs ordering platform so that I can find what I'm looking for easily

## Acceptance Criterias 5
Ensure the Swag Labs standard_user are able to:
1. Log in to Swag Labs
2. Navigate in the Products page
3. Able to sort product(s) in different ways

## User Story 6
As a Swag Labs standard_user, I need to reset the app status in the Swag Labs ordering platform so that I can reset the app to its initial settings

## Acceptance Criterias 6
Ensure the Swag Labs standard_user are able to:
1. Log in to Swag Labs
2. Navigate in the menu page
3. Able to reset app state

## User Story 7
As a Swag Labs standard_user, I need to see the product information in the product page and product details page in the Swag Labs ordering platform so that I can know what I'm buying

## Acceptance Criterias 7
Ensure the Swag Labs standard_user are able to:
1. Log in to Swag Labs
2. Navigate in the Products page
3. Able to see all the product information (image, title, description, price)
4. Navigate into the Products details page
5. Able to see all the product information (image, title, description, price)

## User Story 8
As a Swag Labs standard_user, I need to see the shopping cart with the number of products added in the Swag Labs ordering platform so that I can to know the status of the same

## Acceptance Criterias 8
Ensure the Swag Labs standard_user are able to:
1. Log in to Swag Labs
2. Navigate in the Products page
3. Able to see the shopping cart with the number of products added
4. Navigate into the Products details page
5. Able to see the shopping cart with the number of products added
6. Navigate into the shopping cart
7. Able to see the shopping cart with the number of products added

## User Story 9
As a Swag Labs standard_user, I need to see all the product added to the shopping cart in the Swag Labs ordering platform so that I can to know what I am going to buy

## Acceptance Criterias 9
Ensure the Swag Labs standard_user are able to:
1. Log in to Swag Labs
2. Navigate into the shopping cart
3. Able to see all the products information what I am going to buy (qty, name, description, price)

## User Story 10
As a Swag Labs standard_user, I need to buy all the product added to the shopping cart in the Swag Labs ordering platform

## Acceptance Criterias 10
Ensure the Swag Labs standard_user are able to:
1. Log in to Swag Labs
2. Navigate into the shopping cart
3. Able to Checkout
4. Able to complete a form with my personal data
5. Able to see an overview about my order (qty, name, description, unit price, payment information, shipping information, item total price, tax, total price)
6. Able to see a confirmation page

## Test Cases

### User Story 1: Log in/Log out with the 4 user types

As a **Swag Labs admin**, I need to be able to log in and log out from the platform with the 4 different user types to ensure that all roles have the proper functionality to log in and log out.

---

### Test Case 1: Log in/Log out with `standard_user`
- **Objective**: Ensure that `standard_user` can log in and log out successfully.
- **Preconditions**: The user should have valid credentials for `standard_user`.
- **Steps**:
  1. Navigate to the Swag Labs login page.
  2. Enter the credentials for `standard_user`.
  3. Click the **Login** button.
  4. Verify that the main Swag Labs page loads correctly (e.g., product listings should appear).
  5. Click the **Logout** button.
  6. Verify that the user is redirected to the login page.
- **Expected Outcome**:
  - The user is able to log in and log out without any issues.
  - After logout, the user should be redirected to the login screen.

---

### Test Case 2: Log in attempt with `locked_out_user`
- **Objective**: Ensure that `locked_out_user` cannot log in and receives an appropriate error.
- **Preconditions**: The user should have the credentials for `locked_out_user` (this user should be locked).
- **Steps**:
  1. Navigate to the Swag Labs login page.
  2. Enter the credentials for `locked_out_user`.
  3. Click the **Login** button.
  4. Verify that an error message is displayed indicating that the account is locked.
- **Expected Outcome**:
  - The login attempt should fail.
  - The user should see an error message such as **"Sorry, this user has been locked out."** or a similar message indicating the account is locked.

---

### Test Case 3: Log in/Log out with `problem_user`
- **Objective**: Ensure that `problem_user` can log in and log out successfully, but with potential visual issues.
- **Preconditions**: The user should have valid credentials for `problem_user`.
- **Steps**:
  1. Navigate to the Swag Labs login page.
  2. Enter the credentials for `problem_user`.
  3. Click the **Login** button.
  4. Verify that the main Swag Labs page loads, but some product images might be broken or missing (i.e., the "problem" aspect of the user).
  5. Click the **Logout** button.
  6. Verify that the user is redirected to the login page.
- **Expected Outcome**:
  - The user can log in and log out.
  - The main page loads but with some visual glitches (e.g., broken product images).
  - After logout, the user is redirected to the login page.

---

### Test Case 4: Log in/Log out with `performance_glitch_user`
- **Objective**: Ensure that `performance_glitch_user` can log in and log out successfully, but experience some lag.
- **Preconditions**: The user should have valid credentials for `performance_glitch_user`.
- **Steps**:
  1. Navigate to the Swag Labs login page.
  2. Enter the credentials for `performance_glitch_user`.
  3. Click the **Login** button.
  4. Verify that the main Swag Labs page loads, but there is noticeable performance lag or delay in rendering products.
  5. Click the **Logout** button.
  6. Verify that the user is redirected to the login page.
- **Expected Outcome**:
  - The user can log in and log out.
  - The page loading may experience delays due to the performance glitch, but ultimately, it should load.
  - After logout, the user is redirected to the login page.

# User Story 2: Product Details View for Standard User

## User Story
As a Swag Labs standard_user, I need to open the products detail page in the Swag Labs ordering platform so that get more information about the products

### 1. Log in to Swag Labs
**Test Implementation:**
- Feature File: `login.feature`
- Step Definition: `LoginPage.login('standard_user', 'secret_sauce')`
- Verification:
  - Successful authentication
  - Redirect to Products page
  - User session established

### 2. Navigate in the Products Page
**Test Implementation:**
- Feature File: `product-details.feature`
- Page Object: `ProductsPage`
- Verification Steps:
  - Products list is visible
  - Page title shows "Products"
  - Product tiles are displayed
  - Able to interact with product items

### 3. Access Products Details View
**Test Implementation:**
- Feature File: `product-details.feature`
- Page Object: `ProductDetailsPage`
- Verification Steps:
  - Click on product name/image
  - Navigate to detailed product view
  - URL changes to `/inventory-item.html`
  - Display product-specific information
    - Product name
    - Product description
    - Product price
    - Product image

# User Story 3: Add Products to Cart

### Description:
As a **Swag Labs standard_user**, I need to add products to cart in the Swag Labs ordering platform so that I can buy them.

### Acceptance Criteria:
1. Ensure Swag Labs standard_user is able to:
   - Log in to Swag Labs
   - Navigate to the Products page
   - Add product(s) to cart from the Products page
   - Navigate to individual Product details page
   - Add product(s) to cart from the Product details page

# Swag Labs Cypress Testing Project

## Test Cases

### Login Scenarios
1. Successful login with standard user
   - Input valid username and password
   - Verify redirect to Products page
2. Failed login attempts
   - Attempt login with invalid credentials
   - Verify error message display

### Products Page Test Cases
1. Product Listing Verification
   - Verify all products are displayed
   - Check product details (name, price, image)

2. Add to Cart Functionality
   - Add single product to cart
   - Add multiple products to cart
   - Verify cart icon updates correctly
   - Confirm products added match selection

### Product Details Page Test Cases
1. Navigation
   - Click on product to view details
   - Verify correct product details displayed
   - Check "Back to Products" functionality

2. Add to Cart from Details Page
   - Add product to cart from details view
   - Verify cart icon updates
   - Check correct product added

### Cart Interaction Test Cases
1. Cart Contents
   - Verify correct products in cart
   - Check product quantities
   - Validate cart icon shows correct item count

2. Remove Products
   - Remove single product from cart
   - Remove multiple products
   - Verify cart updates correctly

# User Story 4: Remove Products from Cart

### Description:
As a **Swag Labs standard_user**, I need to review and remove previously added products in the Swag Labs ordering platform.

### Acceptance Criteria:
1. Ensure Swag Labs standard_user is able to:
   - Log in to Swag Labs
   - Navigate to the Products page
   - Add product(s) to cart
   - Remove product(s) from the Products page
   - Navigate to individual Product details page
   - Remove product(s) from the Product details page
   - Navigate to the Shopping Cart
   - Remove product(s) from the Shopping Cart

## Test Cases

### Products Page Test Scenarios
1. **Product Removal Functionality**
   - Verify "Remove" button works for single product
   - Verify "Remove" button works for multiple products
   - Confirm cart icon updates immediately after product removal
   - Validate removed product disappears from Products page

2. **Cart Interaction Scenarios**
   - Add multiple products to cart
   - Remove subset of added products
   - Verify remaining products stay in cart
   - Check cart badge reflects correct item count

### Product Details Page Test Scenarios
1. **Product Details Removal**
   - Navigate to product details page
   - Add product to cart from details page
   - Remove product from details page
   - Verify cart icon updates correctly

2. **Navigation and Removal**
   - Verify return to Products page after removal
   - Confirm product removal does not affect other cart items

### Shopping Cart Test Scenarios
1. **Cart Management**
   - Navigate to Shopping Cart
   - Remove single product from cart
   - Remove multiple products from cart
   - Verify total price updates after removal
   - Confirm empty cart state

2. **Edge Cases**
   - Attempt to remove product from empty cart
   - Verify behavior after removing all products
   - Check cart continues to function after complete product removal

### Error Handling
1. **Cart Removal Scenarios**
   - Verify no errors occur during product removal
   - Validate consistent UI state after removal
   - Ensure smooth transition between cart states

## User Story 5
As a Swag Labs standard_user, I need to sort products in the Swag Labs ordering platform so that I can find what I'm looking for easily

## Acceptance Criterias 5
Ensure the Swag Labs standard_user are able to:
1. Log in to Swag Labs
2. Navigate in the Products page
3. Able to sort product(s) in different ways

# Test Cases

## Product Sorting Functionality
Testing the ability of a standard_user to sort products in different ways on the Swag Labs platform.

### Test Scenarios

#### 1. Login Authentication
**Objective**: Verify successful login with standard_user credentials
- **Precondition**: User is on the login page
- **Steps**:
  1. Enter username "standard_user"
  2. Enter password "secret_sauce"
  3. Click login button
- **Expected Result**: User is successfully redirected to the Products page

#### 2. Product Sorting Options
**Objective**: Verify all sorting options work correctly
- **Precondition**: User is logged in and on the Products page
- **Test Cases**:

  2.1 Sort by Name (A to Z)
  - **Steps**:
    1. Click on sort dropdown
    2. Select "Name (A to Z)"
  - **Expected Result**: Products are displayed in alphabetical order (A to Z)
  - **Verification**: Compare product names to ensure ascending alphabetical order

  2.2 Sort by Name (Z to A)
  - **Steps**:
    1. Click on sort dropdown
    2. Select "Name (Z to A)"
  - **Expected Result**: Products are displayed in reverse alphabetical order (Z to A)
  - **Verification**: Compare product names to ensure descending alphabetical order

  2.3 Sort by Price (low to high)
  - **Steps**:
    1. Click on sort dropdown
    2. Select "Price (low to high)"
  - **Expected Result**: Products are displayed in ascending price order
  - **Verification**: Compare product prices to ensure ascending numerical order

  2.4 Sort by Price (high to low)
  - **Steps**:
    1. Click on sort dropdown
    2. Select "Price (high to low)"
  - **Expected Result**: Products are displayed in descending price order
  - **Verification**: Compare product prices to ensure descending numerical order

## User Story 6
As a Swag Labs standard_user, I need to reset the app status in the Swag Labs ordering platform so that I can reset the app to its initial settings

## Acceptance Criterias 6
Ensure the Swag Labs standard_user are able to:
1. Log in to Swag Labs
2. Navigate in the menu page
3. Able to reset app state

# Test Cases

## App Reset Functionality
Testing the ability of a standard_user to reset the application state in the Swag Labs platform.

### Test Scenarios

#### 1. Access Reset Functionality
**Objective**: Verify user can access the reset functionality through the menu
- **Precondition**: User is logged in
- **Steps**:
  1. Click on the burger menu button
  2. Verify menu opens successfully
  3. Verify "Reset App State" option is visible
- **Expected Result**: Reset option is accessible in the menu

#### 2. Reset App State
**Objective**: Verify complete app state reset functionality
- **Precondition**: 
  - User is logged in
  - At least one item is in the cart
  - Some items have "Remove" button showing
- **Test Cases**:

  2.1 Full Reset Verification
  - **Steps**:
    1. Click burger menu button
    2. Click "Reset App State"
    3. Verify cart is empty
    4. Verify all items show "Add to Cart"
    5. Verify menu closes automatically
  - **Expected Result**: All application state returns to default

  2.2 Cart Status After Reset
  - **Steps**:
    1. Add items to cart
    2. Perform reset
    3. Check cart badge
  - **Expected Result**: Cart badge should disappear

  2.3 Product Buttons After Reset
  - **Steps**:
    1. Add several items to cart
    2. Perform reset
    3. Check all product buttons
  - **Expected Result**: All products should show "Add to Cart" button

#### 3. Reset Persistence
**Objective**: Verify reset changes persist
- **Steps**:
  1. Perform reset
  2. Refresh page
  3. Verify reset state maintains
- **Expected Result**: Reset changes should persist after page refresh

## User Story 7
As a Swag Labs standard_user, I need to see the product information in the product page and product details page in the Swag Labs ordering platform so that I can know what I'm buying

## Acceptance Criterias 7
Ensure the Swag Labs standard_user are able to:
1. Log in to Swag Labs
2. Navigate in the Products page
3. Able to see all the product information (image, title, description, price)
4. Navigate into the Products details page
5. Able to see all the product information (image, title, description, price)

# Test Cases

## Product Information Display Functionality
Testing the ability of a standard_user to view product information in both the Products page and Product Details page of the Swag Labs platform.

### Test Scenarios

#### 1. Products Page Information Display
**Objective**: Verify standard_user can view all product information on the main Products page
- **Precondition**: User is successfully logged in
- **Steps**:
  1. Log in with standard_user credentials
  2. Verify redirect to Products page
  3. Verify presence of all product elements
  4. Check product information completeness
- **Expected Result**: All product information is visible and complete on Products page

#### 2. Product Information Completeness
**Objective**: Verify all required product information is displayed correctly
- **Precondition**: User is on Products page
- **Test Cases**:

  2.1 Product Image Verification
  - **Steps**:
    1. Check each product image is visible
    2. Verify images load properly
    3. Confirm image quality is acceptable
  - **Expected Result**: All product images are properly displayed

  2.2 Product Text Information
  - **Steps**:
    1. Verify product titles are visible
    2. Check product descriptions are readable
    3. Confirm price displays with currency symbol
  - **Expected Result**: All text information is clear and properly formatted

#### 3. Product Details Page Navigation
**Objective**: Verify navigation and information display in Product Details page
- **Precondition**: User is on Products page
- **Test Cases**:

  3.1 Details Page Navigation
  - **Steps**:
    1. Click on a product title
    2. Verify navigation to details page
    3. Check URL changes appropriately
  - **Expected Result**: Successful navigation to Product Details page

  3.2 Details Page Information
  - **Steps**:
    1. Verify detailed product image
    2. Check product title presence
    3. Verify complete description
    4. Confirm price accuracy
  - **Expected Result**: All product details are displayed correctly

#### 4. Information Consistency
**Objective**: Verify product information consistency across pages
- **Steps**:
  1. Note product information on Products page
  2. Navigate to Product Details page
  3. Compare information between pages
  4. Check for any discrepancies
- **Expected Result**: Product information should be consistent between list and detail views

#### 5. UI/UX Verification
**Objective**: Verify product information display on different devices
- **Test Cases**:

  5.1 Responsive Design
  - **Steps**:
    1. Check display on desktop view
    2. Verify mobile view rendering
    3. Test tablet view display
  - **Expected Result**: Product information should be readable on all devices

  5.2 Image Scaling
  - **Steps**:
    1. Verify image scaling on different screens
    2. Check image quality after scaling
    3. Confirm image positioning
  - **Expected Result**: Images should scale appropriately while maintaining quality

## User Story 8
As a Swag Labs standard_user, I need to see the shopping cart with the number of products added in the Swag Labs ordering platform so that I can to know the status of the same

## Acceptance Criterias 8
Ensure the Swag Labs standard_user are able to:
1. Log in to Swag Labs
2. Navigate in the Products page
3. Able to see the shopping cart with the number of products added
4. Navigate into the Products details page
5. Able to see the shopping cart with the number of products added
6. Navigate into the shopping cart
7. Able to see the shopping cart with the number of products added

# Test Cases

## Product Information Display Functionality
Testing the ability of a standard_user to view product information in both the Products page and Product Details page of the Swag Labs platform.

### Test Scenarios

#### 1. Products Page Information Display
**Objective**: Verify standard_user can view all product information on the main Products page
- **Precondition**: User is successfully logged in
- **Steps**:
  1. Log in with standard_user credentials
  2. Verify redirect to Products page
  3. Verify presence of all product elements
  4. Check product information completeness
- **Expected Result**: All product information is visible and complete on Products page

#### 2. Product Information Completeness
**Objective**: Verify all required product information is displayed correctly
- **Precondition**: User is on Products page
- **Test Cases**:

  2.1 Product Image Verification
  - **Steps**:
    1. Check each product image is visible
    2. Verify images load properly
    3. Confirm image quality is acceptable
  - **Expected Result**: All product images are properly displayed

  2.2 Product Text Information
  - **Steps**:
    1. Verify product titles are visible
    2. Check product descriptions are readable
    3. Confirm price displays with currency symbol
  - **Expected Result**: All text information is clear and properly formatted

#### 3. Product Details Page Navigation
**Objective**: Verify navigation and information display in Product Details page
- **Precondition**: User is on Products page
- **Test Cases**:

  3.1 Details Page Navigation
  - **Steps**:
    1. Click on a product title
    2. Verify navigation to details page
    3. Check URL changes appropriately
  - **Expected Result**: Successful navigation to Product Details page

  3.2 Details Page Information
  - **Steps**:
    1. Verify detailed product image
    2. Check product title presence
    3. Verify complete description
    4. Confirm price accuracy
  - **Expected Result**: All product details are displayed correctly

#### 4. Information Consistency
**Objective**: Verify product information consistency across pages
- **Steps**:
  1. Note product information on Products page
  2. Navigate to Product Details page
  3. Compare information between pages
  4. Check for any discrepancies
- **Expected Result**: Product information should be consistent between list and detail views

#### 5. UI/UX Verification
**Objective**: Verify product information display on different devices
- **Test Cases**:

  5.1 Responsive Design
  - **Steps**:
    1. Check display on desktop view
    2. Verify mobile view rendering
    3. Test tablet view display
  - **Expected Result**: Product information should be readable on all devices

  5.2 Image Scaling
  - **Steps**:
    1. Verify image scaling on different screens
    2. Check image quality after scaling
    3. Confirm image positioning
  - **Expected Result**: Images should scale appropriately while maintaining quality

## User Story 9
As a Swag Labs standard_user, I need to see all the product added to the shopping cart in the Swag Labs ordering platform so that I can to know what I am going to buy

## Acceptance Criterias 9
Ensure the Swag Labs standard_user are able to:
1. Log in to Swag Labs
2. Navigate into the shopping cart
3. Able to see all the products information what I am going to buy (qty, name, description, price)

# Test Cases

## Shopping Cart Contents Display Functionality
Testing the ability of a standard_user to view complete product information in the Shopping Cart of the Swag Labs platform.

### Test Scenarios

#### 1. Shopping Cart Access and Display
**Objective**: Verify access to shopping cart and initial display
- **Precondition**: User is logged in as standard_user
- **Test Cases**:

  1.1 Cart Access Verification
  - **Steps**:
    1. Log in with standard_user credentials
    2. Click on shopping cart icon
    3. Verify navigation to cart page
  - **Expected Result**: Shopping cart page loads with correct URL

  1.2 Empty Cart Display
  - **Steps**:
    1. Access empty shopping cart
    2. Verify empty cart message
    3. Check cart layout
  - **Expected Result**: Empty cart state should be properly displayed

#### 2. Product Information Display
**Objective**: Verify complete product information display in cart
- **Test Cases**:

  2.1 Single Product Information
  - **Steps**:
    1. Add one product to cart
    2. Navigate to cart
    3. Verify product quantity display
    4. Check product name presence
    5. Validate product description
    6. Confirm price display
  - **Expected Result**: All product details should be correctly displayed

  2.2 Multiple Products Information
  - **Steps**:
    1. Add multiple products to cart
    2. Navigate to cart
    3. Verify each product's complete information
    4. Check individual quantities
  - **Expected Result**: All products should show complete information

#### 3. Information Accuracy
**Objective**: Verify cart information matches product page
- **Test Cases**:

  3.1 Product Details Consistency
  - **Steps**:
    1. Note product details on product page
    2. Add product to cart
    3. Compare details in cart
    4. Verify name matches
    5. Confirm description is identical
    6. Check price consistency
  - **Expected Result**: Cart information should match product page exactly

#### 4. Quantity Verification
**Objective**: Verify quantity display and management
- **Test Cases**:

  4.1 Single Item Quantity
  - **Steps**:
    1. Add one unit of a product
    2. Verify quantity shows as "1"
    3. Check quantity display format
  - **Expected Result**: Quantity should be clearly displayed

  4.2 Multiple Items Management
  - **Steps**:
    1. Add multiple units of different products
    2. Verify individual quantity displays
    3. Check total items count
  - **Expected Result**: Each product should show correct quantity

#### 5. UI/UX Elements
**Objective**: Verify cart display across different devices
- **Test Cases**:

  5.1 Cart Responsiveness
  - **Steps**:
    1. View cart on desktop
    2. Check mobile display
    3. Verify tablet layout
  - **Expected Result**: Cart should be readable on all devices

  5.2 Information Layout
  - **Steps**:
    1. Verify product image visibility
    2. Check text alignment
    3. Validate price formatting
  - **Expected Result**: Information should be well-organized and readable

# How to Run the Tests
Section where the necessary instructions to run the tests will be added

  ### Prerequisites
  - Node.js installed
  - Yarn installed

  ### Install Dependencies
  ```bash
  yarn install
  ```

  ### Run Tests

  #### Run All Login Tests
  ```bash
  npx cypress run --spec "cypress/e2e/**/*.feature"
  ```


  ### Open Cypress Test Runner
  ```bash
  yarn cypress:open
  ```

# Git Commands
Section to add the git commands used during the challenge
# Git Commands Reference

## Basic Git Workflow

### Cloning the Repository
```bash
git clone [repository-url]
```

### Creating a New Branch
```bash
git checkout -b feature/branch-name
```

### Checking Branch Status
```bash
git status
```

### Adding Changes
```bash
# Add specific files
git add filename.js

# Add all changed files
git add .
```

### Committing Changes
```bash
# Commit with a descriptive message
git commit -m "Description of changes"
```

### Pushing Changes
```bash
# Push to current branch
git push origin HEAD

# Push to a specific branch
git push origin feature/branch-name
```

### Pulling Latest Changes
```bash
# Pull from current branch
git pull origin

# Pull from a specific branch
git pull origin main
```

## Branch Management

### List Branches
```bash
# Local branches
git branch

# All branches (local and remote)
git branch -a
```

### Switch Branches
```bash
git checkout branch-name
```

### Create and Switch to New Branch
```bash
git checkout -b new-branch-name
```

## Merging and Updating

### Merge Branches
```bash
# Merge another branch into current branch
git merge branch-name
```

### Fetch Latest Changes
```bash
git fetch origin
```

## Resolving Conflicts

### Discard Local Changes
```bash
# Discard changes in a specific file
git checkout -- filename.js

# Discard all local changes
git reset --hard HEAD
```

## Advanced Operations

### View Commit History
```bash
# Basic log
git log

# Detailed log with changes
git log -p

# Oneline log
git log --oneline
```

### Stash Changes
```bash
# Stash current changes
git stash

# Apply last stashed changes
git stash pop
```

# Problems
Section to write down problems you have encountered during the challenge
# Authentication Login Problems

## Common Login Issues in Swag Labs

### 1. Locked Out User Scenario
**Problem:** Some users encounter complete login lockout
- Specific user: `locked_out_user`
- Symptom: Unable to authenticate despite correct credentials
- Potential Causes:
  - Account intentionally disabled
  - Security mechanism preventing access
  - Repeated failed login attempts

### 2. Performance Glitch during Authentication
**Problem:** Significant delay in login process
- Specific user: `performance_glitch_user`
- Symptoms:
  - Extended loading times
  - Potential timeout errors
  - Slow page rendering after login

### 3. Problem User Authentication Inconsistencies
**Problem:** Unexpected behavior during login
- Specific user: `problem_user`
- Potential Issues:
  - Intermittent login success/failure
  - Unexpected UI rendering
  - Potential data inconsistencies post-login

### 4. Standard Authentication Challenges
**Problem:** Potential standard login complications
- User: `standard_user`
- Possible Scenarios:
  - Credential validation errors
  - Session management issues
  - Browser compatibility problems

## Recommended Troubleshooting Steps

### Credential Verification
- Double-check username and password
- Ensure no hidden whitespace characters
- Verify case sensitivity

### Network and Environment Checks
- Confirm stable internet connection
- Clear browser cache and cookies
- Test login across different browsers
- Verify no network restrictions

### Error Handling Strategies
- Implement robust error logging
- Create comprehensive error messages
- Design fallback authentication mechanisms

## Potential Root Causes
- Backend authentication service instability
- Misconfigured user role permissions
- Caching mechanisms interfering with login process
- Browser-specific rendering issues

## Mitigation Recommendations
- Implement comprehensive error handling
- Create detailed login failure logs
- Design user-friendly error messages
- Develop retry mechanisms for intermittent failures
