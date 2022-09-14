

const fs = require('fs/promises')

const operation = require("File.txt")

const myFileWriter = async (fileName, fileContent) => {
	
	// write code here
	// dont chnage function name
	fs.writeFile(fileName,fileContent,(err)=>{
		console.log(err)
	})
	/*
	fs.writeFile("output.txt","Hello world", (err) => {
		console.log(err)
	})*/
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	try{
		const data = await fs.readFile(fileName, {encoding: 'utf-8'});
		console.log(data)
	}
	catch(err){
		console.log(err)
	}
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.appendFile(fileName," World",(err) => {
		if(err)
			console.log(err)
	})
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.unlink(fileName)
}


module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }