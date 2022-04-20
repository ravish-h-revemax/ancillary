// Add to Cart Script
//import SeatsApiResponse from '../js/SeatsApiResponse.json';
//let SeatsApiResponse = import('/SeatsApiResponse.js');
let bomKulCheckBox = document.querySelector("#bomKulCheckBox");
let kulSydCheckBox = document.querySelector("#kulSydCheckBox");
let bomKulCheckBox2 = document.querySelector("#bomKulCheckBox2");
let kulSydCheckBox2 = document.querySelector("#kulSydCheckBox2");

let cartItemHead = document.querySelector("#cartItemHead");
let cartPassenger1 = document.querySelector("#cartPassenger1");
let cartPassenger2 = document.querySelector("#cartPassenger2");
let cartPassenger3 = document.querySelector("#cartPassenger3");
let cartPassenger4 = document.querySelector("#cartPassenger4");
let addCartBtn = document.querySelector("#addCartBtn");
let noItems = document.querySelector("#noItems");

function bomKul() {
  let slider1 = document.querySelector("#slider1");
  if (bomKulCheckBox.checked) {
    console.log("Checkedd.........");
    noItems.style.display = "none";
    cartItemHead.style.display = "block";
    cartPassenger1.style.display = "block";
    addCartBtn.style.display = "block";
    slider1.disabled = false;
  } else {
    cartPassenger1.style.display = "none";
  }

  if (
    bomKulCheckBox.checked == false &&
    bomKulCheckBox2.checked == false &&
    kulSydCheckBox.checked == false &&
    kulSydCheckBox2.checked == false
  ) {
    addCartBtn.style.display = "none";
    cartItemHead.style.display = "none";
    noItems.style.display = "block";
  }
}

function bomKul2() {
  if (bomKulCheckBox2.checked) {
    console.log("Checkedd.........");
    noItems.style.display = "none";
    cartItemHead.style.display = "block";
    cartPassenger3.style.display = "block";
    addCartBtn.style.display = "block";
  } else {
    cartPassenger3.style.display = "none";
  }

  if (
    bomKulCheckBox.checked == false &&
    bomKulCheckBox2.checked == false &&
    kulSydCheckBox.checked == false &&
    kulSydCheckBox2.checked == false
  ) {
    addCartBtn.style.display = "none";
    cartItemHead.style.display = "none";
    noItems.style.display = "block";
  }
}

function kulSyd() {
  if (kulSydCheckBox.checked) {
    console.log("Checkedd.........");
    noItems.style.display = "none";
    cartItemHead.style.display = "block";
    cartPassenger2.style.display = "block";
    addCartBtn.style.display = "block";
  } else {
    cartPassenger2.style.display = "none";
  }
  if (
    bomKulCheckBox.checked == false &&
    bomKulCheckBox2.checked == false &&
    kulSydCheckBox.checked == false &&
    kulSydCheckBox2.checked == false
  ) {
    addCartBtn.style.display = "none";
    cartItemHead.style.display = "none";
    noItems.style.display = "block";
  }
}

function kulSyd2() {
  if (kulSydCheckBox2.checked) {
    console.log("Checkedd.........");
    noItems.style.display = "none";
    cartItemHead.style.display = "block";
    cartPassenger4.style.display = "block";
    addCartBtn.style.display = "block";
  } else {
    cartPassenger4.style.display = "none";
  }
  if (
    bomKulCheckBox.checked == false &&
    bomKulCheckBox2.checked == false &&
    kulSydCheckBox.checked == false &&
    kulSydCheckBox2.checked == false
  ) {
    addCartBtn.style.display = "none";
    cartItemHead.style.display = "none";
    noItems.style.display = "block";
  }
}

// function showHideCart1(bomKulCheckBox){
//     cartItemHead.style.display =  bomKulCheckBox.checked = "block";
//     cartPassenger1.style.display =  bomKulCheckBox.checked ? "block" : "none";
//     addCartBtn.style.display =  bomKulCheckBox.checked = "block";
//     noItems.style.display =  bomKulCheckBox.checked = "none";
// }

// function showHideCart2(kulSydCheckBox){
//     cartItemHead.style.display =  kulSydCheckBox.checked = "block";
//     cartPassenger2.style.display =  kulSydCheckBox.checked ? "block" : "none";
//     addCartBtn.style.display =  kulSydCheckBox.checked = "block";
//     noItems.style.display =  kulSydCheckBox.checked = "none";
// }

// DropwDown selection
let passengerSelect1 = document.querySelector("#p1");
let passengerSelect2 = document.querySelector("#p2");
let passengerSelect3 = document.querySelector("#p3");
let passengerSelect4 = document.querySelector("#p4");
let passengerSelect5 = document.querySelector("#p5");
let passengerSelect6 = document.querySelector("#p6");
let arrowIcon1 = document.querySelector("#arrowIcon1");
let arrowIcon2 = document.querySelector("#arrowIcon2");
let arrowIcon3 = document.querySelector("#arrowIcon3");
let arrowIcon4 = document.querySelector("#arrowIcon4");
let arrowIcon5 = document.querySelector("#arrowIcon5");
let arrowIcon6 = document.querySelector("#arrowIcon6");

let selectClass1 = document.querySelector("#selectClass1");
let selectBusiness1 = document.querySelector("#selectBusiness1");
let selectFirst1 = document.querySelector("#selectFirst1");

let selectClass2 = document.querySelector("#selectClass2");
let selectBusiness2 = document.querySelector("#selectBusiness2");
let selectFirst2 = document.querySelector("#selectFirst2");

let dropdown1 = document.querySelector("#list1");
let dropdown2 = document.querySelector("#list2");
let dropdown3 = document.querySelector("#list3");
let dropdown4 = document.querySelector("#list4");
let dropdown5 = document.querySelector("#list5");
let dropdown6 = document.querySelector("#list6");

passengerSelect1.addEventListener("click", function () {
  // dropdown1.style.display = "block";
  if (dropdown1.style.display == "block") {
    dropdown1.style.display = "none";
    arrowIcon1.style.transform = "rotate(0deg)";
  } else {
    dropdown1.style.display = "block";
    arrowIcon1.style.transform = "rotate(180deg)";
  }
});
passengerSelect2.addEventListener("click", function () {
  // dropdown2.style.display = "block";
  if (dropdown2.style.display == "block") {
    dropdown2.style.display = "none";
    arrowIcon2.style.transform = "rotate(0deg)";
  } else {
    dropdown2.style.display = "block";
    arrowIcon2.style.transform = "rotate(180deg)";
  }
});
passengerSelect3.addEventListener("click", function () {
  // dropdown3.style.display = "block";
  if (dropdown3.style.display == "block") {
    dropdown3.style.display = "none";
    arrowIcon3.style.transform = "rotate(0deg)";
  } else {
    dropdown3.style.display = "block";
    arrowIcon3.style.transform = "rotate(180deg)";
  }
  dropdown4.style.display = "none";
  dropdown5.style.display = "none";
  dropdown6.style.display = "none";
});

