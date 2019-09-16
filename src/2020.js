
/*function twentyLogic(){
    var list = document.querySelectorAll(".reader.sixth img");
    for (var i = 0; i < list.length; ++i) {
    list[i].setAttribute('data-aos', 'fade-up');
    }
    var div = document.createElement('div');
    document.getElementsByTagName("article")[0].appendChild(div);
    div.setAttribute('class', 'buttonRead');
    div.innerHTML = "read"

    var immg = document.createElement('div');
    document.getElementsByTagName("article")[0].appendChild(immg);
    immg.setAttribute('class', 'parallax');
    
}

export default twentyLogic;*/

/*
  var options = {
    imgSrc : "https://unsplash.it/g/1024/768?image=874",
    containerName : "portrait",
    rows:5,
    columns:5,
    margin:2.5,
    animTime: 0.3
  }
  
  function ImageGrid(defaults)
  {
    var r = defaults.rows;
    var c = defaults.columns;
    var margin = defaults.margin;
      
    var portrait = document.getElementsByClassName(defaults.containerName)[0];
    var container = document.createElement('div');
    container.className = "gridContainer";
    portrait.appendChild(container); 
      
    var gridTile;  
  
    var w = (container.offsetWidth / c) -margin;
    var h = (container.offsetHeight / r) -margin;
    var arr = [];
      
    for (var i=0, l=r*c; i < l; i++)
    {    
      gridTile = document.createElement('div');
      gridTile.className = "gridTile";
      gridTile.style.backgroundImage = "url("+defaults.imgSrc+")";
      
         
      arr = [(w+margin)*(i%c), (h+margin)*Math.floor(i/c), ((w+margin)*(i%c)+w-margin), (h+margin)*Math.floor(i/c), ((w+margin)*(i%c)+w-margin), ((h+margin)*Math.floor(i/c) + h-margin), (w+margin)*(i%c), ((h+margin)*Math.floor(i/c) + h-margin)];
          
     // console.log(i + " ====>>> " + arr + " ||||| " + i%c  + " |||||| " + i/c);  
      
          
      TweenMax.set(gridTile, {webkitClipPath:'polygon('+arr[0]+'px '+ arr[1]+'px,'+arr[2]+'px '+arr[3]+'px, '+arr[4]+'px '+ arr[5] +'px, '+arr[6]+'px '+ arr[7] +'px)', clipPath:'polygon('+arr[0]+'px '+ arr[1]+'px,'+arr[2]+'px '+arr[3]+'px, '+arr[4]+'px '+ arr[5] +'px, '+arr[6]+'px '+ arr[7] +'px)'});
         
      container.appendChild(gridTile);    
      
      fixTilePosition(gridTile, i);
    }
    
    portrait.addEventListener("mouseover", function(e){
      var allTiles = e.currentTarget.querySelectorAll(".gridTile");
      for (var t=0, le = allTiles.length; t < le; t++)
        {
          TweenMax.to(allTiles[t], defaults.animTime, {css:{backgroundPosition:"0px 0px"}, ease:Power1.easeOut});
        }
    })
                               
    portrait.addEventListener("mouseleave", function(e){
      var allTiles = e.currentTarget.querySelectorAll(".gridTile");
      for (var ti=0, len = allTiles.length; ti < len; ti++)
        {
          fixTilePosition(allTiles[ti], ti, defaults.animTime);
        }
    })
    
    function fixTilePosition(tile, ind, time)
    {
      if(time==null)time=0;
      var centr, centrCol, centrRow, offsetW, offsetH, left, top;
      
      centr = Math.floor(c * r / 2);
      centrCol = Math.ceil(centr/c);
      centrRow = Math.ceil(centr/r);
          
      offsetW = w/centrCol;
      offsetH = h/centrRow;
      
      left = (Math.round((ind % c - centrCol + 1) * offsetW));
      top = (Math.round((Math.floor(ind/c) - centrRow + 1) * offsetH));
      
      //console.log(left, top)
      
      TweenMax.to(tile, time, {css:{backgroundPosition:left+"px "+top+"px"}, ease:Power1.easeOut});
    }
  }
  
  ImageGrid(options);
/*
import Typed from 'typed.js';

var options = {
  strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
  typeSpeed: 40
}

var typed = new Typed(".cazzo", options);/*

/*var list;
list = document.querySelectorAll(".mainHome");
for (var i = 0; i < list.length; ++i) {
    list[i].classList.add('cazzo');
}

/*
var root = document.getElementById('portrait');

var mouse_monitor = function(e) {
   let x = e.clientX/innerWidth;
   let y = e.clientY/innerHeight;
   
   let move_x = (x>0.5) ? '-30px' : '30px';
   let move_y = (y>0.5) ? '-20px' : '20px';
   
   root.style.setProperty("--translate-x", move_x);
   root.style.setProperty("--translate-y", move_y);
}

root.addEventListener("mousemove", mouse_monitor);

// Detect request animation frame
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.inline-photo'); 

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });

    scroll(loop);
}

// Call the loop for the first time
loop();*/