package Pages;
import java.awt.AWTException;
import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.datatransfer.StringSelection;
import java.awt.event.KeyEvent;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
public class kualiteepages {
		WebDriver driver;
		private static final By emailField = By.id("email_id");
	    private static final By passwordField = By.id("password");
	    private static final By loginButton = By.className("submit-btn");
	    private static final By threebars = By.xpath("//i[contains(@class,'fa-solid fa-bars')]");
	    private static final By defectmanagement= By.xpath("//a[contains(.,' Defect Management')]");
	    private static final By newdefect= By.id("tour-defect-create-btn");
	    private static final By descriptionfield=By.xpath("//input[contains(@id,'description')]");
	    private static final By save=By.xpath("//button[contains(@id,'defect-create-submit-btn') and contains(.,' Save ')]");
	    private static final By cancel=By.xpath("//input[contains(@class,'submit-btn cancel')]");
	    private static final By plusicon= By.xpath("//span[contains(@class,'data text-break')and contains(.,'Additional Details')]");
	    private static final By fileinput=By.xpath("//span[contains(.,'or paste screenshot here! ')]/..//span[contains(.,'Browse')]");
	    private static final By fileinputtiff=By.xpath("//label[ contains(.,'Attach Video ')]/..//app-uploader//div//div//div//div//div//div//label//span[contains(.,'Browse')]");
	    private static final By fileinputMP4= By.xpath("//label[ contains(.,'Attach Video ')]/..//app-uploader//div//div//div//div//div//div//label//span[contains(.,'Browse')]");
	    private static final By fileinputMKV=By.xpath("//label[ contains(.,'Attach Video ')]/..//app-uploader//div//div//div//div//div//div//label//span[contains(.,'Browse')]");
	    private static final By attachSTR=By.xpath("//label[contains(.,'Steps To Reproduce')]/..//button[@title='Insert/edit link']");
	    private static final By newdata=By.xpath("//input[contains(@id,'description')]");
	    private static final By assignto= By.xpath("//select[@name=\"assignto\"]");
	    private static final By inputurl=By.xpath("//label[text() = 'URL']/..//input");
	    private static final By inputTxtToDisplay=By.xpath("//label[text() = 'Text to display']/..//input");
	    private static final By inputTitle=By.xpath("//label[text() = 'Title']/..//input");
	    private static final By openLinkIn=By.xpath("//label[text() = 'Open link in...']/..//div[@class=\"tox-selectfield\"]/.//select");
	    private static final By savebutton=By.xpath("//div[contains(@class,\"tox-dialog__footer-end\")]/.//button[contains(.,'Save')]");
	    private static final By attachAR=By.xpath("//label[contains(.,'Actual Result')]/..//button[@title='Insert/edit link']");
	    private static final By attachER=By.xpath("//label[contains(.,'Expected Result')]/..//button[@title='Insert/edit link']");
	    public kualiteepages(WebDriver driver) {
		this.driver=driver;}
	public void enter_email() {
		driver.findElement(emailField).sendKeys("noman.ghafoor1@kualitatem.com");
			}
	public void enter_password() {
		driver.findElement(passwordField).sendKeys("Hotti786@");	
	}
	public void click_login() {
		driver.findElement(loginButton).click();
	}
	public void click_defect_management() throws InterruptedException {
		driver.findElement(threebars).click();
	    driver.findElement(defectmanagement).click();
	}
	public void click_new_defect() {
		driver.findElement(newdefect).click();
	}
	public void description_field() {
		driver.findElement(descriptionfield).sendKeys("Testing123");
	}
	public void click_save() {
		driver.findElement(save).click();
	}
	public void click_Cancel() {
		driver.findElement(cancel).click();
	}
	public void click_On_plus_icon() {
		driver.findElement(plusicon).click();}
	public void file_input() throws AWTException {
driver.findElement(fileinput).click();
		 StringSelection filePath = new StringSelection("C:\\Users\\MuhammadNomanGhafoor\\Desktop\\Test-Scenarios_00001.ppt");
	        Toolkit.getDefaultToolkit().getSystemClipboard().setContents(filePath, null);
	        Robot robot = new Robot();
	        robot.delay(1000);
	        robot.keyPress(KeyEvent.VK_CONTROL);
	        robot.keyPress(KeyEvent.VK_V);
	        robot.keyRelease(KeyEvent.VK_V);
	        robot.keyRelease(KeyEvent.VK_CONTROL);
	        
	        robot.delay(1000);
	        robot.keyPress(KeyEvent.VK_ENTER);
	        robot.keyRelease(KeyEvent.VK_ENTER);
	}
    public void file_input_tiff() throws AWTException {
driver.findElement(fileinputtiff).click();
		 StringSelection filePath = new StringSelection("C:\\Users\\MuhammadNomanGhafoor\\Desktop\\Test-Scenarios.tiff");
	        Toolkit.getDefaultToolkit().getSystemClipboard().setContents(filePath, null);
	        Robot robot = new Robot();
	        robot.delay(1000);
	        robot.keyPress(KeyEvent.VK_CONTROL);
	        robot.keyPress(KeyEvent.VK_V);
	        robot.keyRelease(KeyEvent.VK_V);
	        robot.keyRelease(KeyEvent.VK_CONTROL);
	        
	        robot.delay(1000);
	        robot.keyPress(KeyEvent.VK_ENTER);
	        robot.keyRelease(KeyEvent.VK_ENTER);
	}
	public void file_input_mP4() throws AWTException {

		driver.findElement(fileinputMP4).click();
		 StringSelection filePath = new StringSelection("C:\\Users\\MuhammadNomanGhafoor\\Desktop\\Beep");
	        Toolkit.getDefaultToolkit().getSystemClipboard().setContents(filePath, null);
	        Robot robot = new Robot();
	        robot.delay(1000);
	        robot.keyPress(KeyEvent.VK_CONTROL);
	        robot.keyPress(KeyEvent.VK_V);
	        robot.keyRelease(KeyEvent.VK_V);
	        robot.keyRelease(KeyEvent.VK_CONTROL);
	        
	        robot.delay(1000);
	        robot.keyPress(KeyEvent.VK_ENTER);
	        robot.keyRelease(KeyEvent.VK_ENTER);
	}
	public void file_input_mkv() throws AWTException {

		driver.findElement(fileinputMKV).click();
		 StringSelection filePath = new StringSelection("C:\\Users\\MuhammadNomanGhafoor\\Desktop\\Beep Sound");
	        Toolkit.getDefaultToolkit().getSystemClipboard().setContents(filePath, null);
	        Robot robot = new Robot();
	        robot.delay(1000);
	        robot.keyPress(KeyEvent.VK_CONTROL);
	        robot.keyPress(KeyEvent.VK_V);
	        robot.keyRelease(KeyEvent.VK_V);
	        robot.keyRelease(KeyEvent.VK_CONTROL);
	        
	        robot.delay(1000);
	        robot.keyPress(KeyEvent.VK_ENTER);
	        robot.keyRelease(KeyEvent.VK_ENTER);
	}
	public void user_click_on_the_attachment_field_in_Steps_to_reproduce() {
	
		driver.findElement(attachSTR).click();
	}
	public void new_data_in_description() {
		driver.findElement(newdata).sendKeys("In Publishing and graphic design");
	}
	public void assign_to() {
		WebElement click = driver.findElement(assignto);
		click.click();
		click.sendKeys(Keys. ARROW_DOWN );
		click.sendKeys(Keys. ARROW_DOWN );
		click.sendKeys(Keys. ARROW_DOWN );
		click.sendKeys(Keys.ENTER);
		
	}
	public void user_input_url_Step_to_reproduce() {
		driver.findElement(inputurl).sendKeys("http://www.google.com");
	}
	public void user_input_text_to_display() {
		driver.findElement(inputTxtToDisplay).clear();
		driver.findElement(inputTxtToDisplay).sendKeys("Testing");
	}
	public void user_input_title() {
		driver.findElement(inputTitle).sendKeys("Quality");
	}
	public void user_open_link_in() {
		WebElement click = driver.findElement(openLinkIn);
		click.click();
		click.sendKeys(Keys. ARROW_DOWN );
		click.sendKeys(Keys. ENTER );
	}
	public void click_save_button() {
		driver.findElement(savebutton).click();
	}
	public void user_click_on_the_attachment_field_in_Actual_Result() {
		driver.findElement(attachAR).click();
	}
	public void user_click_on_the_attachment_field_in_Expected_Result() {
		driver.findElement(attachER).click();
	}
}
	
	
	


