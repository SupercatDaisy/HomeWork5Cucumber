Feature: HomeWork5
  I want to login as a store manager and do my test cases

  Background:
    Given user is on the landing page
    When user logged in as a store manager
    And user navigate to Activities then Calendar Events


  @Test1
  Scenario: Login as store manager and verify options are available
    Given user hover on three dots
    Then user verify view, edit and delete options are available

  @Test2
  Scenario: Login as store manager and verify Title is displayed
    Given user click on Grid Options button
    When user deselect all options except Title
    Then user verify that Title column still displayed

  @Test3
  Scenario: Login as store manager and verify that all Save Options are available
    Given user click on Create Calendar Event Button
    When user expand Save and Close menu
    Then user verify that all Save options are available

  @Test4
  Scenario: Login as store manager and Click on Cancel then Verify All Calendar Events subtitle is displayed
    Given user click on Create Calendar Event Button
    When user click on Cancel button
    Then user verify that All Calendar Events page subtitle is displayed

  @Test5
  Scenario: Login as store manager and create Calendar Event then verify difference between end and start time
    Given user click on Create Calendar Event Button
    Then user verify that difference between end and start time is one hour

  @Test6
  Scenario: Login as store manager and click on Create Calendar then Select 9:00 PM and verify end time is 10:00 PM
    Given user click on Create Calendar Event Button
    When user select nine pm as start time
    Then user verify that end time is equals to ten pm

  @Test7
  Scenario: Login as store manager and click on Create Calendar Event Verify start and end date input are displayed
    Given user click on Create Calendar Event Button
    When user select All-Day Event checkbox
    Then user verify that All-Day Event checkbox is selected
    And user verify that start and end time input boxes are not displayed
    And user verify that start and end date input boxes are displayed

  @Test8
  Scenario: Login as store manager and click on Create Calendar Event Verify Options available in Repeat
    Given user click on Create Calendar Event Button
    When user select Repeat checkbox
    Then user verify that Repeat checkbox is selected
    And user verify that Daily is selected by default and Options are available in dropdown

  @Test9
  Scenario:Login as store manager and click on Create Calendar Event Verify that following message as a summary is displayed: “Summary: Daily every 1 day”
    Given user click on Create Calendar Event Button
    When user select Repeat checkbox
    Then user verify that Repeat Every radio button is selected
    And user verify that Never button is selected as an Ends Option
    And Verify that following message as a summary is displayed: Summary: Daily every 1 day


  @Test10
  Scenario: Login as store manager and click on Create Calendar Event Verify that following message as a summary is displayed: “Summary: Daily every 1 day, end after 10 occurrences
    Given user click on Create Calendar Event Button
    Then user select Repeat checkbox
    And user select After ten occurrences as an Ends option
    Then user verify that following message as a summary is displayed: Summary: Daily every 1 day, end after 10 occurrences

  @Test11
  Scenario:  Login as store manager and click on Create Calendar Event Verify that following message as a summary is displayed: Summary: Daily every 1 day, end by Nov 18, 2021
    Given user click on Create Calendar Event Button
    When user select Repeat checkbox
    Then user select By Nov 18, 2021 as an Ends option
    And Verify that following message as a summary is displayed: “Summary: Daily every 1 day, end by Nov 18, 2021”

  @Test12
  Scenario:  Login as store manager and click on Create Calendar EventVerify that following message as a summary is displayed: “Summary: Weekly every 1 week on Monday, Friday”
    Given user click on Create Calendar Event Button
    When user select Repeat checkbox
    Then user select Weekly option as Repeat option
    And user select Monday and Friday options as a Repeat on Options
    And user verify that Monday and Friday options are selected
    And Verify that following message as a summary is displayed: Summary: Weekly every 1 week on Monday, Friday