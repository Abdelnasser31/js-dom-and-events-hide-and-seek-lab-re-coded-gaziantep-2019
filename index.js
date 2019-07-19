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
  let children = firstRankedList.children;
  
  // for( let i = 0 ; i < children.length; i++ ) {
  //   children[i].innerHTML = parseInt(children[i].innerHTML) + n; 
  // }
  iterateOverElements(children,n);
  
  children = secondRankedLIst.children;
  iterateOverElements(children,n);
  
  // for( let i = 0 ; i < children.length; i++ ) {
  //   children[i].innerHTML = parseInt(children[i].innerHTML) + n; 
  // }
  
}

function iterateOverElements(children,n) {
   for( let i = 0 ; i < children.length; i++ ) {
    children[i].innerHTML = parseInt(children[i].innerHTML) + n; 
  }
}