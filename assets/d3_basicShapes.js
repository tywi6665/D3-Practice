// var d3 = require("d3");

var width = 1000, height = 500;

var svg = d3.select("#canvas")
    .append("svg")
    .attr("width", width + "px")
    .attr("height", height + "px");

svg.append("rect")
    .attr("x", 100)
    .attr("y", 100)
    .attr("width", 100)
    .attr("height", 50)
    .attr("fill", "pink");

svg.append("circle")
    .attr("cx", 200)
    .attr("cy", 300)
    .attr("r", 50)
    .attr("fill", "blue");

svg.append("line")
    .attr("x1", 800)
    .attr("y1", 100)
    .attr("x2", 400)
    .attr("y2", 400)
    .attr("stroke", "orange")
    .attr("stroke-width", 5);
    

    