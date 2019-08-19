if (window.nvquotesInterval) {
    clearInterval(window.nvquotesInterval);
  }
  var a1 = false;
  var a2 = false;
 
  var count = 0;
  window.nvquotesInterval = setInterval(function(){
    if(!a1){
      $(window).scroll(function() {
        if ($(this).scrollTop() > 893 && $(this).scrollTop() < 9744){
          var nv_get_quotes_btn = document.querySelector("div.tooltip.got_to_quote");
          if(nv_get_quotes_btn){
            nv_get_quotes_btn.innerHTML = '<span class="anim"></span>Get Quote';
            nv_get_quotes_btn.style ="top: -7px; height: 21px; margin-right: 33px; bottom: auto; font-weight: 500; z-index: 99999; width: 185px; padding: 16px; background: linear-gradient(to right, rgb(255, 153, 51) 0%, rgb(255, 51, 0) 100%); border-radius: 0px; right: 15px; display: block; font-size: 20px; color: rgb(255, 255, 255); border-bottom: 0px;";
          }
          a1 = true;
        }
        else if ($(this).scrollTop() > 9744 ){
          $(".div.tooltip.got_to_quote").css('visibility', 'hidden');
        }
          else {
            $(".div.tooltip.got_to_quote").css('visibility', 'visible');
          }
      }
                      );
      a1 = true;
    }
    if(!a2){
      var nv_nav_qoute = document.querySelector("#care_tab_ul > li:nth-child(1)");
      if(nv_nav_qoute){
        nv_nav_qoute.style ="display:none";
      }
      a2 = true;
    }
   
    count++;
    if(a1 && a2 || count >= 20){
      clearInterval(window.nvquotesInterval);
    }
  }
                                        , 100);


                                        var nv_style_anim = document.createElement("style");
nv_style_anim.innerHTML = ` span.anim {
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    background: -moz-linear-gradient(left, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, .03) 1%, rgba(255, 255, 255, .6) 30%, rgba(255, 255, 255, .85) 50%, rgba(255, 255, 255, .85) 70%, rgba(255, 255, 255, .85) 71%, rgba(255, 255, 255, 0) 100%);
    background: -webkit-gradient(linear, left top, right top, color-stop(0, rgba(255, 255, 255, 0)), color-stop(1%, rgba(255, 255, 255, .03)), color-stop(30%, rgba(255, 255, 255, .85)), color-stop(50%, rgba(255, 255, 255, .85)), color-stop(70%, rgba(255, 255, 255, .85)), color-stop(71%, rgba(255, 255, 255, .85)), color-stop(100%, rgba(255, 255, 255, 0)));
    background: -webkit-linear-gradient(left, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, .03) 1%, rgba(255, 255, 255, .6) 30%, rgba(255, 255, 255, .85) 50%, rgba(255, 255, 255, .85) 70%, rgba(255, 255, 255, .85) 71%, rgba(255, 255, 255, 0) 100%);
    background: -o-linear-gradient(left, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, .03) 1%, rgba(255, 255, 255, .6) 30%, rgba(255, 255, 255, .85) 50%, rgba(255, 255, 255, .85) 70%, rgba(255, 255, 255, .85) 71%, rgba(255, 255, 255, 0) 100%);
    background: -ms-linear-gradient(left, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, .03) 1%, rgba(255, 255, 255, .6) 30%, rgba(255, 255, 255, .85) 50%, rgba(255, 255, 255, .85) 70%, rgba(255, 255, 255, .85) 71%, rgba(255, 255, 255, 0) 100%);
    background: linear-gradient(to right, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, .03) 1%, rgba(255, 255, 255, .6) 30%, rgba(255, 255, 255, .85) 50%, rgba(255, 255, 255, .85) 70%, rgba(255, 255, 255, .85) 71%, rgba(255, 255, 255, 0) 100%);
    width: 15%;
    height: 100%;
    transform: skew(-10deg, 0deg);
    -webkit-transform: skew(-10deg, 0deg);
    -moz-transform: skew(-10deg, 0deg);
    -ms-transform: skew(-10deg, 0deg);
    -o-transform: skew(-10deg, 0deg);
    animation: move 2s;
    animation-iteration-count: infinite;
    animation-delay: 1s;
    -webkit-animation: move 2s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-delay: 1s;
    -moz-transform: skew(-10deg, 0deg);
    -moz-animation: move 2s;
    -moz-animation-iteration-count: infinite;
    -moz-animation-delay: 1s;
    -ms-transform: skew(-10deg, 0deg);
    -ms-animation: move 2s;
    -ms-animation-iteration-count: infinite;
    -ms-animation-delay: 1s;
    -o-transform: skew(-10deg, 0deg);
    -o-animation: move 2s;
    -o-animation-iteration-count: infinite;
    -o-animation-delay: 1s
}

@keyframes move {
    0% {
        left: 0;
        opacity: 0
    }
    5% {
        opacity: 0
    }
    48% {
        opacity: .2
    }
    80% {
        opacity: 0
    }
    100% {
        left: 82%
    }
}

@-webkit-keyframes move {
    0% {
        left: 0;
        opacity: 0
    }
    5% {
        opacity: 0
    }
    48% {
        opacity: .2
    }
    80% {
        opacity: 0
    }
    100% {
        left: 82%
    }
}

@-moz-keyframes move {
    0% {
        left: 0;
        opacity: 0
    }
    5% {
        opacity: 0
    }
    48% {
        opacity: .2
    }
    80% {
        opacity: 0
    }
    100% {
        left: 88%
    }
}

@-ms-keyframes move {
    0% {
        left: 0;
        opacity: 0
    }
    5% {
        opacity: 0
    }
    48% {
        opacity: .2
    }
    80% {
        opacity: 0
    }
    100% {
        left: 82%
    }
}

@-o-keyframes move {
    0% {
        left: 0;
        opacity: 0
    }
    5% {
        opacity: 0
    }
    48% {
        opacity: .2
    }
    80% {
        opacity: 0
    }
    100% {
        left: 82%
    }
}`;

document.body.appendChild(nv_style_anim);