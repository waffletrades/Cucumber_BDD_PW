import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from "@playwright/test";
import { pageFixture  } from "../../hooks/pageFixture";


setDefaultTimeout(60 * 1000 * 2); //2 mins

Given('User navigates to the saucedemo website', async function (){
    await pageFixture.page.goto("https://www.saucedemo.com/");
  });
  
  Given('User enter the username as {string}', async function (username){
    await pageFixture.page.locator("xpath=//*[@id='user-name']").fill(username);

  });

  Given('User enter the password as {string}', async function (password){
    await pageFixture.page.locator("xpath=//*[@id='password']").fill("secret_sauce");

  });

  When('User click on the login button', async function(){
    await pageFixture.page.locator("xpath=//*[@id='login-button']").click();
    await pageFixture.page.waitForLoadState();
    await pageFixture.page.waitForTimeout(2000); //2 secs
  
  });


Then('Login should be success',async function () {

     // Get the URL after navigation
     const url = await pageFixture.page.url(); 
  
     // Check if the URL matches the expected products page URL
     expect(url).toBe('https://www.saucedemo.com/inventory.html');
  
      // Navigate back to the login page
      await pageFixture.page.goto("https://www.saucedemo.com/");
    });