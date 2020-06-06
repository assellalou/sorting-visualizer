//els container
const visualizor = document.querySelector(".visual");
//range slider
const elnSlide = document.querySelector(".eln");
//speed slider
const spSlide = document.querySelector(".speed");
//randomize
const radomBtn = document.querySelector(".random");
//sort buttons
const bubbleSortBtn = document.querySelector(".bubbleSort");
const selecSortBtn = document.querySelector(".selectionSort");
const insSortBtn = document.querySelector(".insertionSort");

//listenning to the slider
elnSlide.addEventListener("change", () => {
  generateEls(elnSlide.value);
});

//listenning to Randomize btn
radomBtn.addEventListener("click", () => {
  generateEls(elnSlide.value);
});

//sort listeners
bubbleSortBtn.addEventListener("click", () => BubbleSort(), false);
selecSortBtn.addEventListener("click", () => SelectionSort(), false);
insSortBtn.addEventListener("click", () => InsertionSort(), false);

//generate elements from slider values and random number for heights
function generateEls(elementsNumber) {
  visualizor.innerHTML = "";
  for (let i = 0; i < elementsNumber; i++) {
    let length = Math.floor(Math.random() * 800) + 50;
    let div = document.createElement("div");
    div.style.height = length + "px";
    div.className = "el";
    if (elementsNumber < 60) {
      heightText = document.createElement("h3");
      heightText.innerHTML = length;
      div.appendChild(heightText);
    }
    visualizor.appendChild(div);
  }
}

//bubble sort algorithm
async function BubbleSort() {
  let els = visualizor.children;
  let length = els.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (j < length) {
        if (els[j].offsetHeight > els[j + 1].offsetHeight) {
          els[j].style.background = "#CD0000";
          els[j + 1].style.background = "#CD0000";
          await swap(j, j + 1);
        }
      }
    }
  }
}

//Selection sort algo
async function SelectionSort() {
  let els = visualizor.children;
  let length = els.length;
  let min = 0;
  els[min].style.background = "#CD0000";
  for (let i = 0; i < length; i++) {
    min = i;
    for (let j = i + 1; j < length; j++) {
      if (els[min].offsetHeight > els[j].offsetHeight) {
        min = j;
        c;
      }
    }
    await swap(i, min);
  }
}

//Insertion sort
async function InsertionSort() {
  let els = visualizor.children;
  let length = els.length;
  for (let i = 0; i < length; i++) {
    for (j = i - 1; j > -1 && els[j].offsetHeight > els[i].offsetHeight; j--) {
      els[j].style.background = "#CD0000";
      els[i].style.background = "#CD0000";
      await swap(j + 1, j);
    }
    await swap(j + 1, i);
  }
}

//delay promise
function timer(ms) {
  return new Promise((res) => setTimeout(res, ms));
}
//swap elements(els)
async function swap(fi, si) {
  await timer(Math.abs(spSlide.value));
  visualizor.children[fi].style.background = "#00FF00";
  visualizor.children[si].style.background = "#00FF00";
  visualizor.insertBefore(visualizor.children[si], visualizor.children[fi]);
}

//debuging els heights
function logHeights(tab) {
  console.log("new");
  for (let index = 0; index < tab.length; index++) {
    const element = tab[index];

    console.log(element.offsetHeight);
  }
}
