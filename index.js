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
  
}