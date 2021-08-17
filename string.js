                // javascript string method cheat sheet
//[01] charAt()
// The charAt() method returns the character at a specified index in a string.

const a = "hello world";
console.log(a.charAt(1));

// [02] concat()

// The concat() method joins two or more strings

var ab = "hello ";
var b = "world";
console.log(ab.concat(b))

// [03] indexof()
// The indexOf() method returns the position of the first occurrence of a specified value in a string.

var txt = "nithyanandham is, web developer amazon";
console.log(txt.indexOf("is"));

// [04] lastindex()
// The lastIndexOf() method returns the position of the last occurrence of a specified value in a string.

var lstindex = "nithyanandham is web developer in google";
console.log(lstindex.lastIndexOf("developer"))

// [05] replace()
// The replace() method searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.
 var replaces = "nithyanandham useless"
 console.log(replaces.replace("useless" , "webdeveloper"));

//  [06]search

// The search() method searches a string for a specified value, and returns the position of the match.
var se = "nithyanandham web developer in good comapany"
console.log(se.search("developer"))

// [07]slice[start end]

// The slice() method extracts parts of a string and returns the extracted parts in a new string.
var sl = "nithyaandham web developer in chennai master";
console.log(sl.slice(0,10));

// [08]substr(start,length)

// The substr() method extracts parts of a string, beginning at the character at a specified position, and returns a specified number of characters.
var subtr = "javascript";
console.log(subtr.substr(0,5));

// [09]substring(start,end)
// The substring() method extracts characters, between to indices (positions), from a string, and returns the substring.
var sust = "javascript hello world";
console.log(sust.substring(0,4));

// [10]touppercase()

// The toUpperCase() method converts a string to uppercase letters.
var toup = "nithyanandham is webdeveloper in c1ax";
console.log(toup.toUpperCase());

// [11] valueof()

// The valueOf() method returns the value of a string.
var val = "nithyanandham web developer";
console.log(val.valueOf());

// [12] trim()

// The trim() method removes whitespace from both sides of a string.
var tr = "nithyanandham web developer";
console.log(tr.trim());

// [13] tostring()

// The toString() method returns the value of a string.
var tos = 12;
console.log(tos.toString());

// [14] includes()

// The includes() method returns true if a string contains a specified string, otherwise false.
var my = "my name is nithyanandham";
console.log(my.includes("name"));

// [15]charcodea()

// The charCodeAt() method returns the Unicode of the character at the specified index in a string.
var chars = "nithya"
console.log(chars.charCodeAt(0));

// [16] match
// The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.
var ma = "The rain in SPAIN stays mainly in the plain";
console.log(ma.match(/ain/g));

// [17] slipt()

// The split() method splits a string into an array of substrings, and returns the new array.
var s = "1,2,3,4,5";
console.log(s.split(","));

// [18]tolowercase()

// The toLocaleLowerCase() method converts a string to lowercase letters, according to the host's current locale.
var d = "nithyanandham is web develope"
console.log(d.toLowerCase())


