if (window.nvquotesInterval) {
  clearInterval(window.nvquotesInterval);
}
var a1 = false;
var a2 = false;
var a3 = false;
var a4 = false;
var count = 0;
window.nvquotesInterval = setInterval(function(){
  if(!a1){
    var nv_get_quotes_btn = document.querySelector("div.tooltip.got_to_quote");
    if(nv_get_quotes_btn){
      nv_get_quotes_btn.innerHTML = '<span class="anim"></span>Get Quote';
      nv_get_quotes_btn.style ="top: 5px;height: 17px;padding: 4px 4px 11px;cursor: pointer;font-size: 20px;bottom: auto;margin-right: 5px;font-weight: 500;z-index: 99999;width: 92px;background: linear-gradient(to right, rgb(255, 153, 51) 0%, rgb(255, 51, 0) 100%);right: 15px;color: rgb(255, 255, 255);border-bottom: 0px;border-radius: 4px !important;display: none;";
      a1 = true;
    }
  }
  if(!a2){
    var nv_nav_qoute = document.querySelector("#care_tab_ul > li:nth-child(1)");
    if(nv_nav_qoute){
      nv_nav_qoute.style ="display:none";
    }
    a2 = true;
  }
  if(!a3){
    /*code for shadow*/
    var header_shadow = document.getElementsByClassName("care_option_tab");
    if(header_shadow){
      header_shadow[0].style.boxShadow="10px 3px 10px 7px #88888887";
    }
    a3 = true;
  }
  if(!a4){
    /*code for shadow*/
    var nv_sub_menu = document.querySelector("div.sub_menu_toggle");
    if(nv_sub_menu){
      nv_sub_menu.style ="height: 40px;";
    }
    a4 = true;
  }
  count++;
  if(a1 && a2 && a3 && a4 || count >= 20){
    clearInterval(window.nvquotesInterval);
  }
}
                                      , 100);
