// Data for year vs GDP per capita
const data_GDP = [
    { country: "Iceland", year: 1995, gdpPerCapita: 26618.0 },
    { country: "India", year: 1995, gdpPerCapita: 386.0 },
    { country: "Iceland", year: 2005, gdpPerCapita: 57133.0 },
    { country: "India", year: 2005, gdpPerCapita: 718.0 },
    { country: "Iceland", year: 2010, gdpPerCapita: 42928.0 },
    { country: "India", year: 2010, gdpPerCapita: 1353.0 },
    { country: "Iceland", year: 2015, gdpPerCapita: 53043.0 },
    { country: "India", year: 2015, gdpPerCapita: 1639.0 },
    { country: "Iceland", year: 2018, gdpPerCapita: 78010.0 },
    { country: "India", year: 2018, gdpPerCapita: 2041.0 },
    { country: "Iceland", year: 2019, gdpPerCapita: 73320.0 },
    { country: "India", year: 2019, gdpPerCapita: 2115.0 },
    { country: "Iceland", year: 2020, gdpPerCapita: 63644.0 },
    { country: "India", year: 2020, gdpPerCapita: 1931.0 },
];

// Define a function to create the bar chart
function createBarChart() {
    // Container dimensions
    const containerWidth2 = document.getElementById("bar-chart-div-container").clientWidth;

    // Define a maximum width for the bars (adjust this as needed)
    const maxBarWidth = containerWidth2; // You can adjust this based on your needs

    // Define a minimum height for the bars (adjust this as needed)
    const minBarHeight = 10; // You can adjust this based on your needs

    // Create a tooltip div
    const tooltip2 = d3.select("body")
        .append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    const chartContainer2 = d3.select("#bar-chart-div-container");

    // Adjust the left position of the chartContainer to move it to the right
    chartContainer2.style("position", "relative") // Set the position to relative
        .style("left", "20px");

    // Group the data by year
    const groupedData = d3.group(data_GDP, (d) => d.year);

    // Create a group for each year and append bars within each group
    const yearGroups = chartContainer2.selectAll(".year-group")
        .data(groupedData)
        .enter()
        .append("div")
        .attr("class", "year-group");

    // Bind data to the bars within each year group
    const bars = yearGroups.selectAll(".bar")
        .data((d) => d[1])
        .enter()
        .append("div")
        .attr("class", (d) => "bar " + d.country) // Add a class based on the country
        .style("width", (d) => {
            // Limit the width of the bars to the maximum bar width
            const barWidth = Math.min(maxBarWidth, d.gdpPerCapita / 150);
            return barWidth + "px";
        })
        .style("height", minBarHeight + "px") // Set a minimum height
        .on("mouseover", function (event, d) {
            // Show tooltip on mouseover
            tooltip2.transition()
                .duration(200)
                .style("opacity", 0.9);
            tooltip2.html(`Country: ${d.country}<br>GDP per Capita: ${d.gdpPerCapita} USD`)
                .style("left", event.pageX + "px")
                .style("top", event.pageY - 28 + "px");
        })

        .style("width", (d) => {
            // Adjust the divisor (currently 150) to control bar width
            const barWidth = Math.min(maxBarWidth, d.gdpPerCapita / 190); // Change the divisor value
            return barWidth + "px";
        })
        .on("mouseout", function (d) {
            // Hide tooltip on mouseout
            tooltip2.transition()
                .duration(500)
                .style("opacity", 0);
        });

    // Define the legend data
    const legendData = [
        { country: "Iceland", color: "rgb(174, 229, 249)" },
        { country: "India", color: "rgb(169, 178, 255)" },
    ];

    // Create the legend container for the second graph
    const legendContainer2 = chartContainer2.append("div")
        .attr("class", "legend-container");

    // Create legend items for the second graph
    const legendItems = legendContainer2.selectAll(".legend-item")
        .data(legendData)
        .enter()
        .append("div")
        .attr("class", "legend-item");

    // Add colored squares to represent countries for the second graph
    legendItems.append("div")
        .attr("class", "legend-color")
        .style("background-color", (d) => d.color);

    // Add country labels for the second graph
    legendItems.append("div")
        .attr("class", "legend-text")
        .text((d) => d.country);

    // Add the years on the left-hand side with custom positioning for the second graph
    chartContainer2.selectAll(".year-group")
        .append("div")
        .attr("class", "year-label")
        .text((d) => d[0])
        .style("text-align", "left") // Align the text to the left
        .style("position", "absolute") // Set the position to absolute
        .style("top", (d, i) => i * 33 + "px") // Adjust the top position (e.g., i * 33 pixels)
        .style("left", "-40px"); // Adjust the left position to move it to the left of the bars
}

// Call the function to create the bar chart
createBarChart();




