//https://geo.ipify.org/api/v2/country?apiKey=at_mQxjjpcqXlFWijN2yYCEqHRerAA6y&ipAddress=8.8.8.8
let url = 'https://geo.ipify.org/api/v2/country,city?apiKey=at_mQxjjpcqXlFWijN2yYCEqHRerAA6y&ipAddress='

let lat
let long
var map
var marker
fetch(url).then(
	response => response.json()
).then(data => {
	console.log(data);
	details[0].textContent = data.ip
	details[1].innerHTML = `${data.location.city},</br>${data.location.region},${data.location.country}`
	details[2].textContent = `UTC ${data.location.timezone} `
	details[3].textContent = data.isp
	lat = parseFloat(data.location.lat)
	long = parseFloat(data.location.lng)
	map = L.map('map').setView([lat,long], 13);
	L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);
	marker = L.marker([lat, long]).addTo(map);
}).catch(error => {
	console.log(error);
})





let details=document.querySelectorAll('.dit h2')
let input = document.getElementById('ipAddressInput')
let btn=document.getElementById('getIP')

btn.onclick=()=>{
	console.log(input.value);
	url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_mQxjjpcqXlFWijN2yYCEqHRerAA6y&ipAddress=${input.value}`
	fetch(url).then(
		response => response.json()
	).then(data => {
		details[0].textContent = data.ip
		details[1].textContent = `${data.location.region},${data.location.country}`
		details[2].textContent = `UTC ${data.location.timezone} `
		details[3].textContent = data.isp
		lat = parseFloat(data.location.lat)
		long = parseFloat(data.location.lng)
		map.setView(new L.LatLng(lat, long));
		marker.setLatLng(new L.LatLng(lat, long))
	}).catch(error => {
		console.log(error);
	})
}


