
// get username
// text file location
// text file name
// have a text file

var userName 	= about.userName
var myPath 		= "C:\\Users\\" + userName + "\\Desktop\\"
var fileName	= "myTextFile.txt"
var fileCompletePath = myPath + fileName

MessageLog.trace(fileCompletePath)


function makeTextFile(){
	MessageLog.trace("make button pressed")
}

function readTextFile(){
	MessageLog.trace("read button pressed")
}