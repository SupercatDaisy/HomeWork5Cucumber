$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "  As a user, I want to be able to login with username and password.",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Login as \u003cusername\u003e",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@deneme"
    }
  ]
});
formatter.step({
  "name": "user logged in as a \"\u003cusername\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user verify \"\u003ctitle\u003e\" is displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "title"
      ]
    },
    {
      "cells": [
        "Sales Manager",
        "Dashboard"
      ]
    },
    {
      "cells": [
        "Store Manager",
        "Dashboard"
      ]
    },
    {
      "cells": [
        "Driver",
        "Dashboard"
      ]
    }
  ]
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
formatter.scenario({
  "name": "Login as Sales Manager",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@deneme"
    }
  ]
});
formatter.step({
  "name": "user logged in as a \"Sales Manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.Login.LoginStepDefinitions.user_logged_in_as_a(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify \"Dashboard\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.Login.LoginStepDefinitions.user_verify_is_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
formatter.scenario({
  "name": "Login as Store Manager",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@deneme"
    }
  ]
});
formatter.step({
  "name": "user logged in as a \"Store Manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.Login.LoginStepDefinitions.user_logged_in_as_a(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify \"Dashboard\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.Login.LoginStepDefinitions.user_verify_is_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
formatter.scenario({
  "name": "Login as Driver",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@deneme"
    }
  ]
});
formatter.step({
  "name": "user logged in as a \"Driver\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.Login.LoginStepDefinitions.user_logged_in_as_a(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify \"Dashboard\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.Login.LoginStepDefinitions.user_verify_is_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});