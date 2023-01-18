package moodleCucumber;

import io.cucumber.java.en.*;

public class StepDefinitions {

    private ActuatorTeacher actuatorTeacher;
    private ActuatorStudent actuatorStudent;

    private String webDriver = "webdriver.chrome.driver";
    private String path = "C:\\MoodleWindowsInstaller-latest-401\\chromedriver_win32\\chromedriver.exe";

    // $$*TODO* explain what this step does$$

    @Given("Teacher is logged in")
    public void teacherIsLoggedIn() {
        this.actuatorTeacher = new ActuatorTeacher();
        this.actuatorTeacher.initSession(this.webDriver, this.path);
        this.actuatorTeacher.loginSequence("teacher", "TeacherAdmin123!");
    }

    @When("Teacher navigates to enrolled-users page")
    public void teacherNavigatesToEnrolledUsersPage() {
        this.actuatorTeacher.navigateToEnrolledUsersPage();
    }

    @And("Teacher removes student from extra-time group")
    public void teacherRemovesStudentFromExtraTimeGroup() {
        this.actuatorTeacher.removesStudentFromExtraTimeGroup();
    }

    @Then("Student is no longer in extra-time group")
    public void studentIsNoLongerInExtraTimeGroup() {
        this.actuatorTeacher.checkStudentIsNoLongerInExtraTimeGroup();
    }

    @Given("Student is logged in")
    public void studentIsLoggedIn() {
        this.actuatorStudent = new ActuatorStudent();
        this.actuatorStudent.initSession(this.webDriver, this.path);
        this.actuatorStudent.loginSequence("student", "StudentUser123!");
    }

    @And("Student attempts a quiz")
    public void studentIsAttemptingAQuiz() {
        this.actuatorStudent.navigateToQuiz();
    }

    @And("Quiz having more than one page")
    public void quizHavingMoreThanOnePage() {
        this.actuatorStudent.quizHavingMoreThanOnePage();
    }

    @When("Student moves to the next page")
    public void studentMovingToTheNextPage() throws InterruptedException {
        this.actuatorStudent.movingToTheNextPage();
    }

    @Then("The quiz continues from the next page")
    public void theQuizContinuesFromTheNextPage() {
        this.actuatorStudent.quizContinuesFromNextPage();
    }
}
