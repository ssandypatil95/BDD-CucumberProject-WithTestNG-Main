$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/ActitimeLogin.feature");
formatter.feature({
  "name": "Acitime Login functinality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validate actitime login functionality using valid username and password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User is already in actitime login page",
  "keyword": "Given "
});
formatter.match({
  "location": "ActitimeLogin.user_is_already_in_actitime_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username",
  "keyword": "When "
});
formatter.match({
  "location": "ActitimeLogin.user_enters_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter password",
  "keyword": "And "
});
formatter.match({
  "location": "ActitimeLogin.enter_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "ActitimeLogin.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify actitime home page opened or not",
  "keyword": "Then "
});
formatter.match({
  "location": "ActitimeLogin.verify_actitime_home_page_opened_or_not()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "ActitimeLogin.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate actitime login functionality using valid credential",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User is already having valid url for actitime login page \u0027https://demo.actitime.com/login.do\u0027",
  "keyword": "Given "
});
formatter.match({
  "location": "ActitimeLogin.user_is_already_having_valid_url_for_actitime_login_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username as \u0027admin\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "ActitimeLogin.user_enters_username_as_admin(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter password as \u0027manager\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "ActitimeLogin.enter_password_as_manager(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "ActitimeLogin.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that actitime page opened with title \u0027actiTIME - Enter Time-Track\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "ActitimeLogin.verify_that_actitime_page_opened_with_title_actiTIME_Enter_Time_Track(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "ActitimeLogin.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate actitime login functionality using invalid credential",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User is already having valid url for actitime login page \u0027https://demo.actitime.com/login.do\u0027",
  "keyword": "Given "
});
formatter.match({
  "location": "ActitimeLogin.user_is_already_having_valid_url_for_actitime_login_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username as \u0027admin\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "ActitimeLogin.user_enters_username_as_admin(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d106.0.5249.119)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027HP\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.3\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 106.0.5249.119, chrome: {chromedriverVersion: 106.0.5249.61 (511755355844..., userDataDir: C:\\Users\\sande\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64093}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 10f24efb9b5a2367207ec8ff7bda6235\n*** Element info: {Using\u003dname, value\u003dusername}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:400)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat stepdefinitions.ActitimeLogin.user_enters_username_as_admin(ActitimeLogin.java:58)\r\n\tat ✽.user enters username as \u0027admin\u0027(src/test/resources/features/ActitimeLogin.feature:21)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "enter password as \u0027manager123\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "ActitimeLogin.enter_password_as_manager(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "ActitimeLogin.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify that actitime page opened with title \u0027actiTIME - Login\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "ActitimeLogin.verify_that_actitime_page_opened_with_title_actiTIME_Enter_Time_Track(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "ActitimeLogin.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Validate login functionality using \u003ctype\u003e credential for actitime application",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is already having valid url for actitime login page \u003curl\u003e for actitime application",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters username as \u003cusername\u003e in actitime application",
  "keyword": "When "
});
formatter.step({
  "name": "enter password as \u003cpassword\u003e in actitime application",
  "keyword": "And "
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "name": "verify that actitime page opened with title \u003cpagetitle\u003e in actitime application",
  "keyword": "Then "
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "type",
        "url",
        "username",
        "password",
        "pagetitle"
      ]
    },
    {
      "cells": [
        "valid",
        "https://demo.actitime.com/login.do",
        "admin",
        "manager",
        "actiTIME - Enter Time-Track"
      ]
    },
    {
      "cells": [
        "invalid",
        "https://demo.actitime.com/login.do",
        "admin",
        "manager123",
        "actiTIME - Login"
      ]
    },
    {
      "cells": [
        "invalid",
        "https://demo.actitime.com/login.do",
        "\"\"",
        "manager123",
        "actiTIME - Login"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate login functionality using valid credential for actitime application",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is already having valid url for actitime login page https://demo.actitime.com/login.do for actitime application",
  "keyword": "Given "
});
formatter.match({
  "location": "ActitimeLogin.user_is_already_having_valid_url_for_actitime_login_page_for_actitime_application(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: java.net.ConnectException: Failed to connect to localhost/[0:0:0:0:0:0:0:1]:62959\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027HP\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.3\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:92)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:276)\r\n\tat utilities.SeleniumUtility.setUp(SeleniumUtility.java:60)\r\n\tat stepdefinitions.ActitimeLogin.user_is_already_having_valid_url_for_actitime_login_page_for_actitime_application(ActitimeLogin.java:76)\r\n\tat ✽.User is already having valid url for actitime login page https://demo.actitime.com/login.do for actitime application(src/test/resources/features/ActitimeLogin.feature:28)\r\nCaused by: java.net.ConnectException: Failed to connect to localhost/[0:0:0:0:0:0:0:1]:62959\r\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:242)\r\n\tat okhttp3.internal.connection.RealConnection.connect(RealConnection.java:160)\r\n\tat okhttp3.internal.connection.StreamAllocation.findConnection(StreamAllocation.java:257)\r\n\tat okhttp3.internal.connection.StreamAllocation.findHealthyConnection(StreamAllocation.java:135)\r\n\tat okhttp3.internal.connection.StreamAllocation.newStream(StreamAllocation.java:114)\r\n\tat okhttp3.internal.connection.ConnectInterceptor.intercept(ConnectInterceptor.java:42)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.internal.cache.CacheInterceptor.intercept(CacheInterceptor.java:93)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.internal.http.BridgeInterceptor.intercept(BridgeInterceptor.java:93)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RetryAndFollowUpInterceptor.intercept(RetryAndFollowUpInterceptor.java:126)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.RealCall.getResponseWithInterceptorChain(RealCall.java:200)\r\n\tat okhttp3.RealCall.execute(RealCall.java:77)\r\n\tat org.openqa.selenium.remote.internal.OkHttpClient.execute(OkHttpClient.java:105)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:155)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:276)\r\n\tat utilities.SeleniumUtility.setUp(SeleniumUtility.java:60)\r\n\tat stepdefinitions.ActitimeLogin.user_is_already_having_valid_url_for_actitime_login_page_for_actitime_application(ActitimeLogin.java:76)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:68)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:22)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:639)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:816)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1124)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:774)\r\n\tat org.testng.TestRunner.run(TestRunner.java:624)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:359)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:354)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:312)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:261)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1215)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1140)\r\n\tat org.testng.TestNG.run(TestNG.java:1048)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\nCaused by: java.net.ConnectException: Connection refused: no further information\r\n\tat java.base/sun.nio.ch.Net.pollConnect(Native Method)\r\n\tat java.base/sun.nio.ch.Net.pollConnectNow(Net.java:672)\r\n\tat java.base/sun.nio.ch.NioSocketImpl.timedFinishConnect(NioSocketImpl.java:542)\r\n\tat java.base/sun.nio.ch.NioSocketImpl.connect(NioSocketImpl.java:597)\r\n\tat java.base/java.net.SocksSocketImpl.connect(SocksSocketImpl.java:327)\r\n\tat java.base/java.net.Socket.connect(Socket.java:633)\r\n\tat okhttp3.internal.platform.Platform.connectSocket(Platform.java:129)\r\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:240)\r\n\t... 64 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters username as admin in actitime application",
  "keyword": "When "
});
formatter.match({
  "location": "ActitimeLogin.user_enters_username_as_in_actitime_application(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enter password as manager in actitime application",
  "keyword": "And "
});
formatter.match({
  "location": "ActitimeLogin.enter_password_as_in_actitime_application(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "ActitimeLogin.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify that actitime page opened with title actiTIME - Enter Time-Track in actitime application",
  "keyword": "Then "
});
formatter.match({
  "location": "ActitimeLogin.verify_that_actitime_page_opened_with_title_in_actitime_application(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "ActitimeLogin.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Validate login functionality using invalid credential for actitime application",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is already having valid url for actitime login page https://demo.actitime.com/login.do for actitime application",
  "keyword": "Given "
});
formatter.match({
  "location": "ActitimeLogin.user_is_already_having_valid_url_for_actitime_login_page_for_actitime_application(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username as admin in actitime application",
  "keyword": "When "
});
formatter.match({
  "location": "ActitimeLogin.user_enters_username_as_in_actitime_application(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d106.0.5249.119)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027HP\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.3\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 106.0.5249.119, chrome: {chromedriverVersion: 106.0.5249.61 (511755355844..., userDataDir: C:\\Users\\sande\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64132}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 441e9b06be3aa0633b17af5cd571df00\n*** Element info: {Using\u003dname, value\u003dusername}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:400)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat stepdefinitions.ActitimeLogin.user_enters_username_as_in_actitime_application(ActitimeLogin.java:81)\r\n\tat ✽.user enters username as admin in actitime application(src/test/resources/features/ActitimeLogin.feature:29)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "enter password as manager123 in actitime application",
  "keyword": "And "
});
formatter.match({
  "location": "ActitimeLogin.enter_password_as_in_actitime_application(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "ActitimeLogin.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify that actitime page opened with title actiTIME - Login in actitime application",
  "keyword": "Then "
});
formatter.match({
  "location": "ActitimeLogin.verify_that_actitime_page_opened_with_title_in_actitime_application(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "ActitimeLogin.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Validate login functionality using invalid credential for actitime application",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is already having valid url for actitime login page https://demo.actitime.com/login.do for actitime application",
  "keyword": "Given "
});
formatter.match({
  "location": "ActitimeLogin.user_is_already_having_valid_url_for_actitime_login_page_for_actitime_application(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: java.net.ConnectException: Failed to connect to localhost/[0:0:0:0:0:0:0:1]:13982\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027HP\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.3\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:92)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:276)\r\n\tat utilities.SeleniumUtility.setUp(SeleniumUtility.java:60)\r\n\tat stepdefinitions.ActitimeLogin.user_is_already_having_valid_url_for_actitime_login_page_for_actitime_application(ActitimeLogin.java:76)\r\n\tat ✽.User is already having valid url for actitime login page https://demo.actitime.com/login.do for actitime application(src/test/resources/features/ActitimeLogin.feature:28)\r\nCaused by: java.net.ConnectException: Failed to connect to localhost/[0:0:0:0:0:0:0:1]:13982\r\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:242)\r\n\tat okhttp3.internal.connection.RealConnection.connect(RealConnection.java:160)\r\n\tat okhttp3.internal.connection.StreamAllocation.findConnection(StreamAllocation.java:257)\r\n\tat okhttp3.internal.connection.StreamAllocation.findHealthyConnection(StreamAllocation.java:135)\r\n\tat okhttp3.internal.connection.StreamAllocation.newStream(StreamAllocation.java:114)\r\n\tat okhttp3.internal.connection.ConnectInterceptor.intercept(ConnectInterceptor.java:42)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.internal.cache.CacheInterceptor.intercept(CacheInterceptor.java:93)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.internal.http.BridgeInterceptor.intercept(BridgeInterceptor.java:93)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RetryAndFollowUpInterceptor.intercept(RetryAndFollowUpInterceptor.java:126)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.RealCall.getResponseWithInterceptorChain(RealCall.java:200)\r\n\tat okhttp3.RealCall.execute(RealCall.java:77)\r\n\tat org.openqa.selenium.remote.internal.OkHttpClient.execute(OkHttpClient.java:105)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:155)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:276)\r\n\tat utilities.SeleniumUtility.setUp(SeleniumUtility.java:60)\r\n\tat stepdefinitions.ActitimeLogin.user_is_already_having_valid_url_for_actitime_login_page_for_actitime_application(ActitimeLogin.java:76)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:68)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:22)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:639)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:816)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1124)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:774)\r\n\tat org.testng.TestRunner.run(TestRunner.java:624)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:359)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:354)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:312)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:261)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1215)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1140)\r\n\tat org.testng.TestNG.run(TestNG.java:1048)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\nCaused by: java.net.ConnectException: Connection refused: no further information\r\n\tat java.base/sun.nio.ch.Net.pollConnect(Native Method)\r\n\tat java.base/sun.nio.ch.Net.pollConnectNow(Net.java:672)\r\n\tat java.base/sun.nio.ch.NioSocketImpl.timedFinishConnect(NioSocketImpl.java:542)\r\n\tat java.base/sun.nio.ch.NioSocketImpl.connect(NioSocketImpl.java:597)\r\n\tat java.base/java.net.SocksSocketImpl.connect(SocksSocketImpl.java:327)\r\n\tat java.base/java.net.Socket.connect(Socket.java:633)\r\n\tat okhttp3.internal.platform.Platform.connectSocket(Platform.java:129)\r\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:240)\r\n\t... 64 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters username as \"\" in actitime application",
  "keyword": "When "
});
formatter.match({
  "location": "ActitimeLogin.user_enters_username_as_in_actitime_application(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enter password as manager123 in actitime application",
  "keyword": "And "
});
formatter.match({
  "location": "ActitimeLogin.enter_password_as_in_actitime_application(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "ActitimeLogin.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify that actitime page opened with title actiTIME - Login in actitime application",
  "keyword": "Then "
});
formatter.match({
  "location": "ActitimeLogin.verify_that_actitime_page_opened_with_title_in_actitime_application(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "ActitimeLogin.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});