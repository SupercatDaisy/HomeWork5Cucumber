$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "  As a user, I want to be able to login with username and password.",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login as Sales Manager and verify Title is Dashboard",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sales_manager"
    }
  ]
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
  "name": "user logged in as a sales manager",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.Login.LoginStepDefinitions.user_logged_in_as_a_sales_manager()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify title is a dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.Login.LoginStepDefinitions.user_should_verify_title_is_a_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login as Store Manager and verify Title is Dashboard",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@store_manager"
    }
  ]
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
  "name": "user should verify title is a dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.Login.LoginStepDefinitions.user_should_verify_title_is_a_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login as driver and verify Title is Dashboard",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@driver"
    }
  ]
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
  "name": "user logged in as a driver",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.Login.LoginStepDefinitions.user_logged_in_as_a_driver()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify title is a dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.Login.LoginStepDefinitions.user_should_verify_title_is_a_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});