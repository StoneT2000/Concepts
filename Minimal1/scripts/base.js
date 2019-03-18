var colorDropdown = false;
var menuDropdown = false;
var themes = ["default","red","orange","green"];
var themeProperties = {
  default: [  
  '--text: #212529',
  '--text2nd: #494c4f',
  '--bg: #fefefe',
  '--bg2: #212529',
  '--primary: rgb(230,230,230)',
  '--primaryHover: rgb(127,127,127)',
  '--primaryActive: #212529',
  '--secondary: rgb(33,37,41)',
  '--secondaryHover: rgb(33,37,41)'
  ],
  red: [
  '--text: #fefefe',
  '--text2nd: #f2f2f2',
  '--bg: #f52f57',
  '--bg2: #f52f57',
  '--primary: #df2b50',
  '--primaryHover: #b32340',
  '--primaryActive: #861a30',
  '--secondary: #fafafc',
  '--secondaryHover: #fafafc',
  '--secondaryActive: #f5f5f9'
  ],
  orange: [
  '--text: #fefefe',
  '--text2nd: #f2f2f2',
  '--bg: #ff974e',
  '--bg2: #ff974e',
  '--primary: #d17432',
  '--primaryHover: #a35a27',
  '--primaryActive: #74411c',
  '--secondary: #fafafc',
  '--secondaryHover: #fafafc',
  '--secondaryActive: #f5f5f9'
  ],
  green: [
  '--text: #fefefe',
  '--text2nd: #f2f2f2',
  '--bg: #6ec46f',
  '--bg2: #6ec46f',
  '--primary: #47a749',
  '--primaryHover: #39863b',
  '--primaryActive: #2b642c',
  '--secondary: #fafafc',
  '--secondaryHover: #fafafc',
  '--secondaryActive: #f5f5f9'
  ]
}
function toggleThemeDropDown() {
    if (colorDropdown === false){
      $("#colorDropdown .rightTriangle").css("transform", "rotate(90deg)");
      colorDropdown = true;
      $("#colorDropdownWrapper").css("height", "13rem");
      $("#colorDropdownWrapper").css("box-shadow","0px 8px 12px -4px rgba(0,0,0,0.1)")
    }
    else {
      colorDropdown = false;
      $("#colorDropdownWrapper").css("height", "3rem");
      $("#colorDropdown .rightTriangle").css("transform", "rotate(0deg)");
      $("#colorDropdownWrapper").css("box-shadow","0px 0px 0px -10px rgba(0,0,0,0.1)")
    }
}
function toggleMenuDropDown() {
    if (menuDropdown === false){
      menuDropdown = true;
      $("#menuWrapper").css("height", "18rem");
      $("#menuWrapper").css("box-shadow","0px 8px 12px -4px rgba(0,0,0,0.1)")
    }
    else {
      menuDropdown = false;
      $("#menuWrapper").css("height", "3rem");
      $("#menuWrapper").css("box-shadow","0px 0px 0px -10px rgba(0,0,0,0.1)")
    }
}
$(document).ready(function(){
  $("#colorDropdown").on('click', function(){
    toggleThemeDropDown();
  });
  $('.dropdownLinks').on('click', function(){
    toggleThemeDropDown();
  });
  
  $("#menuWrapper li").on('click', function(){
    toggleMenuDropDown();
  })
  $("#closePopup-1").on('click', function(){
    popdown("#popup-1");
  })
  $("#whereIpsum").on('click', function(){
    popup("#popup-1","More Ipsums??", "Find more <a href='https://meettheipsums.com/'>here</a>!")
  });
  $("#findStats").on('click', function(){
    popup("#popup-1","Where did these stats come from?", "They were collected by Google! Find more <a href='https://fonts.google.com/analytics'>here</a>!")
  });
  $("#submit").on('click', function(){
    popup("#popup-1","Submitted", "Just kidding, nothing got submitted...");
  })
  //setup themes
  for (let theme of themes) {
    $("#theme-" + theme).on('click', function(){
      selectTheme(theme);
    });
  }
});
function popdown(id) {
  $(id).css('opacity','0');
  setTimeout(function(){$(id).css('z-index','-1');},400);
}
function popup(id,title, message) {
  $(id).css('opacity', '1');
  $(id).css('z-index','999999');
  $(id + ' .popup-title').html(title);
  $(id + ' .popup-content').html(message);
}
function selectTheme(theme) {
  $(".dropdownLinks li").removeClass('choiceSelected')
  $("#theme-" + theme).addClass('choiceSelected')
  changeTheme(theme);
}
function changeTheme(theme) {
  let properties = themeProperties[theme];
  for (let i = 0; i< properties.length; i++) {
    let tdata = properties[i].split(': ');
    console.log(tdata);
    document.documentElement.style.setProperty(tdata[0], tdata[1]); 
  }
}