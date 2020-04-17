$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/CalendarEvent.feature");
formatter.feature({
  "name": "HomeWork5",
  "description": "  I want to login as a store manager and do my test cases",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.Login.LoginStepDefinitions.user_is_on_the_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logged in as a store manager",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.Login.LoginStepDefinitions.user_logged_in_as_a_store_manager()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to Activities then Calendar Events",
  "keyword": "And "
});
formatter.match({
  "location": "com.vytrack.step_definitions.Activities.CalendarStepDefinitions.user_navigate_to_Activities_then_Calendar_Events()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login as store manager and click on Create Calendar EventVerify that following message as a summary is displayed: “Summary: Weekly every 1 week on Monday, Friday”",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test12"
    }
  ]
});
formatter.step({
  "name": "user click on Create Calendar Event Button",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.Activities.CalendarStepDefinitions.user_click_on_Create_Calendar_Event_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select Repeat checkbox",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.Activities.CalendarStepDefinitions.user_select_Repeat_checkbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select Weekly option as Repeat option",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.Activities.CalendarStepDefinitions.user_select_Weekly_option_as_Repeat_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select Monday and Friday options as a Repeat on Options",
  "keyword": "And "
});
formatter.match({
  "location": "com.vytrack.step_definitions.Activities.CalendarStepDefinitions.user_select_Monday_and_Friday_options_as_a_Repeat_on_Options()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify that Monday and Friday options are selected",
  "keyword": "And "
});
formatter.match({
  "location": "com.vytrack.step_definitions.Activities.CalendarStepDefinitions.user_verify_that_Monday_and_Friday_options_are_selected()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that following message as a summary is displayed: Summary: Weekly every 1 week on Monday, Friday",
  "keyword": "And "
});
formatter.match({
  "location": "com.vytrack.step_definitions.Activities.CalendarStepDefinitions.verify_that_following_message_as_a_summary_is_displayed_Summary_Weekly_every_week_on_Monday_Friday(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});