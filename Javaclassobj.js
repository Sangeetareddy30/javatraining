class Tool {
    constructor(name, version, languages) {
        this.name = name;
        this.version = version;
        this.language = languages;
    }
    start() {
        console.log(this.name + " is started");
    }
    stop() {
        console.log(this.name + " is stopped");
    }
}
let t1 = new Tool("automation", 8, ["java", "js", "python", "c#"], "8/4/2021");
console.log (t1.name);
t1.start()
t1.stop()