passengerSelect4.addEventListener("click", function () {
  // dropdown4.style.display = "block";
  if (dropdown4.style.display == "block") {
    dropdown4.style.display = "none";
    arrowIcon4.style.transform = "rotate(0deg)";
  } else {
    dropdown4.style.display = "block";
    arrowIcon4.style.transform = "rotate(180deg)";
  }
  dropdown3.style.display = "none";
  dropdown5.style.display = "none";
  dropdown6.style.display = "none";
});
passengerSelect5.addEventListener("click", function () {
  // dropdown5.style.display = "block";
  if (dropdown5.style.display == "block") {
    dropdown5.style.display = "none";
    arrowIcon5.style.transform = "rotate(0deg)";
  } else {
    dropdown5.style.display = "block";
    arrowIcon5.style.transform = "rotate(180deg)";
  }
  dropdown4.style.display = "none";
  dropdown3.style.display = "none";
  dropdown6.style.display = "none";
});
passengerSelect6.addEventListener("click", function () {
  // dropdown6.style.display = "block";
  if (dropdown6.style.display == "block") {
    dropdown6.style.display = "none";
    arrowIcon6.style.transform = "rotate(0deg)";
  } else {
    dropdown6.style.display = "block";
    arrowIcon6.style.transform = "rotate(180deg)";
  }
  dropdown4.style.display = "none";
  dropdown5.style.display = "none";
  dropdown3.style.display = "none";
});

selectBusiness1.addEventListener("click", function () {
  selectClass1.innerHTML = "Business Class";
  dropdown1.style.display = "none";
  arrowIcon1.style.transform = "rotate(0deg)";
});
selectBusiness2.addEventListener("click", function () {
  selectClass2.innerHTML = "Business Class";
  dropdown2.style.display = "none";
  arrowIcon2.style.transform = "rotate(0deg)";
});

selectFirst1.addEventListener("click", function () {
  selectClass1.innerHTML = "First Class";
  dropdown1.style.display = "none";
  arrowIcon1.style.transform = "rotate(0deg)";
});
selectFirst2.addEventListener("click", function () {
  selectClass2.innerHTML = "First Class";
  dropdown2.style.display = "none";
  arrowIcon2.style.transform = "rotate(0deg)";
});

//Menu Lists
let upgradeTravel = document.querySelector("#upgradeTravel");
let preferredSeat = document.querySelector("#preferredSeat");
let emptySeat = document.querySelector("#emptySeat");
let addLuggage = document.querySelector("#addLuggage");
let addLounge = document.querySelector("#addLounge");

//Menu Containers
let passenger = document.querySelector(".passenger");
let preferredSeatContainer = document.querySelector(".preferredSeatContainer");
let emptySeatContainer = document.querySelector("#emptySeatContainer");
let addLuggageContainer = document.querySelector("#addLuggageContainer");
let addLoungeContainer = document.querySelector("#addLoungeContainer");

upgradeTravel.addEventListener("click", function () {
  passenger.style.display = "block";
  preferredSeatContainer.style.display = "none";
  emptySeatContainer.style.display = "none";
  addLuggageContainer.style.display = "none";
  addLoungeContainer.style.display = "none";
  upgradeTravel.classList.add("linkActive");
  preferredSeat.classList.remove("linkActive");
  emptySeat.classList.remove("linkActive");
  addLuggage.classList.remove("linkActive");
  addLounge.classList.remove("linkActive");
});

preferredSeat.addEventListener("click", function () {
  preferredSeatContainer.style.display = "block";
  passenger.style.display = "none";
  emptySeatContainer.style.display = "none";
  addLuggageContainer.style.display = "none";
  addLoungeContainer.style.display = "none";
  preferredSeat.classList.add("linkActive");
  upgradeTravel.classList.remove("linkActive");
  emptySeat.classList.remove("linkActive");
  addLuggage.classList.remove("linkActive");
  addLounge.classList.remove("linkActive");
});

emptySeat.addEventListener("click", function () {
  emptySeatContainer.style.display = "block";
  passenger.style.display = "none";
  preferredSeatContainer.style.display = "none";
  addLuggageContainer.style.display = "none";
  addLoungeContainer.style.display = "none";
  emptySeat.classList.add("linkActive");
  upgradeTravel.classList.remove("linkActive");
  preferredSeat.classList.remove("linkActive");
  addLuggage.classList.remove("linkActive");
  addLounge.classList.remove("linkActive");
});

addLuggage.addEventListener("click", function () {
  addLuggageContainer.style.display = "block";
  passenger.style.display = "none";
  preferredSeatContainer.style.display = "none";
  emptySeatContainer.style.display = "none";
  addLoungeContainer.style.display = "none";
  addLuggage.classList.add("linkActive");
  upgradeTravel.classList.remove("linkActive");
  emptySeat.classList.remove("linkActive");
  preferredSeat.classList.remove("linkActive");
  addLounge.classList.remove("linkActive");
});

addLounge.addEventListener("click", function () {
  addLoungeContainer.style.display = "block";
  passenger.style.display = "none";
  preferredSeatContainer.style.display = "none";
  emptySeatContainer.style.display = "none";
  addLuggageContainer.style.display = "none";
  addLounge.classList.add("linkActive");
  upgradeTravel.classList.remove("linkActive");
  emptySeat.classList.remove("linkActive");
  preferredSeat.classList.remove("linkActive");
  addLuggage.classList.remove("linkActive");
});

// POPUP Images Script----------------------------------------------

let showCabin1 = document.querySelector("#showCabin1");
let closeCabin1 = document.querySelector("#closeCabin1");
let cabinImageContainer1 = document.querySelector("#cabinImageContainer1");

let showCabin2 = document.querySelector("#showCabin2");
let closeCabin2 = document.querySelector("#closeCabin2");
let cabinImageContainer2 = document.querySelector("#cabinImageContainer2");

let showCabin3 = document.querySelector("#showCabin3");
let closeCabin3 = document.querySelector("#closeCabin3");
let cabinImageContainer3 = document.querySelector("#cabinImageContainer3");

let showCabin4 = document.querySelector("#showCabin4");
let closeCabin4 = document.querySelector("#closeCabin4");
let cabinImageContainer4 = document.querySelector("#cabinImageContainer4");

let showCabin5 = document.querySelector("#showCabin5");
let closeCabin5 = document.querySelector("#closeCabin5");
let cabinImageContainer5 = document.querySelector("#cabinImageContainer5");

