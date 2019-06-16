function friend(friends) {
  let myFriends = [];
    friends.forEach(function(friend) {
      let splitFriend = friend.split("");
      if (splitFriend.length === 4) {
        let joinFriend = splitFriend.join("");
        myFriends.push(joinFriend);
      }
    });
  return myFriends;
}

console.log(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"]);

// smart
// function friend(friends){
//   return friends.filter(n => n.length === 4)
// }
