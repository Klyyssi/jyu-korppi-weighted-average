# jyu-korppi-weighted-average

A small javascript snippet for outputting the weighted average of your JYU courses @ korppi.jyu.fi.

## How to use it?

1. Go to korppi --> transcript of records (opintosuoritusote) page.
2. Open your browsers Javascript console (F12).
3. Copy paste this snippet into the console:

    var weighted_average=function(){"forEach map filter reduce reduceRight every some".split(" ").forEach(function(a){NodeList.prototype[a]=HTMLCollection.prototype[a]=Array.prototype[a]});var d=function(a){return a.map(b).reduce(function(a,c,b,d){return a+c})},e=function(a){return a.map(function(a){return[b(a),parseInt(a.getElementsByTagName("td")[3].innerHTML)]}).reduce(function(a,c,b,d){return a+c[0]*c[1]},0)},b=function(a){return parseFloat(a.getElementsByTagName("td")[2].innerHTML.substring(0,3))},f=function(a){a=a.getElementsByTagName("td")[3];return!isNaN(parseInt(a.innerHTML))};return{compute:function(){var a=document.getElementsByClassName("tablesorter")[0].getElementsByTagName("tbody")[0].getElementsByTagName("tr").filter(f),b=e(a),a=d(a);return b/a}}}();alert("Your weighted average is: "+weighted_average.compute());

[16.3.2016] Verified to be working with Chrome/Firefox. Might not work on older IE browsers.
