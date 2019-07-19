function getFirstSelector(selector) {
  return document.querySelector(selector);
}
function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  let rankedLists = document.querySelectorAll('.ranked-list');
  const firstRankedList =  rankedLists[0];
  const secondRankedLIst = rankedLists[1];
  
  iterateOverElements(firstRankedList.children,n);
  
  iterateOverElements(secondRankedLIst.children,n);
  
  
}

function iterateOverElements(children,n) {
   for( let i = 0 ; i < children.length; i++ ) {
    children[i].innerHTML = parseInt(children[i].innerHTML) + n; 
  }
}