export const convertToHyphenatedLowerCase = (inputString: string): string => {
   // Convert the input string to lowercase
   let lowerCaseString: string = inputString.toLowerCase();
   // Split the lowercase string by spaces
   let splitArray: string[] = lowerCaseString.split(" ");
   // Join the split array elements with dashes
   let hyphenatedString: string = splitArray.join("-");
 
   return hyphenatedString;
 };
 
 export const convertToSpaceSeperetedLowerCase = (
   inputString: string
 ): string => {
   // Convert the input string to lowercase
   let lowerCaseString: string = inputString.toLowerCase();
   // Split the lowercase string by spaces
   let splitArray: string[] = lowerCaseString.split("-");
   // Join the split array elements with dashes
   let SpaceSeperetedString: string = splitArray.join(" ");
 
   return SpaceSeperetedString;
 };