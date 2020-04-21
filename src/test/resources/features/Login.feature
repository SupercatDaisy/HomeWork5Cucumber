
@Login
Feature: Login
  As a user, I want to be able to login with username and password.


  Background:
    Given user is on the landing page

    @deneme
    Scenario Outline: Login as <username>
      Given user logged in as a "<username>"
      Then user verify "<title>" is displayed
      Examples:
      |username     |title|
      |Sales Manager|Dashboard|
      |Store Manager|Dashboard|
      |Driver       |Dashboard|






