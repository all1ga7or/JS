function Car(color, make, model){
    this.color = color;
    this.make = make;
    this.model = model;
}
function displayInfo(){
    var cars = [];
    cars.push(new Car("black","Toyota","Camry 3.5"));
    cars.push(new Car("blue","Kia","Sportage"));
    cars.push(new Car("grey","Peugeot","3008"));
    cars.push(new Car("yellow","Chevrolet","Camaro"));
    cars.push(new Car("white","BMW","i30"));
    var carsInfo = document.getElementById("cars-info");
    if (carsInfo.style.display === "block") {
        carsInfo.style.display = "none";
    } else {
        carsInfo.style.display = "block";
    }
    var carsTable = "<h2>Інформація про автомобілі:</h2><table><tr><th>Колір</th><th>Марка</th><th>Модель</th></tr>"
    for(var i=0; i<cars.length; i++){
        var car = cars[i];
        carsTable += "<tr>" + "<td>" + car.color + "</td>" + "<td>" + car.make + "</td>" + "<td>" + car.model + "</td>" + "</tr>";
    }
    carsTable += "</table>"
    document.getElementById("cars-info").innerHTML = carsTable;
}