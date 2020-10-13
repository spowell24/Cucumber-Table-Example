package stepdefs;

import static org.junit.Assert.assertEquals;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;

public class CucumberTableStepDefs 
{
	public static WebDriver driver;
	
	public String url = "http://www.thedemosite.co.uk/";
	
    @Before
    public void setup() 
    {
        System.setProperty("webdriver.chrome.driver", "src/test/resources/drivers/chromedriver.exe");
        driver = new ChromeDriver();
    }
	@Given("^We have access to the demo site website$")
	public void we_have_access_to_the_demo_site_website() throws Throwable 
	{
    	driver.get(url);
    	Thread.sleep(1500);
    	String expected = url;
    	String actual = driver.getCurrentUrl();
    	assertEquals(expected, actual);
	}

	@Given("^Can create a user using \"([^\"]*)\" and \"([^\"]*)\"$")
	public void can_create_a_user_using_and(String arg1, String arg2) throws Throwable 
	{
    	WebElement addAUser = driver.findElement(By.xpath("/html/body/div/center/table/tbody/tr[2]/td/div/center/table/tbody/tr/td[2]/p/small/a[3]"));
    	addAUser.click();
    	
    	WebElement username = driver.findElement(By.name("username"));
    	username.click();
    	username.sendKeys(Keys.chord(arg1));
    	Thread.sleep(1500);

    	WebElement password = driver.findElement(By.name("password"));
    	password.click();
    	password.sendKeys(Keys.chord(arg2));
    	Thread.sleep(1500);
    	
    	WebElement submitButton = driver.findElement(By.name("FormsButton2"));
    	submitButton.click();
    	Thread.sleep(1500);
	}
	
	@When("^I use the \"([^\"]*)\" and \"([^\"]*)\" credentials to login$")
	public void i_use_the_and_credentials_to_login(String arg1, String arg2) throws Throwable 
	{
    	WebElement login = driver.findElement(By.xpath("/html/body/div/center/table/tbody/tr[2]/td/div/center/table/tbody/tr/td[2]/p/small/a[4]"));
    	login.click();
    	Thread.sleep(1500);

    	WebElement username2 = driver.findElement(By.name("username"));
    	username2.click();
    	username2.sendKeys(Keys.chord(arg1));
    	Thread.sleep(1500);

    	WebElement password2 = driver.findElement(By.name("password"));
    	password2.click();
    	password2.sendKeys(Keys.chord(arg2));
    	Thread.sleep(1500);

    	WebElement submitButton2 = driver.findElement(By.name("FormsButton2"));
    	submitButton2.click();

    	WebElement webelement = driver.findElement(By.xpath("/html/body/table/tbody/tr/td[1]/big/blockquote/blockquote/font/center/b"));
    	String expected = "**Successful Login**";
    	String actual = webelement.getText();
    	assertEquals(expected, actual);
    	Thread.sleep(1500);
	}

	@Then("^I verify the <status> it works$")
	public void i_verify_the_status_it_works() throws Throwable 
	{

	}
}
