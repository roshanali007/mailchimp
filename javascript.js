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
    
    const allDropdownItems = document.querySelectorAll(".dropdown-item");
    allDropdownItems.forEach(item => {
        if (item !== button.parentElement) {
            item.classList.remove("open");
        }
    });

    
    button.parentElement.classList.toggle("open");
}