let showCabin6 = document.querySelector("#showCabin6");
let closeCabin6 = document.querySelector("#closeCabin6");
let cabinImageContainer6 = document.querySelector("#cabinImageContainer6");

let showCabin7 = document.querySelector("#showCabin7");
let closeCabin7 = document.querySelector("#closeCabin7");
let cabinImageContainer7 = document.querySelector("#cabinImageContainer7");

let showCabin8 = document.querySelector("#showCabin8");
let closeCabin8 = document.querySelector("#closeCabin8");
let cabinImageContainer8 = document.querySelector("#cabinImageContainer8");

let showCabin9 = document.querySelector("#showCabin9");
let closeCabin9 = document.querySelector("#closeCabin9");
let cabinImageContainer9 = document.querySelector("#cabinImageContainer9");

let showCabin10 = document.querySelector("#showCabin10");
let closeCabin10 = document.querySelector("#closeCabin10");
let cabinImageContainer10 = document.querySelector("#cabinImageContainer10");

let showCabin11 = document.querySelector("#showCabin11");
let closeCabin11 = document.querySelector("#closeCabin11");
let cabinImageContainer11 = document.querySelector("#cabinImageContainer11");

let showCabin12 = document.querySelector("#showCabin12");
let closeCabin12 = document.querySelector("#closeCabin12");
let cabinImageContainer12 = document.querySelector("#cabinImageContainer12");

let showCabin13 = document.querySelector("#showCabin13");
let closeCabin13 = document.querySelector("#closeCabin13");
let cabinImageContainer13 = document.querySelector("#cabinImageContainer13");

let showCabin14 = document.querySelector("#showCabin14");
let closeCabin14 = document.querySelector("#closeCabin14");
let cabinImageContainer14 = document.querySelector("#cabinImageContainer14");

let showCabin15 = document.querySelector("#showCabin15");
let closeCabin15 = document.querySelector("#closeCabin15");
let cabinImageContainer15 = document.querySelector("#cabinImageContainer15");

let showCabin16 = document.querySelector("#showCabin16");
let closeCabin16 = document.querySelector("#closeCabin16");
let cabinImageContainer16 = document.querySelector("#cabinImageContainer16");

let showCabin17 = document.querySelector("#showCabin17");
let closeCabin17 = document.querySelector("#closeCabin17");
let cabinImageContainer17 = document.querySelector("#cabinImageContainer17");

let showCabin18 = document.querySelector("#showCabin18");
let closeCabin18 = document.querySelector("#closeCabin18");
let cabinImageContainer18 = document.querySelector("#cabinImageContainer18");

showCabin1.addEventListener("click", function () {
  cabinImageContainer1.style.display = "block";
  cabinImageContainer2.style.display = "none";
  cabinImageContainer3.style.display = "none";
  cabinImageContainer4.style.display = "none";
});
closeCabin1.addEventListener("click", function () {
  cabinImageContainer1.style.display = "none";
});

showCabin2.addEventListener("click", function () {
  cabinImageContainer2.style.display = "block";
  cabinImageContainer1.style.display = "none";
  cabinImageContainer3.style.display = "none";
  cabinImageContainer4.style.display = "none";
});
closeCabin2.addEventListener("click", function () {
  cabinImageContainer2.style.display = "none";
});

showCabin3.addEventListener("click", function () {
  cabinImageContainer3.style.display = "block";
  cabinImageContainer1.style.display = "none";
  cabinImageContainer2.style.display = "none";
  cabinImageContainer4.style.display = "none";
});
closeCabin3.addEventListener("click", function () {
  cabinImageContainer3.style.display = "none";
});

showCabin4.addEventListener("click", function () {
  cabinImageContainer4.style.display = "block";
  cabinImageContainer1.style.display = "none";
  cabinImageContainer2.style.display = "none";
  cabinImageContainer3.style.display = "none";
});
closeCabin4.addEventListener("click", function () {
  cabinImageContainer4.style.display = "none";
});

showCabin5.addEventListener("click", function () {
  cabinImageContainer5.style.display = "block";
  cabinImageContainer1.style.display = "none";
  cabinImageContainer2.style.display = "none";
  cabinImageContainer3.style.display = "none";
  cabinImageContainer4.style.display = "none";
  cabinImageContainer6.style.display = "none";
  cabinImageContainer7.style.display = "none";
  cabinImageContainer8.style.display = "none";
});
closeCabin5.addEventListener("click", function () {
  cabinImageContainer5.style.display = "none";
});

showCabin6.addEventListener("click", function () {
  cabinImageContainer6.style.display = "block";
  cabinImageContainer1.style.display = "none";
  cabinImageContainer2.style.display = "none";
  cabinImageContainer3.style.display = "none";
  cabinImageContainer4.style.display = "none";
  cabinImageContainer5.style.display = "none";
  cabinImageContainer7.style.display = "none";
  cabinImageContainer8.style.display = "none";
});
closeCabin6.addEventListener("click", function () {
  cabinImageContainer6.style.display = "none";
});

showCabin7.addEventListener("click", function () {
  cabinImageContainer7.style.display = "block";
  cabinImageContainer1.style.display = "none";
  cabinImageContainer2.style.display = "none";
  cabinImageContainer3.style.display = "none";
  cabinImageContainer4.style.display = "none";
  cabinImageContainer5.style.display = "none";
  cabinImageContainer6.style.display = "none";
  cabinImageContainer8.style.display = "none";
});
closeCabin7.addEventListener("click", function () {
  cabinImageContainer7.style.display = "none";
});

showCabin8.addEventListener("click", function () {
  cabinImageContainer8.style.display = "block";
  cabinImageContainer1.style.display = "none";
  cabinImageContainer2.style.display = "none";
  cabinImageContainer3.style.display = "none";
  cabinImageContainer4.style.display = "none";
  cabinImageContainer5.style.display = "none";
  cabinImageContainer6.style.display = "none";
  cabinImageContainer7.style.display = "none";
});
closeCabin8.addEventListener("click", function () {
  cabinImageContainer8.style.display = "none";
});

showCabin9.addEventListener("click", function () {
  cabinImageContainer9.style.display = "block";
  cabinImageContainer1.style.display = "none";
  cabinImageContainer2.style.display = "none";
  cabinImageContainer3.style.display = "none";
  cabinImageContainer4.style.display = "none";
  cabinImageContainer5.style.display = "none";
  cabinImageContainer6.style.display = "none";
  cabinImageContainer7.style.display = "none";
  cabinImageContainer8.style.display = "none";
  cabinImageContainer10.style.display = "none";
  cabinImageContainer11.style.display = "none";
  cabinImageContainer12.style.display = "none";
  cabinImageContainer13.style.display = "none";
});
closeCabin9.addEventListener("click", function () {
  cabinImageContainer9.style.display = "none";
});

