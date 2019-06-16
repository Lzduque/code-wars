function list(names) {
  let result = "";
  for (let i = 0 ; i < names.length ; i++) {
    console.log("name analyzed: ", names[i]);
    if (i === 0) {
      result += names[i].name;
    } else if (i === names.length - 1) {
      result += ` & ${names[i].name}`;
    } else {
      result += `, ${names[i].name}`;
    }
  }
  return result;
}

console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]));