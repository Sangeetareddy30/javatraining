function Createtool(name, version, languages,date) {
    this.name = name;
    this.version = version;
    this.languages = languages;
    this.date = date;
    
    this.start=function(){
        console.log(this.name, this.date+" is started");
      }
       this.stop=function(){
        console.log(this.name, this.date+" is stopped");
      }

}
let tool = new Createtool("automation",8,["java","js", "python","c#"], "8/4/2021");
let tool2 = new Createtool("testing",10,["java","js", "python","c#"], "8th April 2021");

console.log(tool["name"]);
console.log(tool["version"]);
console.log(tool["languages"]);
console.log(tool["date"]);

console.log(tool.name);
console.log(tool.version);
console.log(tool.languages);
console.log(tool.date);


tool.start()
tool2.start()

tool.stop()
tool2.stop()
