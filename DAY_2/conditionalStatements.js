//Function to launch browser

function launchBrowser(){

    let browserName = "Safari";

if (browserName === "Chrome"){
    console.log("Browser Name is Chrome");
} else if (browserName === "Firefox")
    {
    console.log("Browser Name is Firefox");
}
else console.log("Unknown Browser");
}
launchBrowser();
 

//Function with swtich and case for testing type
function runTest (testType){

        switch (testType) {
        case "Sanity" :
            console.log("It is Sanity");
            break;
        case "Smoke" :
            console.log("It is Smoke");
            break;
        case "Regression" :
            console.log("It is Regression");
            break;
        default :
            console.log("Default is Smoke");
            break;
    }
}    
runTest("Sanity");


