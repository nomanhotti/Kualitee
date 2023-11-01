$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/kualitee.feature");
formatter.feature({
  "name": "Test The Defect Management Page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To check and verify the Defects created screen Functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "Sample"
    },
    {
      "name": "1"
    }
  ]
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_is_on_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Login with valid credentials",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_Login_with_valid_credentials()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d118.0.5993.118)\nBuild info: version: \u00274.14.1\u0027, revision: \u002703f8ede370\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.8.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [59d55afdbff951e0d4f1c19fd81145ef, findElement {using\u003did, value\u003demail_id}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 118.0.5993.118, chrome: {chromedriverVersion: 118.0.5993.70 (e52f33f30b91..., userDataDir: C:\\Users\\MUHAMM~1\\AppData\\L...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:53028}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:53028/devtoo..., se:cdpVersion: 118.0.5993.118, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 59d55afdbff951e0d4f1c19fd81145ef\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:200)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:175)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:359)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:353)\r\n\tat Pages.kualiteepages.enter_email(kualiteepages.java:41)\r\n\tat StepDefinitions.kualiteeTest.user_Login_with_valid_credentials(kualiteeTest.java:22)\r\n\tat ✽.User Login with valid credentials(file:///C:/Users/MuhammadNomanGhafoor/eclipse-workspace/Kualitee/src/test/resources/kualitee.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user click on defect management tab",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_click_on_defect_management_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on new defect button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_click_on_new_defect_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter data into the description field",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_enter_data_into_the_description_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on save button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "To check and verify the Defects created screen Functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "Sample"
    },
    {
      "name": "2"
    }
  ]
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_is_on_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Login with valid credentials",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_Login_with_valid_credentials()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with locator By.id: email_id\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.14.1\u0027, revision: \u002703f8ede370\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.8.1\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:168)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:359)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:353)\r\n\tat Pages.kualiteepages.enter_email(kualiteepages.java:41)\r\n\tat StepDefinitions.kualiteeTest.user_Login_with_valid_credentials(kualiteeTest.java:22)\r\n\tat ✽.User Login with valid credentials(file:///C:/Users/MuhammadNomanGhafoor/eclipse-workspace/Kualitee/src/test/resources/kualitee.feature:15)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user click on defect management tab",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_click_on_defect_management_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on new defect button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_click_on_new_defect_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on save button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "To check and verify the Defects created screen Functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "Sample"
    },
    {
      "name": "3"
    }
  ]
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_is_on_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Login with valid credentials",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_Login_with_valid_credentials()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d118.0.5993.118)\nBuild info: version: \u00274.14.1\u0027, revision: \u002703f8ede370\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.8.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [f10a1a64bca9100d6d63c17b5fe3fb5c, findElement {using\u003did, value\u003demail_id}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 118.0.5993.118, chrome: {chromedriverVersion: 118.0.5993.70 (e52f33f30b91..., userDataDir: C:\\Users\\MUHAMM~1\\AppData\\L...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:53078}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:53078/devtoo..., se:cdpVersion: 118.0.5993.118, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: f10a1a64bca9100d6d63c17b5fe3fb5c\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:200)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:175)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:359)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:353)\r\n\tat Pages.kualiteepages.enter_email(kualiteepages.java:41)\r\n\tat StepDefinitions.kualiteeTest.user_Login_with_valid_credentials(kualiteeTest.java:22)\r\n\tat ✽.User Login with valid credentials(file:///C:/Users/MuhammadNomanGhafoor/eclipse-workspace/Kualitee/src/test/resources/kualitee.feature:23)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user click on defect management tab",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_click_on_defect_management_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on new defect button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_click_on_new_defect_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter data into the description field",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_enter_data_into_the_description_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on cancel button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.click_on_cancel_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "To check and verify the Defects created screen Functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "Sample"
    },
    {
      "name": "4"
    }
  ]
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_is_on_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Login with valid credentials",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_Login_with_valid_credentials()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d118.0.5993.118)\nBuild info: version: \u00274.14.1\u0027, revision: \u002703f8ede370\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.8.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [89cd049d7c9cc5b6f4a4f08748855c1d, findElement {using\u003did, value\u003demail_id}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 118.0.5993.118, chrome: {chromedriverVersion: 118.0.5993.70 (e52f33f30b91..., userDataDir: C:\\Users\\MUHAMM~1\\AppData\\L...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:53090}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:53090/devtoo..., se:cdpVersion: 118.0.5993.118, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 89cd049d7c9cc5b6f4a4f08748855c1d\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:200)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:175)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:359)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:353)\r\n\tat Pages.kualiteepages.enter_email(kualiteepages.java:41)\r\n\tat StepDefinitions.kualiteeTest.user_Login_with_valid_credentials(kualiteeTest.java:22)\r\n\tat ✽.User Login with valid credentials(file:///C:/Users/MuhammadNomanGhafoor/eclipse-workspace/Kualitee/src/test/resources/kualitee.feature:32)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user click on defect management tab",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_click_on_defect_management_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on new defect button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_click_on_new_defect_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter data into the description field",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_enter_data_into_the_description_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on attach field and attach a png file",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_click_on_attach_field_and_attach_a_png_file()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on save button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "To check and verify the Defects created screen Functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "Sample"
    },
    {
      "name": "5"
    }
  ]
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_is_on_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Login with valid credentials",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_Login_with_valid_credentials()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d118.0.5993.118)\nBuild info: version: \u00274.14.1\u0027, revision: \u002703f8ede370\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.8.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [fcf76aebce987e6929ec6033e28ec875, findElement {using\u003did, value\u003demail_id}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 118.0.5993.118, chrome: {chromedriverVersion: 118.0.5993.70 (e52f33f30b91..., userDataDir: C:\\Users\\MUHAMM~1\\AppData\\L...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:53103}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:53103/devtoo..., se:cdpVersion: 118.0.5993.118, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: fcf76aebce987e6929ec6033e28ec875\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:200)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:175)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:359)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:353)\r\n\tat Pages.kualiteepages.enter_email(kualiteepages.java:41)\r\n\tat StepDefinitions.kualiteeTest.user_Login_with_valid_credentials(kualiteeTest.java:22)\r\n\tat ✽.User Login with valid credentials(file:///C:/Users/MuhammadNomanGhafoor/eclipse-workspace/Kualitee/src/test/resources/kualitee.feature:42)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user click on defect management tab",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_click_on_defect_management_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on new defect button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_click_on_new_defect_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter data into the description field",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_enter_data_into_the_description_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on attach field and attach a tiff file",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_click_on_attach_field_and_attach_a_tiff_file()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on save button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "To check and verify the Defects created screen Functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "Sample"
    },
    {
      "name": "6"
    }
  ]
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_is_on_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Login with valid credentials",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_Login_with_valid_credentials()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d118.0.5993.118)\nBuild info: version: \u00274.14.1\u0027, revision: \u002703f8ede370\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.8.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [7b9478436712fcfed964c1b09007ed5c, findElement {using\u003did, value\u003demail_id}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 118.0.5993.118, chrome: {chromedriverVersion: 118.0.5993.70 (e52f33f30b91..., userDataDir: C:\\Users\\MUHAMM~1\\AppData\\L...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:53115}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:53115/devtoo..., se:cdpVersion: 118.0.5993.118, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 7b9478436712fcfed964c1b09007ed5c\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:200)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:175)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:359)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:353)\r\n\tat Pages.kualiteepages.enter_email(kualiteepages.java:41)\r\n\tat StepDefinitions.kualiteeTest.user_Login_with_valid_credentials(kualiteeTest.java:22)\r\n\tat ✽.User Login with valid credentials(file:///C:/Users/MuhammadNomanGhafoor/eclipse-workspace/Kualitee/src/test/resources/kualitee.feature:52)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user click on defect management tab",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_click_on_defect_management_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on new defect button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_click_on_new_defect_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter data into the description field",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_enter_data_into_the_description_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on attach field and attach a MP4 file",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_click_on_attach_field_and_attach_a_MP4_file()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on save button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "To check and verify the Defects created screen Functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "Sample"
    },
    {
      "name": "7"
    }
  ]
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_is_on_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Login with valid credentials",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_Login_with_valid_credentials()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d118.0.5993.118)\nBuild info: version: \u00274.14.1\u0027, revision: \u002703f8ede370\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.8.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [84945dc333f316cf4aab85598a79610c, findElement {using\u003did, value\u003demail_id}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 118.0.5993.118, chrome: {chromedriverVersion: 118.0.5993.70 (e52f33f30b91..., userDataDir: C:\\Users\\MUHAMM~1\\AppData\\L...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:53129}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:53129/devtoo..., se:cdpVersion: 118.0.5993.118, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 84945dc333f316cf4aab85598a79610c\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:200)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:175)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:359)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:353)\r\n\tat Pages.kualiteepages.enter_email(kualiteepages.java:41)\r\n\tat StepDefinitions.kualiteeTest.user_Login_with_valid_credentials(kualiteeTest.java:22)\r\n\tat ✽.User Login with valid credentials(file:///C:/Users/MuhammadNomanGhafoor/eclipse-workspace/Kualitee/src/test/resources/kualitee.feature:62)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user click on defect management tab",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_click_on_defect_management_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on new defect button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_click_on_new_defect_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter data into the description field",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_enter_data_into_the_description_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on attach field and attach a MKV file",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_click_on_attach_field_and_attach_a_MKV_file()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on save button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "To check and verify the Defects created screen Functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "Sample"
    },
    {
      "name": "8"
    }
  ]
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_is_on_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Login with valid credentials",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_Login_with_valid_credentials()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d118.0.5993.118)\nBuild info: version: \u00274.14.1\u0027, revision: \u002703f8ede370\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.8.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [66b7c8c77e9dc0a8af4b900e8ac3e4ac, findElement {using\u003did, value\u003demail_id}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 118.0.5993.118, chrome: {chromedriverVersion: 118.0.5993.70 (e52f33f30b91..., userDataDir: C:\\Users\\MUHAMM~1\\AppData\\L...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:53145}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:53145/devtoo..., se:cdpVersion: 118.0.5993.118, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 66b7c8c77e9dc0a8af4b900e8ac3e4ac\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:200)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:175)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:359)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:353)\r\n\tat Pages.kualiteepages.enter_email(kualiteepages.java:41)\r\n\tat StepDefinitions.kualiteeTest.user_Login_with_valid_credentials(kualiteeTest.java:22)\r\n\tat ✽.User Login with valid credentials(file:///C:/Users/MuhammadNomanGhafoor/eclipse-workspace/Kualitee/src/test/resources/kualitee.feature:73)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user click on defect management tab",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_click_on_defect_management_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on new defect button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_click_on_new_defect_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter new data into the description field",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_enter_new_data_into_the_description_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on assign to option",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_click_on_assign_to_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on save button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "To check and verify the Defects created screen Functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "Sample"
    },
    {
      "name": "9"
    }
  ]
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_is_on_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Login with valid credentials",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_Login_with_valid_credentials()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d118.0.5993.118)\nBuild info: version: \u00274.14.1\u0027, revision: \u002703f8ede370\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.8.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [3ec5a46b90523c0fcfa82bab817a2d1e, findElement {using\u003did, value\u003demail_id}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 118.0.5993.118, chrome: {chromedriverVersion: 118.0.5993.70 (e52f33f30b91..., userDataDir: C:\\Users\\MUHAMM~1\\AppData\\L...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:53156}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:53156/devtoo..., se:cdpVersion: 118.0.5993.118, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 3ec5a46b90523c0fcfa82bab817a2d1e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:200)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:175)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:359)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:353)\r\n\tat Pages.kualiteepages.enter_email(kualiteepages.java:41)\r\n\tat StepDefinitions.kualiteeTest.user_Login_with_valid_credentials(kualiteeTest.java:22)\r\n\tat ✽.User Login with valid credentials(file:///C:/Users/MuhammadNomanGhafoor/eclipse-workspace/Kualitee/src/test/resources/kualitee.feature:83)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user click on defect management tab",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_click_on_defect_management_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on new defect button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_click_on_new_defect_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter data into the description field",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_enter_data_into_the_description_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on the attachment field in Steps to reproduce",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_click_on_the_attachment_field_in_Steps_to_reproduce()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user input url",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_input_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user input Text To Display",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_input_Text_To_Display()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user input Title",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_input_Title()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user input Open link in",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_input_Open_link_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click save",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_click_save()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on the attachment field in Actual Result",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_click_on_the_attachment_field_in_Actual_Result()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user input url",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_input_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user input Text To Display",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_input_Text_To_Display()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user input Title",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_input_Title()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user input Open link in",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_input_Open_link_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click save",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_click_save()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on the attachment field in Expected Result",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_click_on_the_attachment_field_in_Expected_Result()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user input url",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_input_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user input Text To Display",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_input_Text_To_Display()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user input Title",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_input_Title()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user input Open link in",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_input_Open_link_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click save",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_click_save()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on save button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "To check and verify the Defects created screen Functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "Sample"
    },
    {
      "name": "10"
    }
  ]
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_is_on_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Login with valid credentials",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_Login_with_valid_credentials()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d118.0.5993.118)\nBuild info: version: \u00274.14.1\u0027, revision: \u002703f8ede370\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.8.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [68e2a47a070a6badc26a54bb183d063e, findElement {using\u003did, value\u003demail_id}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 118.0.5993.118, chrome: {chromedriverVersion: 118.0.5993.70 (e52f33f30b91..., userDataDir: C:\\Users\\MUHAMM~1\\AppData\\L...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:53168}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:53168/devtoo..., se:cdpVersion: 118.0.5993.118, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 68e2a47a070a6badc26a54bb183d063e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:200)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:175)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:359)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:353)\r\n\tat Pages.kualiteepages.enter_email(kualiteepages.java:41)\r\n\tat StepDefinitions.kualiteeTest.user_Login_with_valid_credentials(kualiteeTest.java:22)\r\n\tat ✽.User Login with valid credentials(file:///C:/Users/MuhammadNomanGhafoor/eclipse-workspace/Kualitee/src/test/resources/kualitee.feature:110)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user click on defect management tab",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_click_on_defect_management_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on new defect button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_click_on_new_defect_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter data into the description field",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_enter_data_into_the_description_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on the attachment field in Steps to reproduce",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_click_on_the_attachment_field_in_Steps_to_reproduce()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user input url",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_input_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user input Text To Display",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_input_Text_To_Display()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user input Title",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_input_Title()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user input Open link in",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_input_Open_link_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click save",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_click_save()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on the attachment field in Actual Result",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_click_on_the_attachment_field_in_Actual_Result()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user input url",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_input_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user input Text To Display",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_input_Text_To_Display()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user input Title",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_input_Title()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user input Open link in",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_input_Open_link_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click save",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_click_save()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on the attachment field in Expected Result",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_click_on_the_attachment_field_in_Expected_Result()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user input url",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_input_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user input Text To Display",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_input_Text_To_Display()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user input Title",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_input_Title()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user input Open link in",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_input_Open_link_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click save",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.user_click_save()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on cancel button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.kualiteeTest.click_on_cancel_button()"
});
formatter.result({
  "status": "skipped"
});
});