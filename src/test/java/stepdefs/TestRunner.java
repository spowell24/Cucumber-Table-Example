package stepdefs;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
 features = "src/test/resources/cucumber",  // location of the feature files
 plugin = {"pretty", "html:target/reports/htmlReports"},
 monochrome = true)
public class TestRunner 
{

}