showCabin10.addEventListener("click", function () {
  cabinImageContainer10.style.display = "block";
  cabinImageContainer1.style.display = "none";
  cabinImageContainer2.style.display = "none";
  cabinImageContainer3.style.display = "none";
  cabinImageContainer4.style.display = "none";
  cabinImageContainer5.style.display = "none";
  cabinImageContainer6.style.display = "none";
  cabinImageContainer7.style.display = "none";
  cabinImageContainer8.style.display = "none";
  cabinImageContainer9.style.display = "none";
  cabinImageContainer11.style.display = "none";
  cabinImageContainer12.style.display = "none";
  cabinImageContainer13.style.display = "none";
});
closeCabin10.addEventListener("click", function () {
  cabinImageContainer10.style.display = "none";
});

showCabin11.addEventListener("click", function () {
  cabinImageContainer11.style.display = "block";
  cabinImageContainer1.style.display = "none";
  cabinImageContainer2.style.display = "none";
  cabinImageContainer3.style.display = "none";
  cabinImageContainer4.style.display = "none";
  cabinImageContainer5.style.display = "none";
  cabinImageContainer6.style.display = "none";
  cabinImageContainer7.style.display = "none";
  cabinImageContainer8.style.display = "none";
  cabinImageContainer9.style.display = "none";
  cabinImageContainer10.style.display = "none";
  cabinImageContainer12.style.display = "none";
  cabinImageContainer13.style.display = "none";
});
closeCabin11.addEventListener("click", function () {
  cabinImageContainer11.style.display = "none";
});

showCabin12.addEventListener("click", function () {
  cabinImageContainer12.style.display = "block";
  cabinImageContainer1.style.display = "none";
  cabinImageContainer2.style.display = "none";
  cabinImageContainer3.style.display = "none";
  cabinImageContainer4.style.display = "none";
  cabinImageContainer5.style.display = "none";
  cabinImageContainer6.style.display = "none";
  cabinImageContainer7.style.display = "none";
  cabinImageContainer8.style.display = "none";
  cabinImageContainer9.style.display = "none";
  cabinImageContainer10.style.display = "none";
  cabinImageContainer11.style.display = "none";
  cabinImageContainer13.style.display = "none";
});
closeCabin12.addEventListener("click", function () {
  cabinImageContainer12.style.display = "none";
});

showCabin13.addEventListener("click", function () {
  cabinImageContainer13.style.display = "block";
  cabinImageContainer1.style.display = "none";
  cabinImageContainer2.style.display = "none";
  cabinImageContainer3.style.display = "none";
  cabinImageContainer4.style.display = "none";
  cabinImageContainer5.style.display = "none";
  cabinImageContainer6.style.display = "none";
  cabinImageContainer7.style.display = "none";
  cabinImageContainer8.style.display = "none";
  cabinImageContainer9.style.display = "none";
  cabinImageContainer10.style.display = "none";
  cabinImageContainer11.style.display = "none";
  cabinImageContainer12.style.display = "none";
});
closeCabin13.addEventListener("click", function () {
  cabinImageContainer13.style.display = "none";
});

showCabin14.addEventListener("click", function () {
  cabinImageContainer14.style.display = "block";
  cabinImageContainer15.style.display = "none";
  cabinImageContainer16.style.display = "none";
  cabinImageContainer17.style.display = "none";
  cabinImageContainer18.style.display = "none";
});
closeCabin14.addEventListener("click", function () {
  cabinImageContainer14.style.display = "none";
});

showCabin15.addEventListener("click", function () {
  cabinImageContainer15.style.display = "block";
  cabinImageContainer14.style.display = "none";
  cabinImageContainer16.style.display = "none";
  cabinImageContainer17.style.display = "none";
  cabinImageContainer18.style.display = "none";
});
closeCabin15.addEventListener("click", function () {
  cabinImageContainer15.style.display = "none";
});

showCabin16.addEventListener("click", function () {
  cabinImageContainer16.style.display = "block";
  cabinImageContainer15.style.display = "none";
  cabinImageContainer14.style.display = "none";
  cabinImageContainer17.style.display = "none";
  cabinImageContainer18.style.display = "none";
});
closeCabin16.addEventListener("click", function () {
  cabinImageContainer16.style.display = "none";
});

showCabin17.addEventListener("click", function () {
  cabinImageContainer17.style.display = "block";
  cabinImageContainer15.style.display = "none";
  cabinImageContainer16.style.display = "none";
  cabinImageContainer14.style.display = "none";
  cabinImageContainer18.style.display = "none";
});
closeCabin17.addEventListener("click", function () {
  cabinImageContainer17.style.display = "none";
});

showCabin18.addEventListener("click", function () {
  cabinImageContainer18.style.display = "block";
  cabinImageContainer15.style.display = "none";
  cabinImageContainer16.style.display = "none";
  cabinImageContainer17.style.display = "none";
  cabinImageContainer14.style.display = "none";
});
closeCabin18.addEventListener("click", function () {
  cabinImageContainer18.style.display = "none";
});

// Change Upgrade Page Images onclick
let largeBusinessImage1 = document.querySelector("#largeBusinessImage1");
let largeFirstImage1 = document.querySelector("#largeFirstImage1");

let largeBusinessImage2 = document.querySelector("#largeBusinessImage2");
let largeFirstImage2 = document.querySelector("#largeFirstImage2");

let largeBusinessImage3 = document.querySelector("#largeBusinessImage3");
let largeFirstImage3 = document.querySelector("#largeFirstImage3");

let largeBusinessImage4 = document.querySelector("#largeBusinessImage4");
let largeFirstImage4 = document.querySelector("#largeFirstImage4");

let largeBusinessImage5 = document.querySelector("#largeBusinessImage5");
let largeFirstImage5 = document.querySelector("#largeFirstImage5");

let largeBusinessImage6 = document.querySelector("#largeBusinessImage6");
let largeFirstImage6 = document.querySelector("#largeFirstImage6");

let largeBusinessImage7 = document.querySelector("#largeBusinessImage7");
let largeFirstImage7 = document.querySelector("#largeFirstImage7");

let largeBusinessImage8 = document.querySelector("#largeBusinessImage8");
let largeFirstImage8 = document.querySelector("#largeFirstImage8");

let largeBusinessImage9 = document.querySelector("#largeBusinessImage9");

let largeBusinessImage10 = document.querySelector("#largeBusinessImage10");

let largeBusinessImage11 = document.querySelector("#largeBusinessImage11");

let largeBusinessImage12 = document.querySelector("#largeBusinessImage12");

let largeBusinessImage13 = document.querySelector("#largeBusinessImage13");

let largeBusinessImage14 = document.querySelector("#largeBusinessImage14");

let largeBusinessImage15 = document.querySelector("#largeBusinessImage15");

let largeBusinessImage16 = document.querySelector("#largeBusinessImage16");

