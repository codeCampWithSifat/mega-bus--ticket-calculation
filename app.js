function handleRentCount (rent,isIncrease) {
    const rentInput = document.getElementById(rent + "-count");
    const rentCount = parseInt(rentInput.value);
    // const secondNewCount = secondCount - 1 ;
    let rentNewCount = rentCount ;
    if (isIncrease === true) {
        rentNewCount = rentCount + 1 ;
    } else if (isIncrease === false && rentCount > 0) {
        rentNewCount = rentCount - 1 ;
    }
    rentInput.value = rentNewCount ;
    // const secondTotal = rentNewCount * 100 ;
    let rentTotal = 0 ;
    if (rent === "first") {
        rentTotal = rentNewCount * 150 ;
    } else if (rent === "second") {
        rentTotal = rentNewCount * 100 ;
    }
    document.getElementById(rent + "-total").innerText = "$" + rentTotal ;
    getInputValue()
};

function getInputValue () {
   
    const firstCount = handleInputValue("first");
    const secondCount = handleInputValue("second")

    const total = firstCount * 150 + secondCount * 100 ;
    document.getElementById("total-amount").innerText = "$" + total ;

    const tax = Math.round(total * 0.1) ;
    document.getElementById("tax-amount").innerText = "$" + tax ;

    const grandTotal = total + tax ;
    document.getElementById("grand-total").innerText = "$" + grandTotal ;
};

function handleInputValue (fare) {
    const fareInput = document.getElementById(fare +"-count");
    const fareCount = parseInt(fareInput.value);
    return fareCount
}


document.getElementById("ticket-booking-2").addEventListener("click",function () {
     document.getElementById("booking-btn").style.display = "none";
     document.getElementById("ticket-booking-1").style.display = "block"
})


































// function handleFirstCount (isIncrease) {
//     const firstInput = document.getElementById("first-count");
//     const firstCount = parseInt(firstInput.value);
//     // const firstNewCount = firstCount - 1 ;
//     let firstNewCount = firstCount ;
//     if (isIncrease === true) {
//         firstNewCount = firstCount + 1 ;
//     } else if(isIncrease === false && firstCount > 0 ) {
//         firstNewCount = firstCount - 1 ;
//     }
//     firstInput.value = firstNewCount;
//     const firstTotal = firstNewCount * 150 ;
//     document.getElementById("first-total").innerText = "$" + firstTotal ;
// };


// function handleRentCount (isIncrease) {
//     const secondInput = document.getElementById("second-count");
//     const secondCount = parseInt(secondInput.value);
//     // const secondNewCount = secondCount - 1 ;
//     let secondNewCount = secondCount ;
//     if (isIncrease === true) {
//         secondNewCount = secondCount + 1 ;
//     } else if (isIncrease === false && secondCount > 0) {
//         secondNewCount = secondCount - 1 ;
//     }
//     secondInput.value = secondNewCount ;
//     const secondTotal = secondNewCount * 100 ;
//     document.getElementById("second-total").innerText = "$" + secondTotal ;
// };


// document.getElementById("second-increase").addEventListener("click",function() {
//     const secondInput = document.getElementById("second-count");
//     const secondCount = parseInt(secondInput.value);
//     const secondNewCount = secondCount + 1 ;
//     secondInput.value = secondNewCount ;
//     const secondTotal = secondNewCount * 100 ;
//     document.getElementById("second-total").innerText = "$" + secondTotal
// });

// document.getElementById("second-decrease").addEventListener("click",function() {
//     const secondInput = document.getElementById("second-count");
//     const secondCount = parseInt(secondInput.value);
//     const secondNewCount = secondCount - 1 ;
//     secondInput.value = secondNewCount ;
//     const secondTotal = secondNewCount * 100 ;
//     document.getElementById("second-total").innerText = "$" + secondTotal ;
// })