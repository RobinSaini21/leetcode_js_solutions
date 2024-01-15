const checkPanagram = (s) =>{
   if(s === " " || s === ""){
    return true
   } 

   const filteredString = filterAlphaNumeric(s)
   const reversedString = getRevseredString(filteredString)
   return reversedString === filteredString;
}

const getRevseredString = (s) => s.split(" ").reverse().join("")
const filterAlphaNumeric = (s, nonAlphaNumeric = new RegExp('[^a-z0-9]','gi')) => s
    .toLowerCase()          
    .replace(nonAlphaNumeric, '')

    const s = "A man, a plan, a canal: Panama";
    checkPanagram(s)