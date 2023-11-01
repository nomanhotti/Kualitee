package StepDefinitions;
import java.awt.AWTException;
import java.time.Duration;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import Pages.kualiteepages;
import io.cucumber.java.en.*;
public class kualiteeTest {
	WebDriver driver;
	kualiteepages page;
	@Given("User is on Login Page")
	public void user_is_on_Login_Page() {
		String projectPath=System.getProperty("user.dir");
		System.setProperty("webdriver.chrome.driver",projectPath+ "\\src\\test\\resources\\Drivers\\chromedriver.exe");
	    driver=new ChromeDriver();
	    page=new kualiteepages(driver);
	    driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));
	    driver.manage().window().maximize();
	    driver.get("https://kualitee_defects.kualitee.com/");   	}
	@When("User Login with valid credentials")
	public void user_Login_with_valid_credentials() {
		page.enter_email();
		page.enter_password();
		page.click_login();}
	@Then("user click on defect management tab")
	public void user_click_on_defect_management_tab() throws InterruptedException {
		Thread.sleep(10000);
	    page.click_defect_management();}
	@Then("user click on new defect button")
	public void user_click_on_new_defect_button() throws InterruptedException {
		Thread.sleep(10000);
	    page.click_new_defect();}
@And("user enter data into the description field")
	public void user_enter_data_into_the_description_field() {
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));
		page.description_field();}
@Then("click on save button")
	public void click_on_save_button() throws InterruptedException {
		Thread.sleep(10000);
		page.click_save();   }
	@Then("click on cancel button")                                         
	public void click_on_cancel_button() throws InterruptedException {                                  
	   Thread.sleep(10000); 
	   page.click_Cancel();}  
	@Then("user click on attach field and attach a png file")               
	public void user_click_on_attach_field_and_attach_a_png_file() throws InterruptedException, AWTException {                                                                                
	     Thread.sleep(10000);
	     page.click_On_plus_icon();
	     Thread.sleep(10000);
	     page.file_input();}
	@Then("user click on attach field and attach a tiff file")              
	public void user_click_on_attach_field_and_attach_a_tiff_file() throws InterruptedException, AWTException {           
	    Thread.sleep(10000);         
		page.click_On_plus_icon();
		Thread.sleep(10000); 
	       page.file_input_tiff();     }  
	@Then("user click on attach field and attach a MP4 file")               
	public void user_click_on_attach_field_and_attach_a_MP4_file() throws InterruptedException, AWTException {                                                                                    
	    Thread.sleep(10000);            
		page.click_On_plus_icon();  
		Thread.sleep(10000);       
	           page.file_input_mP4(); }                                                                           
	@Then("user click on attach field and attach a MKV file")                   
	public void user_click_on_attach_field_and_attach_a_MKV_file() throws InterruptedException, AWTException {            
	         Thread.sleep(10000);      
	        page.click_On_plus_icon();
	        Thread.sleep(10000);
	        page.file_input_mkv();}
	@Then("user enter new data into the description field")                 
	public void user_enter_new_data_into_the_description_field() throws InterruptedException {          
		Thread.sleep(10000);
		page.new_data_in_description();
		page.click_On_plus_icon();}                                                                                                                                              
	@Then("user click on assign to option")                                 
	public void user_click_on_assign_to_option() throws InterruptedException {                          
		Thread.sleep(10000);
		page.assign_to();}                                                                       
	@Then("user click on the attachment field in Steps to reproduce")
	public void user_click_on_the_attachment_field_in_Steps_to_reproduce() throws InterruptedException {
		Thread.sleep(10000);
		page.user_click_on_the_attachment_field_in_Steps_to_reproduce();}
	@Then("user input url")
	public void user_input_url() {
	    page.user_input_url_Step_to_reproduce();}
	@Then("user input Text To Display")
	public void user_input_Text_To_Display() {
	    page.user_input_text_to_display();}
@Then("user input Title")
	public void user_input_Title() {
	    page.user_input_title();}
	@Then("user input Open link in")
	public void user_input_Open_link_in() {
	   page.user_open_link_in();}
	@Then("user click save")
	public void user_click_save() {
	    page.click_save_button();}
	@Then("user click on the attachment field in Actual Result")
	public void user_click_on_the_attachment_field_in_Actual_Result() throws InterruptedException {
	    Thread.sleep(10000);
		page.click_On_plus_icon();
		Thread.sleep(10000);
	    page.user_click_on_the_attachment_field_in_Actual_Result();}
	@Then("user click on the attachment field in Expected Result")
	public void user_click_on_the_attachment_field_in_Expected_Result() throws InterruptedException {
		Thread.sleep(10000);
		page.user_click_on_the_attachment_field_in_Expected_Result();}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//@Then("user clicks all the options of Step to reproduce field")         
	//public void user_clicks_all_the_options_of_Step_to_reproduce_field() throws InterruptedException {
		//Thread.sleep(10000);
		//page.step_reproduce();
		//driver.close();
		//driver.quit();
	                              
	//}                                                                           
	                                                                            
//	@Then("user clicks all the options of Actual result field")                 
////	public void user_clicks_all_the_options_of_Actual_result_field() { 
////		
////		
////		
////	
//	}
//	@Then("user clicks all the options of Expected result field")           
//	public void user_clicks_all_the_options_of_Expected_result_field() {    
//	    // Write code here that turns the phrase above into concrete actions
//	    throw new io.cucumber.java.PendingException();                      
//	}                                                                       
//	                                                                        
//	@Then("user clicks all the options of Comments field")                  	
//	public void user_clicks_all_the_options_of_Comments_field() {           	
//	    // Write code here that turns the phrase above into concrete actions	
//	    throw new io.cucumber.java.PendingException();                      	
//	}                                                                       	
//	                                                                        	
//













}	
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		


	








	



	

	
	


	

	
	

	
	

	
	


	
	


	
	
	
	
	


	
	
	
	
	
	

	
	



	

	
	

	
	

	
	

	
	
	
	
	


	


	
	




	
	

	
	
	
	

	
	

	
	
	
	
	

		
	                                                                             

















