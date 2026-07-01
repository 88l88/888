function toggleRowColor(rowElement) {
            var activeRows = document.querySelectorAll('.active-row');
            activeRows.forEach(function(r) {
                if (r !== rowElement) r.classList.remove('active-row');
            });
            rowElement.classList.toggle('active-row');
        }
var DateStr = (function(){
  return new Intl.DateTimeFormat('zh-TW', {
    year: 'numeric', month: '2-digit', day: '2-digit'
  }).format(new Date()).replace(/\//g, '-');
})();

var WeekStr = (function(){
  // 'narrow' 會直接輸出 "一"、"二"、"日"
  const w = new Intl.DateTimeFormat('zh-TW', { weekday: 'narrow' }).format(new Date());
  return `(${w})`;
})();

var TimeStr = (function(){
  return new Intl.DateTimeFormat('zh-TW', {
    hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23'
  }).format(new Date());
})();
function OtherDate(offset = 0, base = new Date()) {
  var d = new Date(base);
  d.setDate(d.getDate() + offset);
  return new Intl.DateTimeFormat('zh-TW', {year: 'numeric', month: '2-digit', day: '2-digit'}).format(d).replace(/\//g, '-');
}