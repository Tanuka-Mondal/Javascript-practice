function switchOfStuff(val) {
  var answer = "";
  
  switch(val){
    case "a":
      return "apple";
      break;
    case "b":
      return "bird";
      break;
    case "c":
      return "cat";
      break;
    default:
      return "stuff";
      break;    
  }

  return answer;
}

switchOfStuff(1);
