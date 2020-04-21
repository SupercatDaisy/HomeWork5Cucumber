package com.vytrack.step_definitions.Activities;

import com.vytrack.pages.Activities.CalendarEventPage;
import com.vytrack.utilities.DateTimeUtilities;
import com.vytrack.utilities.Driver;
import com.vytrack.utilities.Wait;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.cucumber.java.en_old.Ac;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class CalendarStepDefinitions extends CalendarEventPage {

    CalendarEventPage calendarEventPage = new CalendarEventPage();

    @When("user navigate to Activities then Calendar Events")
    public void user_navigate_to_Activities_then_Calendar_Events() {
        calendarEventPage.navigateTo("Activities", "Calendar Events");
    }

    @Given("user hover on three dots")
    public void user_hover_on_three_dots() {
        Actions actions = new Actions(Driver.getDriver());
        int random = (int) (Math.random() * (calendarEventPage.getThreeDots().size()));
        actions.moveToElement(calendarEventPage.getThreeDots().get(random)).build().perform();
    }


    @Then("user verify view, edit and delete options are available")
    public void user_verify_view_edit_and_delete_options_are_available() {
        for (WebElement each : calendarEventPage.getThreedotMenu()) {
            Assert.assertTrue(each.isDisplayed());
        }
    }


    @Given("user click on Grid Options button")
    public void user_click_on_Grid_Options_button() {
    calendarEventPage.ClickGridSettings();
    }

    @Then("user deselect all options except Title")
    public void user_deselect_all_options_except_Title() {
        for (int i = 1; i <calendarEventPage.GridSettingMenu().size() ; i++) {
            calendarEventPage.GridSettingMenu().get(i).click();
        }
    }

    @Then("user verify that Title column still displayed")
    public void user_verify_that_Title_column_still_displayed() {
        Assert.assertEquals("TITLE",calendarEventPage.getTitle());
    }



    @Given("user click on Create Calendar Event Button")
    public void user_click_on_Create_Calendar_Event_Button() {
      calendarEventPage.clickToCreateEvent();
    }

    @Then("user expand Save and Close menu")
    public void user_expand_Save_and_Close_menu() {
    calendarEventPage.clickOnSaveAndClose();
    }

    @Then("user verify that all Save options are available")
    public void user_verify_that_all_Save_options_are_available() {
        List<String> expected = new ArrayList<>(Arrays.asList("Save and Close","Save And New","Save"));
        for (int i = 0; i <expected.size() ; i++) {
            Assert.assertTrue(calendarEventPage.getSaveAndCloseOptions().get(i).equalsIgnoreCase(expected.get(i)));
        }
    }
    @Then("user click on Cancel button")
    public void user_click_on_Cancel_button() {
       calendarEventPage.clickCancel();
    }

    @Then("user verify that All Calendar Events page subtitle is displayed")
    public void user_verify_that_All_Calendar_Events_page_subtitle_is_displayed() {
        Wait.wait(2);
       Assert.assertEquals("All Calendar Events",calendarEventPage.getAllCalendarTitle());
    }

    @Then("user verify that difference between end and start time is one hour")
    public void user_verify_that_difference_between_end_and_start_time_is_one_hour() {
        Assert.assertEquals(DateTimeUtilities.getTimeDifference(calendarEventPage.getStartTime(), calendarEventPage.getEndTime(), "h:mm a"), 1);
    }

    @Then("user select nine pm as start time")
    public void user_select_nine_pm_as_start_time() {
    calendarEventPage.SelectTime();
    }

    @Then("user verify that end time is equals to ten pm")
    public void user_verify_that_end_time_is_equals_to_ten_pm() {
    Assert.assertEquals("10:00 PM",calendarEventPage.getEndTime());
    }

    @Then("user select All-Day Event checkbox")
    public void user_select_All_Day_Event_checkbox() {
        Wait.wait(2);
    calendarEventPage.clickAllDay();
    }

    @Then("user verify that All-Day Event checkbox is selected")
    public void user_verify_that_All_Day_Event_checkbox_is_selected() {
        Assert.assertTrue(calendarEventPage.getAllDayCheck().isSelected());
    }

    @Then("user verify that start and end time input boxes are not displayed")
    public void user_verify_that_start_and_end_time_input_boxes_are_not_displayed() {
        Wait.wait(2);
        Assert.assertFalse(calendarEventPage.getStart().isDisplayed());
        Assert.assertFalse(calendarEventPage.getEnd().isDisplayed());

    }

    @Then("user verify that start and end date input boxes are displayed")
    public void user_verify_that_start_and_end_date_input_boxes_are_displayed() {
        Assert.assertTrue(calendarEventPage.getStartDate2().isDisplayed());
        Assert.assertTrue(calendarEventPage.getEndDate2().isDisplayed());
    }

    @Then("user select Repeat checkbox")
    public void user_select_Repeat_checkbox() {
        calendarEventPage.clickRepeat();
    }

    @Then("user verify that Repeat checkbox is selected")
    public void user_verify_that_Repeat_checkbox_is_selected() {
        Assert.assertTrue(calendarEventPage.getRepeat().isSelected());
    }

    @Then("user verify that Daily is selected by default and Options are available in dropdown")
    public void user_verify_that_Daily_is_selected_by_default_and_Options_are_available_in_dropdown() {
        Assert.assertEquals(calendarEventPage.getDefaultRepeatOptions(),"Daily");
        List<String> expected = new ArrayList<>(Arrays.asList("Daily","Weekly","Monthly","Yearly"));
        for (int i = 0; i <expected.size() ; i++) {
            Assert.assertTrue(expected.get(i).equalsIgnoreCase(calendarEventPage.getAllRepeatOptions().get(i)));
        }
    }
    @Then("user verify that Repeat Every radio button is selected")
    public void user_verify_that_Repeat_Every_radio_button_is_selected() {
        Assert.assertTrue(calendarEventPage.getRepeatEveryRadio().isSelected());
    }

    @Then("user verify that Never button is selected as an Ends Option")
    public void user_verify_that_Never_button_is_selected_as_an_Ends_Option() {
        Assert.assertTrue(calendarEventPage.getRepeatEveryRadio().isSelected());
    }

    @Then("Verify that following message as a summary is displayed: Summary: Daily every {int} day")
    public void verify_that_following_message_as_a_summary_is_displayed_Summary_Daily_every_day(Integer int1) {
        Assert.assertEquals(calendarEventPage.getSummary(),"Summary: Daily every 1 day");
    }

    @Then("user select After ten occurrences as an Ends option")
    public void user_select_After_ten_occurrences_as_an_Ends_option() {
        calendarEventPage.clickAfterAndType();
    }

    @Then("user verify that following message as a summary is displayed: Summary: Daily every {int} day, end after {int} occurrences")
    public void user_verify_that_following_message_as_a_summary_is_displayed_Summary_Daily_every_day_end_after_occurrences(Integer int1, Integer int2) {
        calendarEventPage.justClick();
        Assert.assertEquals(calendarEventPage.getSummary(),"Summary: Daily every 1 day, end after 10 occurrences");
    }

    @Then("user select By Nov {int}, {int} as an Ends option")
    public void user_select_By_Nov_as_an_Ends_option(Integer int1, Integer int2) {
        calendarEventPage.clickBy();
        calendarEventPage.PutDate();
    }

    @Then("Verify that following message as a summary is displayed: “Summary: Daily every {int} day, end by Nov {int}, {int}”")
    public void verify_that_following_message_as_a_summary_is_displayed_Summary_Daily_every_day_end_by_Nov(Integer int1, Integer int2, Integer int3) {
        Assert.assertEquals(calendarEventPage.getSummary(),"Summary: Daily every 1 day, end by Nov 18, 2021");
    }

    @Then("user select Weekly option as Repeat option")
    public void user_select_Weekly_option_as_Repeat_option() {
        calendarEventPage.SelectWeekly();
    }

    @Then("user select Monday and Friday options as a Repeat on Options")
    public void user_select_Monday_and_Friday_options_as_a_Repeat_on_Options() {
        calendarEventPage.SelectMondayAndFriday();
    }

    @Then("user verify that Monday and Friday options are selected")
    public void user_verify_that_Monday_and_Friday_options_are_selected() {
        Assert.assertTrue(calendarEventPage.getMonday().isSelected());
        Assert.assertTrue(calendarEventPage.getFriday().isSelected());
    }

    @Then("Verify that following message as a summary is displayed: Summary: Weekly every {int} week on Monday, Friday")
    public void verify_that_following_message_as_a_summary_is_displayed_Summary_Weekly_every_week_on_Monday_Friday(Integer int1) {
        Assert.assertEquals(calendarEventPage.getSummary(),"Summary: Weekly every 1 week on Monday, Friday");
    }
}