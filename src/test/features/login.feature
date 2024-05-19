Feature: Login Functionality

  Background:
    Given User navigates to the saucedemo website

  Scenario Outline: Login with Valid Credentials
    And User enter the username as "<username>"
    And User enter the password as "Valid Password"
    When User click on the login button
    Then Login should be success

    Examples:
    |username|
    |standard_user|
    |locked_out_user|
    |problem_user|
    |performance_glitch_user|
    |error_user|
    |visual_user|