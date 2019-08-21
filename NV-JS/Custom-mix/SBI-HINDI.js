var a = false;
var b = false;
var c = false;
var d = false;
var count = 0;
if (window.nvElementInterval) {
  clearInterval(window.nvElementInterval);
}
window.nvElementInterval = setInterval(function () {
  if(!a){
    var nv_ele5_head = document.querySelector("#navbar-menu-5 > a > h3");
    var nv_ele5_para = document.querySelector("#navbar-menu-5 > a > p");
    var nv_ele5_href = document.querySelector("#navbar-menu-5 > a");
    if(nv_ele5_head && nv_ele5_para && nv_ele5_href){
      nv_ele5_head.innerHTML = "हमसे संपर्क करें";
      nv_ele5_para.innerHTML = "आपकी ज़रूरतों के लिए";
      nv_ele5_href.href = 'https://www.sbilife.co.in/hi/about-us/contact-us?utm_source=notifyvisitors&utm_medium=notifyvisitors_personalization';
      a = true;
    }
  }
  /* code for privacy policy bottom */
  if(!b){
    const nv_privacypol = document.querySelector("div#divPrivacyPolicyCookie");
    const nv_privacypol_href = document.querySelector("div#divPrivacyPolicyCookie>div.container>div.privacy-pol-header-text>p>a");
    const nv_policytab = document.querySelector("header>div.header-text-contener");
    const nv_policyCTA = document.querySelector("div.header-text-contener>div.container>div.header-text>p>a");
    if(nv_policytab || nv_privacypol && nv_policyCTA || nv_privacypol_href){
      if(nv_policytab){
        nv_policytab.style = "position:fixed;bottom:0;width:100%;display:block;z-index: 99999;";
      }
      if(nv_privacypol){
        nv_privacypol.style = "position:fixed;bottom:0;width:100%;display:block;z-index: 99999;";
      }
      if(nv_policyCTA){
        nv_policyCTA.href = "https://www.sbilife.co.in/hi/privacy-policy?utm_source=notifyvisitors&utm_medium=notifyvisitors_personalization";
      }
      if(nv_privacypol_href){
        nv_privacypol_href.href = "https://www.sbilife.co.in/hi/privacy-policy?utm_source=notifyvisitors&utm_medium=notifyvisitors_personalization";
      }
      const nv_chatbot = document.querySelector("body>img");
      if(nv_chatbot){
        nv_chatbot.style = "bottom: 120px;z-index: 99999;";
      }
      b = true;
    }
  }
  /* code for take a moment button on top */
  if(!c){
    const nv_takemomentbtn = document.querySelector("div.section1.container>div.content-category-list.row>div.col-xs-12.col-md-12.text-center");
    const nv_boxcontainer = document.querySelector("div.section1.container");
    const nv_takemomentCTA = document.querySelector("div.section1.container>div.content-category-list.row>div.col-xs-12.col-md-12.text-center>a");
    if(nv_takemomentbtn && nv_boxcontainer && nv_takemomentCTA){
      nv_boxcontainer.insertAdjacentElement("afterbegin",nv_takemomentbtn);
      nv_takemomentbtn.style.margin = "20px";
      nv_takemomentCTA.href = "https://www.sbilife.co.in/en/learn/need-assessment?utm_source=notifyvisitors&utm_medium=notifyvisitors_personalization";
      c = true;
    }
  }
  /*code for reachout hide*/
  if(!d){
    const nv_reachtous = document.getElementById("reach-out-to-us-id-cu");
    const nv_reachoutelem = document.querySelector("div#reach-out-to-us-id");
    if(nv_reachtous || nv_reachoutelem){
      if(nv_reachtous){
        nv_reachtous.style.display = "none";
      }
      if(nv_reachoutelem){
        nv_reachoutelem.style.display = "none";
      }
      d = true;
    }
  }
  count++;
  if(a && b && c && d || count >= 20){
    clearInterval(window.nvElementInterval);
  }
}
                                       , 100);
const nv_docbody = document.querySelector("body");
const nv_divelem = document.createElement("div");
nv_divelem.setAttribute("style","display:block;height:74px;");
nv_docbody.insertAdjacentElement("beforeend",nv_divelem);
/*code for image of take moment convert anchor*/
$(document).ready(function(){
  $("div.section1.container>div.content-category-list.row>:nth-child(1)").wrap("<a href='https://www.sbilife.co.in/en/learn/need-assessment?utm_source=notifyvisitors&utm_medium=notifyvisitors_personalization'></a>");
  $("div.section1.container>div.content-category-list.row>:nth-child(2)").wrap("<a href='https://www.sbilife.co.in/en/learn/need-assessment?utm_source=notifyvisitors&utm_medium=notifyvisitors_personalization'></a>");
  $("div.section1.container>div.content-category-list.row>:nth-child(3)").wrap("<a href='https://www.sbilife.co.in/en/learn/need-assessment?utm_source=notifyvisitors&utm_medium=notifyvisitors_personalization'></a>");
  $("div.section1.container>div.content-category-list.row>:nth-child(4)").wrap("<a href='https://www.sbilife.co.in/en/learn/need-assessment?utm_source=notifyvisitors&utm_medium=notifyvisitors_personalization'></a>");
  $("div.section1.container>div.content-category-list.row>:nth-child(5)").wrap("<a href='https://www.sbilife.co.in/en/learn/need-assessment?utm_source=notifyvisitors&utm_medium=notifyvisitors_personalization'></a>");
  const nv_style = document.createElement("style");
  nv_style.innerHTML = '.homepage-scale {position:absolute;top:152px;left:97px;width:83%;}';
  document.body.appendChild(nv_style);
}
                 );
