var exhibitions = [];

exhibitions[0] = {
    startDate: new Date("2023-11-14"),
    Name: "Живопис", 
    Place: "Галерея мистецтв", 
    Organisator: "Мистецька асоціація"
};
exhibitions[1] = {
    startDate: new Date("2023-11-15"),
    Name: "Фотографія", 
    Place: "Музей сучасного мистецтва", 
    Organisator: "Фотошкола"
};
exhibitions[2] = {
    startDate: new Date("2024-02-16"),
    Name: "Скульптура", 
    Place: "Виставковий центр", 
    Organisator: "Спільнота скульпторів"
};
exhibitions[3] = {
    startDate: new Date("2023-12-30"),
    Name: "Графіка", 
    Place: "Міська галерея"
};
exhibitions[4] = {
    startDate: new Date("2023-11-7"),
    Name: "Сучасне мистецтво", 
    Place: "Виставковий комплекс", 
    Organisator: "Мистецька група"
};

function calculateDays(startDate) {
    var currentDate = new Date();
    var daysToStart = Math.ceil((startDate - currentDate) / (1000 * 60 * 60 * 24));
    var exhibitionEndDate = new Date(startDate);
    exhibitionEndDate.setDate(startDate.getDate() + 7);
    var daysToEnd = Math.ceil((exhibitionEndDate - currentDate) / (1000 * 60 * 60 * 24));
    return {
        daysToStart: daysToStart,
        daysToEnd: daysToEnd
    };
}

function exhibitionInfo(exhibition) {
    var daysInfo = calculateDays(exhibition.startDate);
    var exhibitionInfo = "<tr>";
    exhibitionInfo += "<td>" + exhibition.Name + "</td>";
    exhibitionInfo += "<td>" + exhibition.Place + "</td>";
    exhibitionInfo += "<td>" + (exhibition.Organisator || "Інформація відсутня") + "</td>";
    exhibitionInfo += (daysInfo.daysToStart > 0) ? "<td>" + daysInfo.daysToStart + "</td>" : "<td>" + daysInfo.daysToEnd + "</td>";
    exhibitionInfo += "</tr>";

    return exhibitionInfo;
}
function displayInfo(){
    var exhibitionsInfo = document.getElementById("exhibitions-info");
    if (exhibitionsInfo.style.display === "block") {
        exhibitionsInfo.style.display = "none";
    } else {
        exhibitionsInfo.style.display = "block";
    }
    var futureExhibitionsTable = "<h2>Інформація про майбутні виставки:</h2><table><tr><th>Назва виставки</th><th>Місце проведення</th><th>Організатор</th><th>Днів до початку</th></tr>";
    var currentExhibitionsTable =  "<h2>Інформація про поточні виставки:</h2><table><tr><th>Назва виставки</th><th>Місце проведення</th><th>Організатор</th><th>Днів до закінчення</th></tr>";
    for (var i = 0; i < exhibitions.length; i++) {
        var exhibition = exhibitions[i];
        var daysInfo = calculateDays(exhibition.startDate);
        if (daysInfo.daysToStart > 0) {
            futureExhibitionsTable += exhibitionInfo(exhibition);
        } else {
            currentExhibitionsTable += exhibitionInfo(exhibition);
        }
    }
    futureExhibitionsTable += "</table>";
    currentExhibitionsTable += "</table>";
    var html = futureExhibitionsTable + currentExhibitionsTable;
    document.getElementById("exhibitions-info").innerHTML = html;
}