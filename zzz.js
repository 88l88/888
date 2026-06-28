var DateStr = (function(){
  var d = new Date();
  var pad = function(n) { return (n < 10 ? '0' : '') + n; };
  return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
})();

var WeekStr = (function(){
  var weeks = ['日', '一', '二', '三', '四', '五', '六'];
  var index = new Date().getDay(); // 取得 0 (日) 到 6 (六)
  return '(' + weeks[index] + ')';
})();

var TimeStr = (function(){
  var d = new Date();
  var pad = function(n) { return (n < 10 ? '0' : '') + n; };
  return pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds());
})();

