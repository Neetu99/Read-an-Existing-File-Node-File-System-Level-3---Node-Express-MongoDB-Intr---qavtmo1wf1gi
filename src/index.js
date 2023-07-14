const fs = require("node:fs");
const fileName = "myfile.txt";

const reader = async (fileName) => {
  // write code here
	// dont change function name
  fs.readFile(fileName, 'utf8', (err, content)=>{
    if(err){
      
      return;
    }
    return content.toString();
  } );
};

reader(fileName);

module.exports =  reader ;

