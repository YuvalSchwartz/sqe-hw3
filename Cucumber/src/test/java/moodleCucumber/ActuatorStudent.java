package moodleCucumber;

import org.openqa.selenium.*;

import java.time.Duration;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class ActuatorStudent {
    private WebDriver driver;
    private WebDriverWait wait;

    public ActuatorStudent() {
    }

    public void initSession(String webDriver, String path) {
        System.setProperty(webDriver, path);
        this.driver = new ChromeDriver();
        this.wait = new WebDriverWait(this.driver, Duration.ofSeconds(40L));
        this.driver.get("http://localhost/");
        this.driver.manage().window().maximize();
    }

    public void goToLogin() {
        this.driver.findElement(By.linkText("Log in")).click();
    }

    public void enterLoginInfo(String username, String password) {
        ((WebElement)this.wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='username']")))).sendKeys(new CharSequence[]{username});
        this.driver.findElement(By.xpath("//*[@name='password' and @type='password']")).sendKeys(new CharSequence[]{password});
        this.driver.findElement(By.id("loginbtn")).click();
    }

    public void loginSequence(String username, String password) {
        this.goToLogin();
        this.enterLoginInfo(username, password);
    }

    public void navigateToQuiz() {
        this.driver.findElement(By.xpath("//*[contains(text(),'My courses') and @role='menuitem']")).click();
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@class='multiline' and contains(text(),'" + "IntroductionToSomething" + "')]"))).click();
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//section/div/div/div/ul/li[1]/div[2]/ul/li/div/div[1]/div/div[1]/div"))).click();
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@class='singlebutton quizstartbuttondiv']/form/button"))).click();
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//form/div[2]/div[2]/fieldset/div/div[1]/span/input"))).click();
    }

    public void movingToTheNextPage() throws InterruptedException {
        Thread.sleep(20000);
        this.driver.findElement(By.id("mod_quiz-next-nav")).click();
    }

    public void quizHavingMoreThanOnePage() {
        assert this.driver.findElement(By.id("mod_quiz-next-nav")) != null;
    }

    public void quizContinuesFromNextPage() {
        assert this.driver.findElement(By.xpath("//*[@value='Finish attempt ...']")) != null;
    }
}