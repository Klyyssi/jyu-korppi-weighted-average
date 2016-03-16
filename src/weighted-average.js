var weighted_average = function() {

  ['forEach', 'map', 'filter', 'reduce', 'reduceRight', 'every', 'some'].forEach(
  function(p) {
    NodeList.prototype[p] = HTMLCollection.prototype[p] = Array.prototype[p];
  });

  function getWeightedAverage() {
    var courseTable = getCourseTableDom();
    var coursesWithNumericalGrades = getCourseDomsWithNumericalGrades(courseTable);
    var sumProduct = sumProductsOfCourseSizeAndGrade(coursesWithNumericalGrades);
    var sumOfCourseSizes = sumCourseSizes(coursesWithNumericalGrades);
    return sumProduct / sumOfCourseSizes;
  }

  var sumCourseSizes = function(courseDoms) {
    return courseDoms.map(getCourseSize)
        .reduce(function(prev, curr, index, arr) { return prev + curr; });
  }

  var sumProductsOfCourseSizeAndGrade = function(courseDoms) {
    return courseDoms
        .map(function(c) { return [getCourseSize(c), getGrade(c)]; })
        .reduce(function(prev,curr,index,arr) { return prev + (curr[0]*curr[1]); }, 0);
  }

  var getGrade = function(courseDom) {
    return parseInt(getGradeDomElement(courseDom)
                    .innerHTML);
  }

  var getCourseSize = function(courseDom) {
    return parseFloat(courseDom.getElementsByTagName("td")[2]
                      .innerHTML
                      .substring(0,3));
  }

  var isNumberGradedCourse = function(courseDom) {
    return domElementContainsNumber(getGradeDomElement(courseDom));
  }

  var getCourseTableDom = function() {
    return document.getElementsByClassName("tablesorter")[0];
  }

  var getCourseDomsWithNumericalGrades = function(courseTableDom) {
    return courseTableDom.getElementsByTagName("tbody")[0]
                      .getElementsByTagName("tr")
                      .filter(isNumberGradedCourse);
  }

  var getGradeDomElement = function(courseDom) {
    return courseDom.getElementsByTagName("td")[3];
  }

  var domElementContainsNumber = function(domElement) {
    return !isNaN(parseInt(domElement.innerHTML));
  }

  return {
    compute: getWeightedAverage
  }
}();

alert("Your weighted average is: " + weighted_average.compute());
