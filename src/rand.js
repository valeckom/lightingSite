function gen(){
  len = 10
  document.getElementById("pats").innerHTML = getRandomUniqeArr(len);
  document.getElementById("rams").innerHTML = getRandomUniqeArr(len);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomUniqeArr(len) {
  pos = [];
  arr = [];

  for(i=0; i<len; i++){
    pos.push(' ' + i.toString());
  };

  while(pos.length > 0){
    i = getRandomInt(pos.length);
    n = pos.splice(i, 1);
    arr.push(n);
  };
  return arr;
}