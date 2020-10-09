// ELEMENTS
const elements = {
    sectionTours: document.getElementById('section-tours'),
    popup: document.getElementById('popup'),
    popUpClose: document.querySelector('.popup__close')
};


// window.addEventListener('beforeunload', () => {
//     elements.sectionTours.style.visibility="hidden";

//     elements.popup.style.display="none";
//     elements.popup.style.width="0%";
//     elements.popup.style.visibility="hidden";
//     elements.popup.style.opacity="0";
// });

window.addEventListener('unload', () => {
    elements.sectionTours.style.visibility="hidden";

    elements.popup.style.display="none";
    elements.popup.style.width="0%";
    elements.popup.style.visibility="hidden";
    elements.popup.style.opacity="0";
});



['load', 'scroll'].forEach(event => {
    window.addEventListener(event, () => {
        elements.sectionTours.style.visibility="visible";
        elements.popup.style.display="block";
        elements.popup.style.width="100%";

    })
})


popup.addEventListener('click', e=> {
    if (e.target == popup) {
        elements.popUpClose.click()
    }
})