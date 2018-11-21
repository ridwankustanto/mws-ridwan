let mymap = L.map("mapid").setView([-6.362091, 106.838456], 14);
var popup = L.popup();

L.tileLayer(
  "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <ahref="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: "mapbox.streets",
    accessToken:
      "pk.eyJ1Ijoicmlkd2Fua3VzdGFudG8iLCJhIjoiY2pvM3gzbDE5MHl1OTNwbGE2dGFsNnYwMCJ9.Pp1nYHt7CI8wm3lVrdTVNQ"
  }
).addTo(mymap);

var arr_marker = [
  [[-6.36374, 106.842022], ["A"]],
  [[-6.362556, 106.841925], ["B"]],
  [[-6.360466, 106.835831], ["C"]],
  [[-6.362833, 106.836979], ["D"]],
  [[-6.362091, 106.838456], ["Roti Bakar Skuy"]]
];

for (m of arr_marker) {
  L.marker(m[0])
    .addTo(mymap)
    .bindPopup(m[1].toString())
    .openPopup();
}