let largeBusinessImage17 = document.querySelector("#largeBusinessImage17");

let largeBusinessImage18 = document.querySelector("#largeBusinessImage18");
//  Adding and Removing active class for Images
let smallImages = document.querySelectorAll(".smallImage");
for (let li of smallImages) {
  li.addEventListener("click", function () {
    for (let li of smallImages) {
      li.classList.remove("smallImageActive");
    }
    this.classList.add("smallImageActive");
  });
}

// Image Enlarge Functions
function enlargeBusinessImage1(selectedImage) {
  largeBusinessImage1.src = selectedImage.src;
}
function enlargeFirstImage1(selectedImage) {
  largeFirstImage1.src = selectedImage.src;
}
function enlargeBusinessImage2(selectedImage) {
  largeBusinessImage2.src = selectedImage.src;
}
function enlargeFirstImage2(selectedImage) {
  largeFirstImage2.src = selectedImage.src;
}
function enlargeBusinessImage3(selectedImage) {
  largeBusinessImage3.src = selectedImage.src;
}
function enlargeFirstImage3(selectedImage) {
  largeFirstImage3.src = selectedImage.src;
}
function enlargeBusinessImage4(selectedImage) {
  largeBusinessImage4.src = selectedImage.src;
}
function enlargeFirstImage4(selectedImage) {
  largeFirstImage4.src = selectedImage.src;
}
function enlargeBusinessImage5(selectedImage) {
  largeBusinessImage5.src = selectedImage.src;
}
function enlargeFirstImage5(selectedImage) {
  largeFirstImage5.src = selectedImage.src;
}
function enlargeBusinessImage6(selectedImage) {
  largeBusinessImage6.src = selectedImage.src;
}
function enlargeFirstImage6(selectedImage) {
  largeFirstImage6.src = selectedImage.src;
}
function enlargeBusinessImage7(selectedImage) {
  largeBusinessImage7.src = selectedImage.src;
}
function enlargeFirstImage7(selectedImage) {
  largeFirstImage7.src = selectedImage.src;
}
function enlargeBusinessImage8(selectedImage) {
  largeBusinessImage8.src = selectedImage.src;
}
function enlargeFirstImage8(selectedImage) {
  largeFirstImage8.src = selectedImage.src;
}


function enlargeBusinessImage9(selectedImage) {
  largeBusinessImage9.src = selectedImage.src;
}

function enlargeBusinessImage10(selectedImage) {
  largeBusinessImage10.src = selectedImage.src;
}

function enlargeBusinessImage11(selectedImage) {
  largeBusinessImage11.src = selectedImage.src;
}

function enlargeBusinessImage12(selectedImage) {
  largeBusinessImage12.src = selectedImage.src;
}
function enlargeBusinessImage13(selectedImage) {
  largeBusinessImage13.src = selectedImage.src;
}
function enlargeBusinessImage14(selectedImage) {
  largeBusinessImage14.src = selectedImage.src;
}
function enlargeBusinessImage15(selectedImage) {
  largeBusinessImage15.src = selectedImage.src;
}
function enlargeBusinessImage16(selectedImage) {
  largeBusinessImage16.src = selectedImage.src;
}
function enlargeBusinessImage17(selectedImage) {
  largeBusinessImage17.src = selectedImage.src;
}
function enlargeBusinessImage18(selectedImage) {
  largeBusinessImage18.src = selectedImage.src;
}
// Toggle Business and First Class Images
let businessClass1 = document.querySelector("#businessClass1");
let firstClass1 = document.querySelector("#firstClass1");
let businessClassImages1 = document.querySelector("#businessClassImages1");
let firstClassImages1 = document.querySelector("#firstClassImages1");

let businessClass2 = document.querySelector("#businessClass2");
let firstClass2 = document.querySelector("#firstClass2");
let businessClassImages2 = document.querySelector("#businessClassImages2");
let firstClassImages2 = document.querySelector("#firstClassImages2");

let businessClass3 = document.querySelector("#businessClass3");
let firstClass3 = document.querySelector("#firstClass3");
let businessClassImages3 = document.querySelector("#businessClassImages3");
let firstClassImages3 = document.querySelector("#firstClassImages3");

let businessClass4 = document.querySelector("#businessClass4");
let firstClass4 = document.querySelector("#firstClass4");
let businessClassImages4 = document.querySelector("#businessClassImages4");
let firstClassImages4 = document.querySelector("#firstClassImages4");

let businessClass5 = document.querySelector("#businessClass5");
let firstClass5 = document.querySelector("#firstClass5");
let businessClassImages5 = document.querySelector("#businessClassImages5");
let firstClassImages5 = document.querySelector("#firstClassImages5");

let businessClass6 = document.querySelector("#businessClass6");
let firstClass6 = document.querySelector("#firstClass6");
let businessClassImages6 = document.querySelector("#businessClassImages6");
let firstClassImages6 = document.querySelector("#firstClassImages6");

let businessClass7 = document.querySelector("#businessClass7");
let firstClass7 = document.querySelector("#firstClass7");
let businessClassImages7 = document.querySelector("#businessClassImages7");
let firstClassImages7 = document.querySelector("#firstClassImages7");

let businessClass8 = document.querySelector("#businessClass8");
let firstClass8 = document.querySelector("#firstClass8");
let businessClassImages8 = document.querySelector("#businessClassImages8");
let firstClassImages8 = document.querySelector("#firstClassImages8");

businessClass1.addEventListener("click", function () {
  firstClassImages1.style.display = "none";
  businessClass1.classList.add("cabinHeadingActive");
  firstClass1.classList.remove("cabinHeadingActive");
  businessClassImages1.style.display = "block";
});
firstClass1.addEventListener("click", function () {
  businessClassImages1.style.display = "none";
  firstClass1.classList.add("cabinHeadingActive");
  businessClass1.classList.remove("cabinHeadingActive");
  firstClassImages1.style.display = "block";
});

businessClass2.addEventListener("click", function () {
  firstClassImages2.style.display = "none";
  businessClass2.classList.add("cabinHeadingActive");
  firstClass2.classList.remove("cabinHeadingActive");
  businessClassImages2.style.display = "block";
});
firstClass2.addEventListener("click", function () {
  businessClassImages2.style.display = "none";
  firstClass2.classList.add("cabinHeadingActive");
  businessClass2.classList.remove("cabinHeadingActive");
  firstClassImages2.style.display = "block";
});

businessClass3.addEventListener("click", function () {
  firstClassImages3.style.display = "none";
  businessClass3.classList.add("cabinHeadingActive");
  firstClass3.classList.remove("cabinHeadingActive");
  businessClassImages3.style.display = "block";
});
firstClass3.addEventListener("click", function () {
  businessClassImages3.style.display = "none";
  firstClass3.classList.add("cabinHeadingActive");
  businessClass3.classList.remove("cabinHeadingActive");
  firstClassImages3.style.display = "block";
});

