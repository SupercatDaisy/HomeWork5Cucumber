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
  "name": "Login as store manager and verify options are available",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test1"
    }
  ]
});
formatter.step({
  "name": "user hover on three dots",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.Activities.CalendarStepDefinitions.user_hover_on_three_dots()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify view, edit and delete options are available",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.Activities.CalendarStepDefinitions.user_verify_view_edit_and_delete_options_are_available()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});