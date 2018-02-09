  function toCamelCase(str){
    let words, cap = false, start = 1;
    if (str.length == 0){
      return str;
    }
    if (str[0] == str[0].toUpperCase()){
      cap = true;
      start = 0;
    }
    if (str.indexOf("-") != -1){
      words = str.split("-");
    } else {
      words = str.split("_");
    }
    for (let i = start; i < words.length; i++){
      word = words[i].split("");
      word[0] = word[0].toUpperCase();
      words[i] = word.join("");
    }
    return words.join("");
  }
