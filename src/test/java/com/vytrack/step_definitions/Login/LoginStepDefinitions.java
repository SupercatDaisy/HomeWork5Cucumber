package com.vytrack.step_definitions.Login;

import com.vytrack.pages.LoginPage;
import com.vytrack.utilities.BrowserUtilities;
import com.vytrack.utilities.ConfigurationReader;
import com.vytrack.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.support.ui.WebDriverWait;

public class LoginStepDefinitions {

    LoginPage loginPage = new LoginPage();
    WebDriverWait wait = new WebDriverWait(Driver.getDriver(), 10);

    @Given("user is on the landing page")
    public void user_is_on_the_landing_page() {
        String URL = ConfigurationReader.getProperty("qa3");
        Driver.getDriver().get(URL);
    }


    @Given("user logged in as a {string}")
    public void user_logged_in_as_a(String username) {
        loginPage.login(username);
    }

    @Then("user verify {string} is displayed")
    public void user_verify_is_displayed(String title) {

        Assert.assertEquals(title, Driver.getDriver().getTitle());

    }

}


