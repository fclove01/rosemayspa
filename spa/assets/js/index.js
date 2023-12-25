jarallax(document.querySelectorAll('.jarallax'), {
  speed: 0.2,
});


document.addEventListener('DOMContentLoaded',() => {
  document.getElementById("myForm").addEventListener("submit", function (event) {
      event.preventDefault();
  });
  document.querySelector('.spa-special__offer').addEventListener('click', () => {
    $('#myModal').modal('show')
  })
const btn = document.getElementById('submit')
if(btn){
  btn.addEventListener('click', () => {
    const name = document.getElementById('InputName').value
    const phone = document.getElementById('InputPhone').value
    const services = document.getElementById('services').value
    const date = document.getElementById('date').value
    const note = document.getElementById('note').value
    const data = {name,phone,services,date,note}
    if (name != "" && phone != ""){
      btn.classList.add('d-none')
      document.querySelector('.loader').classList.remove('d-none')
      const url = 'https://script.google.com/macros/s/AKfycbyejLMtAafFV7nn0goTQYZUiHkfBE45k5MY0mCrN2NlhiAeHvHiJ71X2KlRPaDe44eB/exec'
      const ctime = new Date()
      data.ctime=ctime.toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'no-cors',
        body: JSON.stringify(data)
      })
      .then(response => response.text())
      .then(result => {
        btn.className = "btn btn-success"
        btn.textContent = "SUCESS"
        document.querySelector('.loader').classList.add('d-none')
        btn.classList.remove('d-none')
        setTimeout(() => {
            if(btn.className == 'btn btn-success'){
                btn.className = 'btn btn-primary'
            }
        }, 2000)
      })
      .catch(error => {
          console.error('Error:', error);
      }); 
    } 
  })
}
})

