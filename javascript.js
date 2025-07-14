document.addEventListener("DOMContentLoaded", function() {
    const navBar = document.querySelector(".nav_bar");
    const navBody = document.querySelector(".nav_body"); 
    const initialNavBarOffset = navBar.offsetTop; 

    
    let navBarHeight = navBody.offsetHeight;

    function stickyNav() {
        if (window.scrollY >= initialNavBarOffset) {
            navBar.classList.add("sticky");
            
            if (document.body.style.paddingTop === "" || document.body.style.paddingTop === "0px") {
                 document.body.style.paddingTop = navBarHeight + "px";
            }
        } else {
            navBar.classList.remove("sticky");
            
            document.body.style.paddingTop = "0";
        }
    }

    
    window.addEventListener("scroll", stickyNav);

    
    stickyNav();

    
    window.addEventListener("resize", function() {
        navBarHeight = navBody.offsetHeight;
        stickyNav();
    });
});
function showsidebar(){
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function closesidebar(){
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}
 function updateSelectedLanguage() {
        const selectElement = document.getElementById('languageSelect');
        const selectedValue = selectElement.value;
        
        document.getElementById('selectedLanguageText').innerText = selectedValue;
        dropcontent.style.display = 'none'
    }

    document.addEventListener('DOMContentLoaded', (event) => {
        updateSelectedLanguage();
    });

function toggleDropdown(button) {
  const dropdownId = button.getAttribute("data-dropdown");
  const dropdown = document.getElementById(dropdownId);

  
  document.querySelectorAll(".dropdown-content").forEach(item => {
    if (item !== dropdown) item.classList.remove("open");
  });

  
  dropdown.classList.toggle("open");

  
  document.querySelectorAll(".dropdown-btn .arrow-icon").forEach(icon => {
    icon.style.transform = "rotate(0deg)";
  });

  if (dropdown.classList.contains("open")) {
    button.querySelector(".arrow-icon").style.transform = "rotate(180deg)";
  }
}


