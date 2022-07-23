var elForm = document.querySelector(".form");
var elBody = document.querySelector("#body");
var elInput = document.querySelector("#number");
var elParagraphOne = document.querySelector(".tub1")
var elParagraphTwo = document.querySelector(".tub2")


elForm.addEventListener("input", function(mission){
  mission.preventDefault();

  var count = 0;
  var compute = 0;

  if(elInput.value.length != 0){
    if(!(isNaN(elInput.value))){
      for(i = 1; i <= elInput.value; i++){
        if(elInput.value % i == 0){
          count++;
        }
      }
      if(count == 2){
        elParagraphOne.textContent = elInput.value + " - Tub son"
      }
      else{
        elParagraphOne.textContent = elInput.value + " - Tub son emas"
      }
    }
    else{
      alert("Raqamli qiymat kiriting...")
    }
  }
  else{
    alert("Ma'lumot kiritilmadi, yoki bo'sh")
  }
})
