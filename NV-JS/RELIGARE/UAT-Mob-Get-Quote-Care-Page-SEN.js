var a = false;
setTimeout(function(){
  const nv_getquote_elm = document.querySelector("div.quotebtnBox");
  const nv_getquotediv = document.createElement("a");
  nv_getquotediv.setAttribute("class","got_to_quote");
   nv_getquotediv.innerHTML = '<span class="anim"></span>Get Quote';
            nv_getquotediv.style ="position: fixed;height: 13px;padding: 7px 4px 10px;cursor: pointer;font-size: 20px;margin-right: 1px;font-weight: 500;width: 98px;background: linear-gradient(to right, rgb(255, 153, 51) 0%, rgb(255, 51, 0) 100%);color: rgb(255, 255, 255);border-bottom: 0px;border-radius: 4px !important;display: none;bottom: auto;top: 5px;z-index: 99998;right: 15px;text-decoration: none;";
  nv_getquotediv.setAttribute("id","getquotebtn");
  nv_getquote_elm.appendChild(nv_getquotediv);
}
           ,1000);
var nv_Function = function (){
  if(!a){
    const nv_quotecontainer = document.createElement("div");
    nv_quotecontainer.setAttribute("style","background-color: #fff;z-index: 99997;top: 0;position: fixed;width:100%;display:block;height:39px;box-shadow:rgba(136, 136, 136, 0.53) 10px 3px 10px 7px;");
    nv_quotecontainer.setAttribute("id","nv_quotecontainer");
    document.body.appendChild(nv_quotecontainer);
    a=true;
  }
  var nv_h1 = $(".getQuoteMain").offset().top;
  var nv_h2 = $(".getQuoteMain").height()-50;
  var nv_Htotal = nv_h1 + nv_h2;
  if($(document).scrollTop() >= nv_Htotal) {
    $(".got_to_quote").show();
    $(".got_to_quote").css({
      "display":"block","bottom":"auto","top":"5px","z-index":"99998","right":"15px"}
                          );
    $("#nv_quotecontainer").show();
  }
  else {
    $(".got_to_quote").hide();
    $(".got_to_quote").css({
      "display":"","bottom":"","top":"","z-index":"","right":""}
                          );
    $("#nv_quotecontainer").hide();
  }
}
window.addEventListener('scroll', nv_Function);
setTimeout(function(){
  const nv_getquotebtn = document.getElementById("getquotebtn");
  if(nv_getquotebtn){
    nv_getquotebtn.addEventListener("click",function(){
      if($(window).width() < 768){
        $('html,body').animate({
          scrollTop: $(".breadcrumb").offset().top - 30}
                               ,
                               'slow');
      }
      else{
        $('html,body').animate({
          scrollTop: $(".breadcrumb").offset().top - 50}
                               ,
                               'slow');
      }
    }
                                   );
  }
}
           ,1000);
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