businessClass4.addEventListener("click", function () {
  firstClassImages4.style.display = "none";
  businessClass4.classList.add("cabinHeadingActive");
  firstClass4.classList.remove("cabinHeadingActive");
  businessClassImages4.style.display = "block";
});
firstClass4.addEventListener("click", function () {
  businessClassImages4.style.display = "none";
  firstClass4.classList.add("cabinHeadingActive");
  businessClass4.classList.remove("cabinHeadingActive");
  firstClassImages4.style.display = "block";
});

businessClass5.addEventListener("click", function () {
  firstClassImages5.style.display = "none";
  businessClass5.classList.add("cabinHeadingActive");
  firstClass5.classList.remove("cabinHeadingActive");
  businessClassImages5.style.display = "block";
});
firstClass5.addEventListener("click", function () {
  businessClassImages5.style.display = "none";
  firstClass5.classList.add("cabinHeadingActive");
  businessClass5.classList.remove("cabinHeadingActive");
  firstClassImages5.style.display = "block";
});

businessClass6.addEventListener("click", function () {
  firstClassImages6.style.display = "none";
  businessClass6.classList.add("cabinHeadingActive");
  firstClass6.classList.remove("cabinHeadingActive");
  businessClassImages6.style.display = "block";
});
firstClass6.addEventListener("click", function () {
  businessClassImages6.style.display = "none";
  firstClass6.classList.add("cabinHeadingActive");
  businessClass6.classList.remove("cabinHeadingActive");
  firstClassImages6.style.display = "block";
});

businessClass7.addEventListener("click", function () {
  firstClassImages7.style.display = "none";
  businessClass7.classList.add("cabinHeadingActive");
  firstClass7.classList.remove("cabinHeadingActive");
  businessClassImages7.style.display = "block";
});
firstClass7.addEventListener("click", function () {
  businessClassImages7.style.display = "none";
  firstClass7.classList.add("cabinHeadingActive");
  businessClass7.classList.remove("cabinHeadingActive");
  firstClassImages7.style.display = "block";
});

businessClass8.addEventListener("click", function () {
  firstClassImages8.style.display = "none";
  businessClass8.classList.add("cabinHeadingActive");
  firstClass8.classList.remove("cabinHeadingActive");
  businessClassImages8.style.display = "block";
});
firstClass8.addEventListener("click", function () {
  businessClassImages8.style.display = "none";
  firstClass8.classList.add("cabinHeadingActive");
  businessClass8.classList.remove("cabinHeadingActive");
  firstClassImages8.style.display = "block";
});

// City Lounge Toggle

let cityBom = document.querySelector("#cityBom");
let cityKul = document.querySelector("#cityKul");

let cityBomData = document.querySelector("#cityBomData");
let cityKulData = document.querySelector("#cityKulData");

cityBom.addEventListener("click", function () {
  cityBomData.style.display = "block";
  cityKulData.style.display = "none";
  cityBom.classList.add("bgType3");
  cityBom.classList.add("colorType5");
  cityKul.classList.remove("bgType3");
  cityKul.classList.remove("colorType5");
});

cityKul.addEventListener("click", function () {
  cityKulData.style.display = "block";
  cityBomData.style.display = "none";
  cityKul.classList.add("bgType3");
  cityKul.classList.add("colorType5");
  cityBom.classList.remove("bgType3");
  cityBom.classList.remove("colorType5");
});

// Slider script

let sliderTooltip1 = document.querySelector(".sliderTooltip1");
let sliderTooltip2 = document.querySelector(".sliderTooltip2");
let sliderTooltip3 = document.querySelector(".sliderTooltip3");
let sliderTooltip4 = document.querySelector(".sliderTooltip4");
let sliderTooltip5 = document.querySelector(".sliderTooltip5");
let sliderTooltip6 = document.querySelector(".sliderTooltip6");
let sliderTooltip7 = document.querySelector(".sliderTooltip7");
let sliderTooltip8 = document.querySelector(".sliderTooltip8");

let lowMediumConfirm1 = document.querySelector("#lowMediumConfirm1");
let biddingTooltip1 = document.querySelector("#biddingTooltip1");
let biddingText1 = document.querySelector("#biddingText1");
let confirmText1 = document.querySelector("#confirmText1");

let lowMediumConfirm2 = document.querySelector("#lowMediumConfirm2");
let biddingTooltip2 = document.querySelector("#biddingTooltip2");
let biddingText2 = document.querySelector("#biddingText2");
let confirmText2 = document.querySelector("#confirmText2");

let lowMediumConfirm3 = document.querySelector("#lowMediumConfirm3");
let biddingTooltip3 = document.querySelector("#biddingTooltip3");
let biddingText3 = document.querySelector("#biddingText3");
let confirmText3 = document.querySelector("#confirmText3");

let lowMediumConfirm4 = document.querySelector("#lowMediumConfirm4");
let biddingTooltip4 = document.querySelector("#biddingTooltip4");
let biddingText4 = document.querySelector("#biddingText4");
let confirmText4 = document.querySelector("#confirmText4");

let lowMediumConfirm5 = document.querySelector("#lowMediumConfirm5");
let biddingTooltip5 = document.querySelector("#biddingTooltip5");
let biddingText5 = document.querySelector("#biddingText5");
let confirmText5 = document.querySelector("#confirmText5");

let lowMediumConfirm6 = document.querySelector("#lowMediumConfirm6");
let biddingTooltip6 = document.querySelector("#biddingTooltip6");
let biddingText6 = document.querySelector("#biddingText6");
let confirmText6 = document.querySelector("#confirmText6");

let lowMediumConfirm7 = document.querySelector("#lowMediumConfirm7");
let biddingTooltip7 = document.querySelector("#biddingTooltip7");
let biddingText7 = document.querySelector("#biddingText7");
let confirmText7 = document.querySelector("#confirmText7");

let lowMediumConfirm8 = document.querySelector("#lowMediumConfirm8");
let biddingTooltip8 = document.querySelector("#biddingTooltip8");
let biddingText8 = document.querySelector("#biddingText8");
let confirmText8 = document.querySelector("#confirmText8");

let rangeSlider1 = document.querySelector(".rangeSlider1");
let rangeSlider2 = document.querySelector(".rangeSlider2");
let rangeSlider3 = document.querySelector(".rangeSlider3");
let rangeSlider4 = document.querySelector(".rangeSlider4");
let rangeSlider5 = document.querySelector(".rangeSlider5");
let rangeSlider6 = document.querySelector(".rangeSlider6");
let rangeSlider7 = document.querySelector(".rangeSlider7");
let rangeSlider8 = document.querySelector(".rangeSlider8");

