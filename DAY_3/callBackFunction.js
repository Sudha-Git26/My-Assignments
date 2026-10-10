 //Declare a global variable
  let browser = "Chrome";  

 function chromeBrowserversion(callback){
    setTimeout(()=>{callback(browser)}, 2000);
 }
function checkBrowserVersion(browser) {
    console.log(browser);
}
checkBrowserVersion(browser);
