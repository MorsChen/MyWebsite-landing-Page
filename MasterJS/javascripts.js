document.getElementById("inputValue").focus();

function formatCurrency(type,value) {
    const formatter = new Intl.NumberFormat(type, {
        currency: type,
        style: "currency",
    });
    return formatter.format(value);
}

// function USDtoVND() {
//     const inputConValue = document.getElementById("inputvalue").value;
//     const conValue = inputConValue * exchangeRateUS;
//     const conValueVND = conValue;
//     const formatConValueVND = formatCurrency("vnd",conValueVND);
//     console.log("convert: ",formatConValueVND);
//     document.getElementById("convertedValue").value = formatConValueVND;
// }

function USDtoVND() {
    const inputValue = document.getElementById("inputValue").value ;
    const convertValue = inputValue * exchangeRateUSD ;
    const convertVND = convertValue;
    const formattedCurrency = formatCurrency("vnd", convertVND);
    console.log("convert: ", formattedCurrency)
    document.getElementById("convertedValue").innerHTML = formattedCurrency;
}

// function USDtoVND() {
//     if {
        
//     }
// }

// function updateResults(from, to, conversionRate) {
//     const value = document.getElementById("inputValue").value;
//     const convertedValue = conversionRate * value;
//     const formattedCurrency = formatCurrency(to.toUpperCase(), convertedValue);
//     document.getElementById("convertedValue").innerHTML = formattedCurrency;
//   }


// function getConversion(from, to) {
//     var xhr = new XMLHttpRequest();
//     xhr.open(
//       "GET",
//       `https://free.currconv.com/api/v7/convert?q=${from}_${to}&compact=ultra&apiKey=9a02420c4a5e378f2215`
//     );
//     xhr.onload = function() {
//       if (xhr.status === 200) {
//         const response = JSON.parse(xhr.responseText);
//         const conversionRate = response[`${from}_${to}`];
//         updateResults(from, to, conversionRate);
//       } else {
//         alert("Request failed.  Returned status of " + xhr.status);
//       }
//     };
//     xhr.send();
//   }

// function test() {
//     console.log("updating the input... coule we do more?");
// }


  
