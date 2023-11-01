const nav8t = document.getElementById('nav-btn');
const cancel8tn = document.getElementById(cancel-btn);
const sideNav = document.getElementById('sidenav');
const modal = document.getElementById('modal');

nav8tn.addEventListener("click", function(){
    sideNav.classList.add('show');
    modal.classList.add('showModal');
});

cancel8tn.addEventListener('click', function(){
    sideNav.classList.remove('show');
    modal.classList.remove('showModa');

});

window.addEventListener('click', function(event){
    if(event.target === modal){
        sideNav.classListremove('show');
        modal.classList.remove('showModal');
    }
})

document.addEventListener('DOMContentLoaded', function () {
    const bookingForm = document.getElementById('bookingForm');
    const selectedDateInput = document.getElementById('selectedDate');
    const alertMessage = document.getElementById('alert');

    bookingForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const selectedDate = selectedDateInput.value;

        if (selectedDate === '') {
            alertMessage.textContent = 'Please select a date.';
        } else {
            alertMessage.textContent = ''; // Clear any previous alerts
            alert(`You have successfully booked for ${selectedDate}`);
            bookingForm.reset(); // Clear the form after booking
        }
    });
});