let biddingPrice1 = document.querySelector("#biddingPrice1");
let biddingPrice2 = document.querySelector("#biddingPrice2");
let biddingPrice3 = document.querySelector("#biddingPrice3");
let biddingPrice4 = document.querySelector("#biddingPrice4");
let biddingPrice5 = document.querySelector("#biddingPrice5");
let biddingPrice6 = document.querySelector("#biddingPrice6");
let biddingPrice7 = document.querySelector("#biddingPrice7");
let biddingPrice8 = document.querySelector("#biddingPrice8");

rangeSlider1.oninput = function () {
  biddingPrice1.innerHTML = rangeSlider1.value * 10;
  sliderTooltip1.style.left = rangeSlider1.value / 1.42 + "%";
  biddingTooltip1.style.left = rangeSlider1.value / 1.42 + "%";
  biddingText1.style.top = "-" + rangeSlider1.value / 1.5 + "%";
  biddingText1.style.left = rangeSlider1.value / 1.5 + "%";
  rangeSlider1.style.background =
    "linear-gradient(90deg,#015aaa " + rangeSlider1.value + "%,#ddd 0)";

  if (rangeSlider1.value == 100) {
    rangeSlider1.style.background = "rgb(89, 188, 103)";
    confirmText1.style.color = "rgb(89, 188, 103)";
  }
  if (rangeSlider1.value > 50 && rangeSlider1.value < 99) {
    lowMediumConfirm1.innerHTML = "MEDIUM";
    biddingText1.style.visibility = "hidden";
  } else if (rangeSlider1.value == 100) {
    lowMediumConfirm1.innerHTML = "CONFIRM";
    biddingTooltip1.innerHTML = "CONFIRM";
  } else if (rangeSlider1.value == 0) {
    lowMediumConfirm1.innerHTML = "LOW";
    biddingTooltip1.innerHTML = "BID";
    biddingText1.style.visibility = "visible";
    confirmText1.style.color = "gray";
  }
};

rangeSlider2.oninput = function () {
  biddingPrice2.innerHTML = rangeSlider2.value * 10;
  sliderTooltip2.style.left = rangeSlider2.value / 1.42 + "%";
  biddingTooltip2.style.left = rangeSlider2.value / 1.42 + "%";
  biddingText2.style.top = "-" + rangeSlider2.value / 1.5 + "%";
  biddingText2.style.left = rangeSlider2.value / 1.5 + "%";
  rangeSlider2.style.background =
    "linear-gradient(90deg,#015aaa " + rangeSlider2.value + "%,#ddd 0)";

  if (rangeSlider2.value == 100) {
    rangeSlider2.style.background = "rgb(89, 188, 103)";
    confirmText2.style.color = "rgb(89, 188, 103)";
  }
  if (rangeSlider2.value > 50 && rangeSlider2.value < 99) {
    lowMediumConfirm2.innerHTML = "MEDIUM";
    biddingText2.style.visibility = "hidden";
  } else if (rangeSlider2.value == 100) {
    lowMediumConfirm2.innerHTML = "CONFIRM";
    biddingTooltip2.innerHTML = "CONFIRM";
  } else if (rangeSlider2.value == 0) {
    lowMediumConfirm2.innerHTML = "LOW";
    biddingTooltip2.innerHTML = "BID";
    biddingText2.style.visibility = "visible";
    confirmText2.style.color = "gray";
  }
};
rangeSlider3.oninput = function () {
  biddingPrice3.innerHTML = rangeSlider3.value * 10;
  sliderTooltip3.style.left = rangeSlider3.value / 1.42 + "%";
  biddingTooltip3.style.left = rangeSlider3.value / 1.42 + "%";
  biddingText3.style.top = "-" + rangeSlider3.value / 1.5 + "%";
  biddingText3.style.left = rangeSlider3.value / 1.5 + "%";
  rangeSlider3.style.background =
    "linear-gradient(90deg,#015aaa " + rangeSlider3.value + "%,#ddd 0)";

  if (rangeSlider3.value == 100) {
    rangeSlider3.style.background = "rgb(89, 188, 103)";
    confirmText3.style.color = "rgb(89, 188, 103)";
  }
  if (rangeSlider3.value > 50 && rangeSlider3.value < 99) {
    lowMediumConfirm3.innerHTML = "MEDIUM";
    biddingText3.style.visibility = "hidden";
  } else if (rangeSlider3.value == 100) {
    lowMediumConfirm3.innerHTML = "CONFIRM";
    biddingTooltip3.innerHTML = "CONFIRM";
  } else if (rangeSlider3.value == 0) {
    lowMediumConfirm3.innerHTML = "LOW";
    biddingTooltip3.innerHTML = "BID";
    biddingText3.style.visibility = "visible";
    confirmText3.style.color = "gray";
  }
};
rangeSlider4.oninput = function () {
  biddingPrice4.innerHTML = rangeSlider4.value * 10;
  sliderTooltip4.style.left = rangeSlider4.value / 1.42 + "%";
  biddingTooltip4.style.left = rangeSlider4.value / 1.42 + "%";
  biddingText4.style.top = "-" + rangeSlider4.value / 1.5 + "%";
  biddingText4.style.left = rangeSlider4.value / 1.5 + "%";
  rangeSlider4.style.background =
    "linear-gradient(90deg,#015aaa " + rangeSlider4.value + "%,#ddd 0)";

  if (rangeSlider4.value == 100) {
    rangeSlider4.style.background = "rgb(89, 188, 103)";
    confirmText4.style.color = "rgb(89, 188, 103)";
  }
  if (rangeSlider4.value > 50 && rangeSlider4.value < 99) {
    lowMediumConfirm4.innerHTML = "MEDIUM";
    biddingText4.style.visibility = "hidden";
  } else if (rangeSlider4.value == 100) {
    lowMediumConfirm4.innerHTML = "CONFIRM";
    biddingTooltip4.innerHTML = "CONFIRM";
  } else if (rangeSlider4.value == 0) {
    lowMediumConfirm4.innerHTML = "LOW";
    biddingTooltip4.innerHTML = "BID";
    biddingText4.style.visibility = "visible";
    confirmText4.style.color = "gray";
  }
};
rangeSlider5.oninput = function () {
  biddingPrice5.innerHTML = rangeSlider5.value * 4;
  rangeSlider5.style.background =
    "linear-gradient(90deg,#015aaa " + rangeSlider5.value + "%,#ddd 0)";
};
rangeSlider6.oninput = function () {
  biddingPrice6.innerHTML = rangeSlider6.value * 4;
  rangeSlider6.style.background =
    "linear-gradient(90deg,#59bc67 " + rangeSlider6.value + "%,#ddd 0)";
};
rangeSlider7.oninput = function () {
  biddingPrice7.innerHTML = rangeSlider7.value * 4;
  rangeSlider7.style.background =
    "linear-gradient(90deg,#015aaa " + rangeSlider7.value + "%,#ddd 0)";
};
rangeSlider8.oninput = function () {
  biddingPrice8.innerHTML = rangeSlider8.value * 4;
  rangeSlider8.style.background =
    "linear-gradient(90deg,#59bc67 " + rangeSlider8.value + "%,#ddd 0)";
};

