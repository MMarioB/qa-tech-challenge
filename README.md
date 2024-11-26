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
