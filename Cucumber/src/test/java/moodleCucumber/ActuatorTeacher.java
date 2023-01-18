package moodleCucumber;

import java.time.Duration;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class ActuatorTeacher {
    private WebDriver driver;
    private WebDriverWait wait;

    public ActuatorTeacher() {
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

    public void navigateToEnrolledUsersPage() {
        this.driver.findElement(By.xpath("//nav/div[1]/nav/ul/li[3]/a")).click();
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@class='multiline' and contains(text(),'" + "IntroductionToSomething" + "')]"))).click();
        wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("(//*[contains(text(),'Participants')])[1]"))).click();
    }

    public void removesStudentFromExtraTimeGroup() {
        this.driver.findElement(By.xpath("//table/tbody/tr[2]/td[4]/span")).click();
        wait.until(ExpectedConditions.visibilityOfElementLocated((By.xpath("//span[contains(@class, 'badge-secondary')]")))).click();
        this.driver.findElement(By.xpath("//a/i[@title='Save changes']")).click();
    }

    public void checkStudentIsNoLongerInExtraTimeGroup() {
        String groupsText = this.driver.findElement(By.xpath("//table/tbody/tr[2]/td[4]/span/a")).getText();
        assert groupsText.contains("Extra-Time Group");
    }
}