// Lounge Add to Cart Script

let selectText = document.querySelector("#selectText");
let increaseItemContainer = document.querySelector(".increaseItemContainer");
let selectMinus = document.querySelector("#selectMinus");
let selectPlus = document.querySelector("#selectPlus");
let selectNumber = document.querySelector("#selectNumber");

let loungeCartItems = document.querySelector("#loungeCartItems");
let loungePassenger = document.querySelector("#loungePassenger");
let loungeItemHead = document.querySelector("#loungeItemHead");
let loungeAddCartBtn = document.querySelector("#loungeAddCartBtn");

selectText.addEventListener("click", function () {
  selectText.style.display = "none";
  increaseItemContainer.style.display = "flex";
  loungeCartItems.style.display = "block";
  loungeItemHead.style.display = "block";
  loungePassenger.style.display = "block";
  loungeAddCartBtn.style.display = "block";
  noItems.style.display = "none";
});

selectMinus.addEventListener("click", function () {
  selectText.style.display = "block";
  increaseItemContainer.style.display = "none";
  loungeCartItems.style.display = "none";
  loungeItemHead.style.display = "none";
  loungePassenger.style.display = "none";
  loungeAddCartBtn.style.display = "none";
  noItems.style.display = "block";
});
upgradeTravel.addEventListener("click", function () {
  selectText.style.display = "block";
  increaseItemContainer.style.display = "none";
  loungeCartItems.style.display = "none";
  loungeItemHead.style.display = "none";
  loungePassenger.style.display = "none";
  loungeAddCartBtn.style.display = "none";
  noItems.style.display = "block";
});
addLounge.addEventListener("click", function () {
  selectText.style.display = "block";
  increaseItemContainer.style.display = "none";
  cartItemHead.style.display = "none";
  cartPassenger1.style.display = "none";
  cartPassenger2.style.display = "none";
  cartPassenger3.style.display = "none";
  cartPassenger4.style.display = "none";
  addCartBtn.style.display = "none";
  noItems.style.display = "block";
});
selectPlus.addEventListener("click", function () {
  count += 1;
  selectNumber.innerHTML = count;
});

// Seats selection scripts

window.onload = function () {
  for (let i = 1; i <= 38; i++) {
    let seatRowContainer = document.querySelector(".seatRowContainer");
    let rowContainer = document.querySelector(".rowContainer");
    let rowNumber = document.querySelector(".rowNumber");
    rowNumber.innerHTML = i;
    let clone = rowContainer.cloneNode(true);
    seatRowContainer.appendChild(clone);
  }
  let svg = document.querySelectorAll(".rowContainer svg");
  for (let i = 1; i <= 234; i++) {
    svg[i].setAttribute("id", i);
    svg[i].addClass("seatOccupied");
  }
};

var seatArray = [];
var count = 0;
var length = 3;

// function changeColor(seat) {
//   seat.classList.toggle("seatSelected");
//   seat.querySelector("path.freeSeat1").classList.toggle("seatSelected");
//   seat.querySelector("path.freeSeat2").classList.toggle("seatSelected");
//   seat.querySelector("path.path").classList.toggle("seatSelected");
// }

// function changeColor(seat) {
//   seatArray.push(seat);
// //debugger;

//   if (seatArray.length > length) {

//     seatArray[0].classList.remove("seatSelected");
//     seatArray[0]
//       .querySelector("path.freeSeat1")
//       .classList.remove("seatSelected");
//     seatArray[0]
//       .querySelector("path.freeSeat2")
//       .classList.remove("seatSelected");
//     seatArray[0].querySelector("path.path").classList.remove("seatSelected");
//     seatArray.shift();
//     count = length-1;
//   }
//   var count1 = count;
//   for (let item of seatArray) {

//     if (count1 > 0)
//     {
//       count1--;
//       continue;
//     }
//     console.log(seatArray);
//     item.classList.toggle("seatSelected");
//     item.querySelector("path.freeSeat1").classList.toggle("seatSelected");
//     item.querySelector("path.freeSeat2").classList.toggle("seatSelected");
//     item.querySelector("path.path").classList.toggle("seatSelected");
//     count++;

//   }
// }

function changeselect_tofree(elem_no) {
  //debugger;
  seatArray[elem_no].classList.remove("seatSelected");
  seatArray[elem_no]
    .querySelector("path.freeSeat1")
    .classList.remove("seatSelected");
  seatArray[elem_no]
    .querySelector("path.freeSeat2")
    .classList.remove("seatSelected");
  seatArray[elem_no]
    .querySelector("path.path")
    .classList.remove("seatSelected");

  // count value how much is there
  count = elem_no == 0 ? length - 1 : count - 1;
  seatArray.splice(elem_no, 1);
}

function checkseat(seat) {
  var index = 0;
  for (var i in seatArray) {
    if (seatArray[i] == seat) {
      return index;
    }
    index++;
  }
  return -1;
}

function changeColor(seat) {
  //debugger;
  // check seat is already in array
  var remove_elem_no = checkseat(seat);
  if (remove_elem_no != -1) {
    changeselect_tofree(remove_elem_no);
  } else {
    remove_elem_no = 0;
    seatArray.push(seat);
    //debugger;

    // when array fulll and want to add more
    if (seatArray.length > length) {
      changeselect_tofree(remove_elem_no);
    }

    var count1 = count;
    for (let item of seatArray) {
      if (count1 > 0) {
        count1--;
        continue;
      }
      console.log(seatArray);
      item.classList.toggle("seatSelected");
      item.querySelector("path.freeSeat1").classList.toggle("seatSelected");
      item.querySelector("path.freeSeat2").classList.toggle("seatSelected");
      item.querySelector("path.path").classList.toggle("seatSelected");
      count++;
    }
  }
}

// JSON 
// function getSeats(url,callback){
//   let xhr = new XMLHttpRequest();
//   xhr.onload = function () {
//     callback(this.responseText)
//   };
//   xhr.open('GET', url, true);
//   xhr.send();
// }

// let seats = getSeats('http://127.0.0.1:5500/static/js/SeatsApiResponse.json', data => console.log(JSON.parse(data)))



async function loadNames() {
  const response = await fetch('http://127.0.0.1:5500/static/js/SeatsApiResponse.json');
  const names = await response.json();
  console.log(names)
  return names; 
}
let seat = loadNames();
console.log(seat)