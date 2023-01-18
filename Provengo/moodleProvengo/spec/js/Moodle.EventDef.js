/* @Provengo summon ctrl */
/* @Provengo summon selenium */

/**
 *  Both stories
 */
defineEvent(SeleniumSession, "logIn", function(session, e) {
    with(session) {
        click("//a[contains(text(),'Log in')]");
        writeText("//input[@id='username']", e.username);
        writeText("//input[@id='password']", e.password);
        click("//button[@id='loginbtn']")
    }
})


/**
 *  Story 'Teacher removes student from extra-time group'
 */
defineEvent(SeleniumSession, "teacherNavigatesToEnrolledUsersPage", function(session, e) {
    with(session) {
        click("//nav/div[1]/nav/ul/li[3]/a");
        click("//*[@class='multiline' and contains(text(),'" + "IntroductionToSomething" + "')]");
        click("(//*[contains(text(),'Participants')])[1]");
        scrollToBottom("//table/tbody/tr[2]/td[4]/span")
    }
})

defineEvent(SeleniumSession, "teacherRemovesStudentFromExtraTimeGroup", function(session, e) {
    with(session) {
    
        //form/div/div[1]/div[3]/table/tbody/tr[2]/td[4]/span/a/text()
        click("//form/div/div[1]/div[3]/table/tbody/tr[2]/td[4]/span/a/span");
        // click("//table/tbody/tr[2]/td[4]/span");
        click("//span[contains(@class, 'badge-secondary')]");
        click("//a/i[@title='Save changes']");
    }
})

defineEvent(SeleniumSession, "checkStudentIsNoLongerInExtraTimeGroup", function(session, e) {
    with(session) {
        assertText("//table/tbody/tr[2]/td[4]/span/a", "Extra-Time Group", TextAssertions.modifiers.Contains);
    }
})


/**
 * Story 'Student moves to the next page in a quiz'
 */
defineEvent(SeleniumSession, "studentAttemptsAQuiz", function(session, e) {
    with(session) {
        click("//*[contains(text(),'My courses') and @role='menuitem']");
        click("//*[@class='multiline' and contains(text(),'" + "IntroductionToSomething" + "')]");
        click("//section/div/div/div/ul/li[1]/div[2]/ul/li/div/div[1]/div/div[1]/div");
        click("//*[@class='singlebutton quizstartbuttondiv']/form/button");
        click("//form/div[2]/div[2]/fieldset/div/div[1]/span/input");
    }
})

defineEvent(SeleniumSession, "checkQuizHavingMoreThanOnePage", function(session, e) {
    with(session) {
        waitForVisibility("//form/div/div[2]/input");
    }
})

defineEvent(SeleniumSession, "studentMovesToNextPage", function(session, e) {
    with(session) {
        Ctrl.doSleep(20000)
        click("//form/div/div[2]/input");
    }
})

defineEvent(SeleniumSession, "assertQuizContinuesFromTheNextPage", function(session, e) {
    with(session) {
        waitForVisibility("//*[@value='Finish attempt ...']");
    }
})