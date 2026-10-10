//Learn var vs let vs const and understand variable scoping

//Global const
const browserVersion="Chrome";


function getBrowserVersion(){

    //If condition checking for Chrome
    if(browserVersion==="Chrome"){
        console.log("Browser version is Chrome"); // The local var is hoisted, so this reads undefined, not the global "Chrome"
    }

    //Local variable shadowing the global (outside the if block)

       /* let browserVersion="firefox";    //Result :Browser Version Is firefox
        console.log("Browser Version Is", browserVersion); */
    
        let browserVersion="firefox";    //Result : ReferenceError: Cannot access 'browserVersion' before initialization
        console.log("Browser Version Is", browserVersion);

    }   getBrowserVersion();



//function to find student pass or fail status
function calculation(marks){
   
    if (marks>30){
        console.log("Student passed")
    }
    else {console.log("student failed")}
}
calculation(70);
