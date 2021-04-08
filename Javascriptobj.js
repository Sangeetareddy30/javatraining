let tool = {
    name : "automation",
    version: "8",
    date: "8th april",
    languages : ["java","js", "python","c++"],

    start:function(){
        console.log(this.name+"is started");
},
    stop:function(){
    console.log(this.name+ "is stopped");
}
}
console.log(tool["name"]);
console.log(tool["version"]);
console.log(tool["languages"]);
console.log(tool["date"]);

console.log(tool.name);
console.log(tool.version);
console.log(tool.languages);
console.log(tool.date);

function newFunction() {
    console.log(this.name + "is started");
}
tool.start()
tool.stop()
//javascript object notation : JSON
//key value combination
//value can be a number, string, boolean, array, object
