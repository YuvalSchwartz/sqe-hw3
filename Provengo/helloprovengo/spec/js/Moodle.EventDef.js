/* @Provengo summon selenium */

/**
 *  Story 1
 */
defineEvent(SeleniumSession, "LogIn", function(session, e) {
    // ((WebElement)this.wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='username']")))).sendKeys(new CharSequence[]{username});
    // session.waitForVisibility("//div[contains(text(),'I am sorry, Dave')]");
    // this.driver.findElement(By.xpath("//*[@name='password' and @type='password']")).sendKeys(new CharSequence[]{password});
    // this.driver.findElement(By.id("loginbtn")).click();
})


defineEvent(SeleniumSession, "TeacherNavigatesToEnrolledUsersPage", function(session, e) {

})


defineEvent(SeleniumSession, "TeacherRemovesStudentFromExtraTimeGroup", function(session, e) {

})

defineEvent(SeleniumSession, "CheckStudentIsNoLongerInExtraTimeGroup", function(session, e) {

})


/**
 * Story 2
 */
defineEvent(SeleniumSession, "StudentIsAttemptingAQuiz", function(session, e) {

})

defineEvent(SeleniumSession, "CheckQuizHavingMoreThanOnePage", function(session, e) {

})

defineEvent(SeleniumSession, "StudentMovingToTheNextPage", function(session, e) {

})


/**
 * Story 3
 */
defineEvent(SeleniumSession, "AssertQuizContinuesFromTheNextPage", function(session, e) {

})

