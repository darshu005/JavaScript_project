const userInput=prompt("Enter a new String:");
const length=console.log(userInput.length);
const ExtractedWord=userInput.includes("Javascript")?userInput.substring(userInput.indexOf("Javascript"),userInput.indexOf("Javascript")+userInput.length):"javascript is not found";
console.log(`Extracted word ${ExtractedWord}`);
const newString=userInput.replace("javascript","node.js");
const palindromecheck=isPalindrome(userInput);
function isPalindrome(str){
    for(let i=0;i<str.length/2;i++){
        if(str.charAt(i)!=str.length-1-i){
            return false;
        }
        return true;
    }
    console.log(`isPalindrome:${palindromecheck}`);
}