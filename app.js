// from data.js
var tableData = data;


// YOUR CODE HERE!
var tbody = d3.select("#target-table-display");
tbody.html("");
//console.log(tableData);


function displayTable(data){
    tbody.html("");
    data.forEach(function(ufoSighting){
        //console.log(ufoSighting);
        var row = tbody.append("tr");
    
        Object.values(ufoSighting).forEach(function(values){
            var cell = row.append("td");
            cell.text(values);
        });
    });

}
function filterTable(){ 
    inputValue = d3.select("#datetime").property("value")
    console.log(inputValue);
    rawData = tableData;
    filterdata = rawData.filter(ufo => ufo.datetime === inputValue);
    console.log(filterdata);
    displayTable(filterdata);
    // filterdata.forEach(function(ufoSighting){
    //     //console.log(ufoSighting);
    //     //console.log("filterdata")
    //     var row = tbody.append("tr");
    
    //     Object.values(ufoSighting).forEach(function(values){
    //         var cell = row.append("td");
    //         cell.text(values);
    //     });
    // });
}

d3.selectAll("#filter-btn").on("click", filterTable);
displayTable(tableData);

