
// get username
// text file location
// text file name
// have a text file

var userName 	= about.userName
var myPath 		= "C:\\Users\\" + userName + "\\Desktop\\"
var fileName	= "myTextFile.txt"
var fileCompletePath = myPath + fileName

//MessageLog.trace(fileCompletePath)

function makeTextFile(){
	MessageLog.trace("make button pressed")

	var myFile = new File(fileCompletePath)

	if (myFile.exists){
		//if true do this
		MessageLog.trace("file already exists")

	}
	else{
		//if false do this
		MessageLog.trace("file does not exist so I will make a new one")
		myFile.open(FileAccess.Append)
		myFile.close()
		
	}
}

function readTextFile(){
	MessageLog.trace("read button pressed")




}