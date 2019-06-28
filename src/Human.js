class Human{
    name; job; skills; 
    constructor(){ 
        this.name = "human";
this.job="aaa";
this.skills=["a", "b"];
     }
    getJob(a){
        alert(this.name);
    this.job=a;
    alert(this.job);
    }

    leaveJob(){
this.job="unemployed";
alert(this.job);   
 }

    learnNewSkill(b){
this.skills.push(b);
alert(this.skills);
    }

forgetSkill(c){
const index = this.skills.indexOf(c);
delete this.skills[index];
alert (this.skills);
}
}

 export default Human
