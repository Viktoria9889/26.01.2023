

const elModal = document.querySelector('.modal');
const elBtnA = document.querySelector('.btn_a');
const elBtnModal = document.querySelector('.btn_modal');

elBtnA.addEventListener('click', () => {
    elModal.classList.add('show');

});

elBtnModal.addEventListener('click', () => {
    elModal.classList.remove('show');
});
