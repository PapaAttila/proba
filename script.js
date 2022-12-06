function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
var skills = {
    "strength": document.getElementById("strength").innerHTML,
    "agility": document.getElementById("agility").innerHTML,
    "endurance": document.getElementById("endurance").innerHTML,
    "intellect": document.getElementById("intellect").innerHTML,
    "speed": document.getElementById("speed").innerHTML,
    "unused": document.getElementById("unused").innerHTML,

}
var aha = ["strength","agility","endurance","intellect","speed","unused"]
aha.forEach(element => {
    skills[element] = Math.floor(randomNumber(0,10))
    document.getElementById(element).innerHTML = skills[element]
});
function Add(ehe){
    if(skills.unused > 0){
        skills[ehe] = skills[ehe] + 1;
        skills.unused = skills.unused - 1 

    }
    document.getElementById(ehe).innerHTML = skills[ehe]
    document.getElementById("unused").innerHTML = skills.unused
}
function Remove(ehe){
    if(skills[ehe] > 0){
        skills[ehe] = skills[ehe] - 1;
        skills.unused = skills.unused + 1 

    }
    document.getElementById(ehe).innerHTML = skills[ehe]
    document.getElementById("unused").innerHTML = skills.unused
}
console.log(skills[0])