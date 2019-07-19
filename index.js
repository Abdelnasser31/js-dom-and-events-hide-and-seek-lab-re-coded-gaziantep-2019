function getFirstSelector(selector) {
  return document.querySelector(selector);
}
function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');
  const firstRankedList =  rankedLists[0];
  const secondRankedLIst = rankedLists[1];
  
  iterateOverElements(firstRankedList.children);
  
  iterateOverElements(secondRankedLIst.children);
  
  function iterateOverElements(children) {
   for( let i = 0 ; i < children.length; i++ ) {
    children[i].innerHTML = parseInt(children[i].innerHTML) + n; 
  }
}
}

function deepestChild() {
  return document.querySelector('div#grand-node div div div div');
}