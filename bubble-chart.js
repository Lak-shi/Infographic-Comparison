// Sample data for exchange rates and GDP per capita
const rateData = [
    { country: "Iceland", year: 2005, rate: 63.0 },
    { country: "India", year: 2005, rate: 45.1 },
    { country: "Iceland", year: 2010, rate: 115.1 },
    { country: "India", year: 2010, rate: 44.8 },
    { country: "Iceland", year: 2015, rate: 129.6 },
    { country: "India", year: 2015, rate: 66.3 }
];

const gdpData = [
    { country: "Iceland", year: 2005, gdp: 57133.0 },
    { country: "India", year: 2005, gdp: 718.0 },
    { country: "Iceland", year: 2010, gdp: 42928.0 },
    { country: "India", year: 2010, gdp: 1353.0 },
    { country: "Iceland", year: 2015, gdp: 53043.0 },
    { country: "India", year: 2015, gdp: 1639.0 }
];

// Define color scale based on countries
const countryColorScale = d3.scaleOrdinal()
    .domain(["Iceland", "India"])
    .range(["lightblue", "purple"]);

// SVG dimensions and margins
const svgWidthBubble = 600; // Change the width
const svgHeightBubble = 350; // Change the height
const marginBubble = { top: 60, right: 50, bottom: 40, left: 45 }; // Adjust top and bottom margins

// Move the entire chart a little to the right
const xOffset = 10; // Adjust the amount you want to move the chart to the right

const svgBubble = d3.select("#bubble-chart-with-axes")
    .attr("width", svgWidthBubble)
    .attr("height", svgHeightBubble)
    .append("g") // Create a group element for the chart
    .attr("transform", `translate(${xOffset}, 0)`); // Move the chart to the right by xOffset

// Define scales for x and y axes
const xScaleBubble = d3.scaleLinear()
    .domain([d3.min(rateData, d => d.year), d3.max(rateData, d => d.year)]) // Adjust the domain based on your data
    .nice()
    .range([marginBubble.left, svgWidthBubble - marginBubble.right]);

    const yScaleBubble = d3.scaleLinear()
    .domain([0, d3.max(gdpData, d => d.gdp)]) // Adjust the domain based on your data
    .nice()
    .range([svgHeightBubble - marginBubble.bottom, marginBubble.top]);

// Create x-axis
svgBubble.append("g")
    .attr("class", "x-axis")
    .attr("transform", `translate(0,${svgHeightBubble - marginBubble.bottom})`)
    .call(d3.axisBottom(xScaleBubble).tickFormat(d3.format("d"))); // Format ticks as years

// Create y-axis
svgBubble.append("g")
    .attr("class", "y-axis")
    .attr("transform", `translate(${marginBubble.left},0)`)
    .call(d3.axisLeft(yScaleBubble).ticks(5));

// Create a tooltip div
const tooltipbubble = d3.select("body") // Attach the tooltip to the body
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

// Mouseover function to show tooltip and highlight circle
function handleMouseOver(event, d) {
    const circle = d3.select(this);
    const year = d.year;
    const gdp = d.gdp;
    const rate = rateData.find(entry => entry.country === d.country && entry.year === d.year).rate;

    circle.style("stroke", "black");

    tooltipbubble.transition()
        .duration(200)
        .style("opacity", 0.9);

    tooltipbubble.html(`<strong>Year:</strong> ${year}<br><strong>GDP:</strong> $${gdp.toFixed(2)}<br><strong>Exchange Rate:</strong> ${rate}`)
        .style("left", (event.pageX + 10) + "px")
        .style("top", (event.pageY - 28) + "px")
        .style("position", "absolute");
}

// Mouseout function to hide tooltip and remove highlight
function handleMouseOut() {
    const circle = d3.select(this);

    circle.style("stroke", "none");

    tooltipbubble.transition()
        .duration(500)
        .style("opacity", 0);
}

svgBubble.selectAll(".bubble")
    .data(gdpData)
    .enter()
    .append("circle")
    .attr("class", "bubble")
    .attr("cx", d => xScaleBubble(d.year))
    .attr("cy", d => yScaleBubble(d.gdp))
    .attr("r", d => d3.scaleSqrt().domain([0, d3.max(rateData, d => d.rate)]).range([0, 15])(rateData.find(entry => entry.country === d.country && entry.year === d.year).rate))
    .style("fill", d => countryColorScale(d.country))
    .style("stroke", "black")
    .style("stroke-width", 1)
    .style("fill-opacity", 0.6)
    .on("mouseover", handleMouseOver)
    .on("mouseout", handleMouseOut);

// Add a title to the chart
svgBubble.append("text")
    .attr("x", svgWidthBubble / 2)
    .attr("y", marginBubble.top - 30) // Adjust the vertical position as needed
    .attr("text-anchor", "middle") // Center the text
    .style("font-size", "18px") // Set the font size
    .style("font-weight", "bold") // Set the font weight
    .attr('class', 'container-title')
    .text("GDP vs. Exchange Rate (2005-2015)");


// Add x-axis label
svgBubble.append("text")
    .attr("x", svgWidthBubble / 2)
    .attr("y", svgHeightBubble - 10) // Adjust the vertical position as needed
    .attr("text-anchor", "middle") // Center the text
    .style("font-size", "14px") // Set the font size
    .text("Exchange Rate");

// Add y-axis label
svgBubble.append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -(svgHeightBubble / 2))
    .attr("y", marginBubble.left - 42) // Adjust the vertical position as needed
    .attr("text-anchor", "middle") // Center the text
    .style("font-size", "14px") // Set the font size
    .text("GDP per Capita (US dollars)");





