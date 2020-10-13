$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cucumberTable.feature");
formatter.feature({
  "line": 1,
  "name": "cucumberTable",
  "description": "",
  "id": "cucumbertable",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login to the demo site using a table",
  "description": "",
  "id": "cucumbertable;login-to-the-demo-site-using-a-table",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "We have access to the demo site website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Can create a user using \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I use the \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" credentials to login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I verify the \u003cstatus\u003e it works",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "cucumbertable;login-to-the-demo-site-using-a-table;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10,
      "id": "cucumbertable;login-to-the-demo-site-using-a-table;;1"
    },
    {
      "cells": [
        "guest",
        "guest"
      ],
      "line": 11,
      "id": "cucumbertable;login-to-the-demo-site-using-a-table;;2"
    },
    {
      "cells": [
        "guest2",
        "guest2"
      ],
      "line": 12,
      "id": "cucumbertable;login-to-the-demo-site-using-a-table;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4668592600,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Login to the demo site using a table",
  "description": "",
  "id": "cucumbertable;login-to-the-demo-site-using-a-table;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "We have access to the demo site website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Can create a user using \"guest\" and \"guest\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I use the \"guest\" and \"guest\" credentials to login",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I verify the \u003cstatus\u003e it works",
  "keyword": "Then "
});
formatter.match({
  "location": "CucumberTableStepDefs.we_have_access_to_the_demo_site_website()"
});
formatter.result({
  "duration": 2019347600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "guest",
      "offset": 25
    },
    {
      "val": "guest",
      "offset": 37
    }
  ],
  "location": "CucumberTableStepDefs.can_create_a_user_using_and(String,String)"
});
formatter.result({
  "duration": 5560162400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "guest",
      "offset": 11
    },
    {
      "val": "guest",
      "offset": 23
    }
  ],
  "location": "CucumberTableStepDefs.i_use_the_and_credentials_to_login(String,String)"
});
formatter.result({
  "duration": 7533708400,
  "status": "passed"
});
formatter.match({
  "location": "CucumberTableStepDefs.i_verify_the_status_it_works()"
});
formatter.result({
  "duration": 49300,
  "status": "passed"
});
formatter.before({
  "duration": 3230499100,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Login to the demo site using a table",
  "description": "",
  "id": "cucumbertable;login-to-the-demo-site-using-a-table;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "We have access to the demo site website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Can create a user using \"guest2\" and \"guest2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I use the \"guest2\" and \"guest2\" credentials to login",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I verify the \u003cstatus\u003e it works",
  "keyword": "Then "
});
formatter.match({
  "location": "CucumberTableStepDefs.we_have_access_to_the_demo_site_website()"
});
formatter.result({
  "duration": 1920742800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "guest2",
      "offset": 25
    },
    {
      "val": "guest2",
      "offset": 38
    }
  ],
  "location": "CucumberTableStepDefs.can_create_a_user_using_and(String,String)"
});
formatter.result({
  "duration": 5392421400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "guest2",
      "offset": 11
    },
    {
      "val": "guest2",
      "offset": 24
    }
  ],
  "location": "CucumberTableStepDefs.i_use_the_and_credentials_to_login(String,String)"
});
formatter.result({
  "duration": 8755529600,
  "status": "passed"
});
formatter.match({
  "location": "CucumberTableStepDefs.i_verify_the_status_it_works()"
});
formatter.result({
  "duration": 19900,
  "status": "passed"
});
});