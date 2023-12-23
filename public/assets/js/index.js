jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.2,
});


document.addEventListener('DOMContentLoaded',() => {
    document.getElementById("myForm").addEventListener("submit", function (event) {
        event.preventDefault();
    });
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
        fetch('/submit-form', {
            method: "POST", 
            mode: "cors", 
            cache: "no-cache", 
            credentials: "same-origin", 
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data), 
          })
        .then(e=>e.json())
        .then((e) => {
        if (e.ok){
            btn.className = "btn btn-success"
            btn.textContent = "SUCESS"
            document.querySelector('.loader').classList.add('d-none')
            btn.classList.remove('d-none')
            setTimeout(() => {
                if(btn.className == 'btn btn-success'){
                    btn.className = 'btn btn-primary'
                }
            }, 2000)
        }
        })
        .catch ((err) => {
        console.error(err)
        })
      } 
    })
  }
})

