const numberOfShootingStars = new Array(10);
const numberOfStarContainers = new Array(2);
let isToggle = true;
let status = 'Enable';
const pageTitles = ['Restybrix', 'Introduction', 'Ubicoin'];


function getVisibility() {
    const isStatusEnable = status === 'Enable';

    return isStatusEnable ? 'hidden' : 'visible';
}

function changeBackground() {
    isToggle = !isToggle;
    status = isToggle ? 'Enable' : 'Disable';

    const powerButton = document.getElementsByClassName('power-button')[0];
    powerButton.style['filter'] = getPowerButtonFilter();

    const blackBackground = document.getElementsByClassName('black-background')[0];
    blackBackground.style['visibility'] = getVisibility();

    const flashlight = document.getElementsByClassName('flashlight')[0];
    flashlight.style['filter'] = getFilters();
}

function getFilters() {
    const isStatusEnable = status === 'Enable';
    const filterForBlackScreen = 'invert(0.8) brightness(0.2)';

    return isStatusEnable ? 'none' : filterForBlackScreen;
}

function getPowerButtonFilter() {
    const isStatusEnable = status === 'Enable';
    const filterForBlackScreen = 'none';
    const filterForVisibleScreen = 'hue-rotate(86deg) brightness(200%)';

    return isStatusEnable ? filterForVisibleScreen : filterForBlackScreen;
}