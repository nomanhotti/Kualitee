package StepDefinitions;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions(
    features = "src/test/resources/kualitee.feature",
    glue ={"StepDefinitions"},
    plugin = {"pretty","io.qameta.allure.cucumber5jvm.AllureCucumber5Jvm"
    		,"html:target/cucumber-reports", "json:target/cucumber-reports/cucumber.json"}
)
public class TestRunner extends AbstractTestNGCucumberTests {
}
