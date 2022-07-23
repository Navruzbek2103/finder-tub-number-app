var elForm = document.querySelector(".form");
var elBody = document.querySelector("#body");
var elInput = document.querySelector("#number");
var elParagraphOne = document.querySelector(".tub1")
var elParagraphTwo = document.querySelector(".tub2")


elForm.addEventListener("input", function(mission){
  mission.preventDefault();

  var count = 0;
  var box = [];

  if(elInput.value.length != 0){
    if(!(isNaN(elInput.value))){
      for(i = 1; i <= elInput.value; i++){
        var compute = 0;
        if(elInput.value % i == 0){
          count++;
        }
        for(j = 1; j <= i; j++){
          if(i % j == 0){
            compute++;
          }
        }
        if(compute == 2){
          for(p = 2; p <= compute; p++){
            box.push(i);
            elParagraphTwo.textContent = elInput.value +  " gacha bo'lgan tub sonlar: " + box;

          }

        }
      }
      if(count == 2){
        elParagraphOne.textContent = elInput.value + " -> tub son"
      }
      else{
        elParagraphOne.textContent = elInput.value + " -> tub son emas"
      }
    }
    else{
      alert("Raqamli qiymat kiriting...")
    }
  }
  else{
    elParagraphOne.textContent = "";
    elParagraphTwo.textContent = "";
    alert("Ma'lumot kiritilmadi, yoki bo'sh")
  }
})
