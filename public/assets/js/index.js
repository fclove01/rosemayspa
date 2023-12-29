jarallax(document.querySelectorAll('.jarallax'), {
  speed: 0.2,
});


document.addEventListener('DOMContentLoaded',() => {
  document.querySelectorAll("form").forEach((f)=> {
    f.addEventListener("submit", function (event) {
      event.preventDefault();
  })
  }); 
  document.querySelector('.spa-special__offer').addEventListener('click', () => {
    $('#myModal').modal('show')
  }) 
  const btn2 = document.getElementById('submit2')
  btn2.addEventListener('click', () => {
    const name = document.getElementById('name_').value
    const phone = document.getElementById('tel_').value
    const email = document.getElementById('email_').value
    const data = {name,phone,email}
    const ctime = new Date()
    data.ctime=ctime.toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })
    if (name != "" && phone != "" &&  email != ""){
      btn2.classList.add('d-none')
      document.getElementById('loader2').classList.remove('d-none')
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
        btn2.className = "btn btn-success"
        btn2.textContent = "SUCESS"
        document.getElementById('loader2').classList.add('d-none')
        btn2.classList.remove('d-none')
        setTimeout(() => {
            if(btn2.className == 'btn btn-success'){
              btn2.className = 'btn btn-primary'
              btn2.textContent = "Đăng Ký Ngay"
            }
        }, 2000)
      })
      .catch(error => {
          console.error('Error:', error);
      }); 
    } 
  })

  const btn = document.getElementById('submit')
  if(btn){
    btn.addEventListener('click', () => {
      const name = document.getElementById('InputName').value
      const phone = document.getElementById('InputPhone').value
      const services = document.getElementById('services').value
      const email = document.getElementById('email_2').value
      const date = document.getElementById('date').value
      const note = document.getElementById('note').value
      const data = {name,phone,email,services,date,note}
      if (name != "" && phone != ""){
        btn.classList.add('d-none')
        document.getElementById('loader1').classList.remove('d-none')
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
          document.getElementById('loader1').classList.add('d-none')
          btn.classList.remove('d-none')
          setTimeout(() => {
              if(btn.className == 'btn btn-success'){
                  btn.className = 'btn btn-primary'
                  btn.textContent = "BOOK NOW"
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

const url = 'https://script.google.com/macros/s/AKfycbwkiwdrGThRpOwMeVAEBevM8mWG442jWO0dP7FT_Ks7wTp4tfzp_YOvFOR0GJs0V9z7/exec'