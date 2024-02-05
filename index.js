
const citydetails = () => {
    let z = document.getElementById("cityname");
    let a = document.getElementById("weather-location");
    let b = document.getElementById("temper");
    let c = document.getElementById("clouds");
    let d = document.getElementById("humid");
    let e = document.getElementById("windspeed");
    let f = document.getElementsByClassName("fa-solid fa-cloud");



    const url2 = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${z.value}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
    fetch(url2, { method: 'GET', })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            a.innerText = `Weather in ${z.value}`
            let t = data.list[0].temp.day + " °C"
            b.innerText = `${t}`
            let cl = data.list[0].weather[0].description
            c.innerText = `${f.value} ${cl}`
            let hum = data.list[0].humidity
            d.innerText = `humidity: ${hum} %`
            let wind = data.list[0].speed
            e.innerText = `Wind speed: ${wind} km/h`
            console.log(data.city.name)

        })
}
let list = [
    'delhi', 'kolkata', 'chennai', 'varanasi', 'goa', 'mumbai', 'hyderabad', 'banglore', 'america', 'australia', 'new zealand', 'pune', 'russia', 'mexico', 'poland', 'switzerland', 'singapore', 'malaysia', 'nagpur', 'kerala', 'karnataka', 'kochi', 'maharashtra', 'chandigarh', 'bihar', 'luknow', 'london', 'chicaco'
]
let country = [];
const allCity = document.querySelector("#listCiti");
let zx = document.getElementById("cityname");

zx.onkeyup = () => {
    if (zx.value.length) {
        country = list.filter((item) => {
            return item.toLowerCase().includes(zx.value.toLowerCase());
        })
    }
    suggestions(country);
};
const suggestions = () => {
    const content = country.map((item) => {
        return "<li onclick=pickOne(this)>" + item + "</li>";
    });
    allCity.innerHTML = content.join('');
}
const pickOne = (k) => {
    zx.value = k.innerHTML;
    allCity.innerHTML = '';
}







// let country = [];
// const allCity = document.querySelector("#listCiti");
// let zx = document.getElementById("cityname");


// const autodrop = () => {

//     fetch('https://restcountries.com/v3.1/all')
//         .then(response => response.json())
//         .then(data => {
//             country = data.map((item) => item.name.common)
//             country.sort();
//             loadCiti(country, allCity);
//         })
//         .catch(error => console.log(error));

// }

// const loadCiti = (data, element) => {
//     if (data) {
//         element.innerHTML = "";
//         let anotherElement = "";
//         data.forEach((item) => {
//             anotherElement += `<li>${item}</li>`

//         })

//         element.innerHTML = anotherElement;

//     }

// };

// const filterCities = (data, typeText) => {
//     return data.filter((item) =>
//         item.toLowerCase().includes(typeText.toLowerCase())
//     );
// }

// zx.addEventListener("input", () => {
//     const finalcity = filterCities(country, zx.value);
//     loadCiti(finalcity, allCity);


// })