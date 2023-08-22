

const addBtn = document.querySelectorAll(".soldItem button");
const soldItem = document.querySelectorAll(".soldItem img");


addBtn.forEach((e) => {
  
    let count = 1;

  e.addEventListener("click", () => {


    e.innerHTML = ""

    let minusBtn = document.createElement("button");
    let plusBtn = document.createElement("button");
    let result = document.createElement("button");

    minusBtn.classList.add("addBtn");
    result.classList.add("addBtn");
    plusBtn.classList.add("addBtn");

    minusBtn.innerHTML = "-";
    plusBtn.innerHTML = "+";
    result.innerHTML = count;


    minusBtn.addEventListener("click", () => {
      count--;
    })

    plusBtn.addEventListener("click", () => {
      count++;
    })

    e.appendChild(minusBtn);
    e.appendChild(result);
    e.appendChild(plusBtn);

    
    if (count < 1) {
      minusBtn.disabled = true;
    }


  })

})


soldItem.forEach((e) => {
  e.addEventListener("click", () => {
    location.href = "product.html";
  })
})

