Feature: Login
  As a user, I want to be able to login with username and password.

  @sales_manager
  Scenario: Login as Sales Manager and verify Title is Dashboard
    Given user is on the landing page
    When  user logged in as a sales manager
    Then user should verify title is a dashboard

  @store_manager
  Scenario: Login as Store Manager and verify Title is Dashboard
    Given user is on the landing page
    When  user logged in as a store manager
    Then user should verify title is a dashboard


  @driver
  Scenario: Login as driver and verify Title is Dashboard
    Given user is on the landing page
    When  user logged in as a driver
    Then user should verify title is a dashboard
