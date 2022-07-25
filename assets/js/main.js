const featuresButton = document.getElementById('featuresbutton');
const companyButton = document.getElementById('companybutton');

featuresButton.addEventListener('click', function(e) {
    const featuresDrop = document.getElementById('featuresdrop');

    if(featuresDrop.style.display === "block") {
      featuresDrop.style.display = "none";
    } else {
      dismiss();
      featuresDrop.style.display = "block";
      e.stopPropagation();
    }
});

companyButton.addEventListener('click', function(e) {
    const companyDrop = document.getElementById('companydrop');

    if(companyDrop.style.display === "block") {
        companyDrop.style.display = "none";
    } else {
        dismiss();
        companyDrop.style.display = "block";
        e.stopPropagation();
    }
});

function dismiss() {
    let subMenu = document.querySelectorAll('.dismiss');
    for (i = 0; i < subMenu.length; i++) {
        subMenu[i].style.display = 'none';
    }
}

window.addEventListener('click', function(e){
    dismiss();
});

function openMenu() {
    const mobileMenu = document.getElementById('navMobile');
    mobileMenu.style.width = '14rem';
}

function closeMenu() {
    const mobileMenu = document.getElementById('navMobile');
    mobileMenu.style.width = '0';
}

function openFeature() {
    const featureMobile = document.getElementById('featureMobile');

    if (featureMobile.style.display === 'block') {
        featureMobile.style.display = 'none';
    } else {
        featureMobile.style.display = 'block';
    }
}

function openCompany() {
    const companyMobile = document.getElementById('companyMobile');

    if (companyMobile.style.display === 'block') {
        companyMobile.style.display = 'none';
    } else {
        companyMobile.style.display = 'block';
    }
}