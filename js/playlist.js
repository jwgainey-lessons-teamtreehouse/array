var playList = [
  ['Life Itself', 'Glass Animals']
  ['Toxic', 'Brittany Spears']
  ['Harder, Better, Faster, Stronger', 'Daft Punk']
  ['The Apprentice', 'Gorillaz']
  ["It's a Trip", "Joywave"]
  ['Everybody', 'Don Broco']
  ];
  
  function print(message) {
    document.write(message);
  }
  
  function printList( list ) {
    var listHTML = '<ol>';
  for (var i = 0; i < playList.length; i += 1) {
    listHTML += '<li>'+ list[i] + '</li>';
  }
    listHTML += '</ol>';
    print(listHTML);
}
printList(playList);