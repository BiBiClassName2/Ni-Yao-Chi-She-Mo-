// 歡迎在下方自行新增物件:)

var foods = {
  food0 : {name: '麥當勞',href: 'https://goo.gl/maps/z1PSd3uFtSt4YvbJ7'},
  food1 : {name: '肯德基',href: 'https://goo.gl/maps/MUzAbfGoXZWkgSXV7'},
  food2 : {name: '互賓',href: 'https://docs.webmix.cc/javascript-web/'},
  food3 : {name: '冇𠕇有麵擔',href: 'https://goo.gl/maps/tCsNmkYBjaQdyCJk6'},
  food4 : {name: '老哥水煎包',href: 'https://goo.gl/maps/CFdw3diPDBHwaFeU8'},
  food5 : {name: '一本便當',href: 'https://goo.gl/maps/W3yMSkYxc5MnxTaY8'},
  food6 : {name: '12MINI經典即享鍋-台北慶城店',href: 'https://g.page/12MINI-TaipeiQingcheng?share'},
  food7 : {name: '蘭芳麵食館.滷味鋪.花椒辣油.花椒麵始祖.花椒滷味',href: 'https://goo.gl/maps/LhuwC3NM2uSsaRs68'},
  food8 : {name: 'Subway 南京復興店',href: 'https://g.page/subway_70616?share'},
  food9 : {name: '丘彼特早午餐遼寧店',href: 'https://goo.gl/maps/HSdSGa2xHwFA9Ztc8'},
  food10 : {name: '慶城海南雞飯',href: 'https://goo.gl/maps/ye3ctPXYdqC2GW6Q9'},
  food11 : {name: '飯飯堂南京復興店',href: 'https://maps.app.goo.gl/wLo65YmzNMSL158s5'},
}

var allfoods = [];
for(var key in foods) {
    allfoods.push(foods[key]);
}


var btn = document.getElementById('btn');
var restaurant = document.querySelector('h2');
var googlemap = document.querySelector('h3');
var href = document.querySelector('a');
var object_length = Object.keys(foods).length;

var myVar = setInterval(function(){ getNumber() }, 100);

function getNumber() {
  var x = Math.floor(Math.random() * object_length);
  console.log(x);
  restaurant.innerHTML = allfoods[x].name;
  href.innerHTML = allfoods[x].href;
  href.href = allfoods[x].href;
};


btn.addEventListener("click", function myStopFunction(){
      if (btn.value == "Stop!"){
        clearInterval(myVar);
        btn.value = "重來";
        googlemap.style.visibility = "visible";

      }else{
        location.reload(true);
      }
  });
