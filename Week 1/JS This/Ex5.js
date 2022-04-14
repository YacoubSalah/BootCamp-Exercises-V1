//not sure what the question wants
const revealSecret = function () {
    return this.secret; // we added this. here
  };
  
  const shoutIt = function (person, func) {
    person.revealItAll = func;
    const result = person.revealItAll();
    alert(person.name + " said: " + result); //added +
  };
  
  const avi = {
    name: "Avi",    //added comma
    secret: "Im scared of snakes!"
  };
  
  const narkis = {
    name: "Narkis", //added comma 
    secret: "I dont have secrets because I'm zen like that."
  };
  
  shoutIt(avi, revealSecret);
  shoutIt(narkis, revealSecret);