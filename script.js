// document.getElementById("testSpeed").addEventListener("click", async function() {
//     let speedElement = document.getElementById("speed");
//     speedElement.textContent = "Testing...";

//     try {
//         let response = await fetch("http://localhost:5000/speedtest");
//         let data = await response.json();
//         speedElement.textContent = `Speed: ${data.speed}`;
//     } catch (error) {
//         speedElement.textContent = "Error measuring speed.";
//         console.error(error);
//     }
// });

const el = document.querySelector("button")
// console.log(el); 
const speedElement = document.getElementById("speed");
// console.log(speedElement)
const fetchData = async function () 
{
    try {
        let response = await fetch("http://localhost:5000/speedtest", {
            method : "GET",
            // mode : "no-cors"
        });

        if(!response.ok)
        {
            console.log(response);
            console.log(response.error);
            return;
        }
        let data = await response.json();
        speedElement.innerHTML = `Speed: ${data.speed}`;
    } catch (error) {
        speedElement.innerHTML = "Error measuring speed.";
        console.error(error.message);
        
    }
}

el.addEventListener("click", fetchData)