// Define data for Iceland with custom cx and cy values
const icelandData = [
    { year: 2018, value: 3134.0, cx: 0.64, cy: 0.9 },
    { year: 2019, value: 2689.0, cx: 0.558, cy: 0.9 },
    { year: 2020, value: 652.0, cx: 0.595, cy: 0.87 }
];

// Define data for India with custom cx and cy values
const indiaData = [
    { year: 2018, value: 29143.0, cx: 0.2, cy: 0.4 },
    { year: 2019, value: 31661.0, cx: 0.61, cy: 0.4 },
    { year: 2020, value: 13413.0, cx: 0.397, cy: 0.77 }
];

// Container dimensions
const containerWidth = document.getElementById("bubble-cloud-container").clientWidth;
const containerHeight = document.getElementById("bubble-cloud-container").clientHeight;

// Create a scale for mapping values to radii
const maxRadius = Math.min(containerWidth, containerHeight) * 0.3;
const valueExtent = d3.extent([...icelandData, ...indiaData], d => d.value);
const radiusScale = d3.scaleSqrt().domain(valueExtent).range([1, maxRadius]);

// Create an SVG element within the container
const svg = d3.select('#bubble-cloud-container').append('svg')
    .attr('width', containerWidth)
    .attr('height', containerHeight);

// Define a color scale based on years
const colorScale = d3.scaleOrdinal()
    .domain([2018, 2019, 2020])
    .range(['rgb(233, 209, 248)', 'rgb(211, 148, 250)', 'rgb(193, 97, 253)']);

// Create circles for Iceland with custom cx and cy values
svg.selectAll('.iceland-circle')
    .data(icelandData)
    .enter()
    .append('circle')
    .attr('class', 'iceland-circle')
    .attr('r', d => radiusScale(d.value))
    .attr('cx', d => containerWidth * d.cx) // Use custom cx value from your data
    .attr('cy', d => containerHeight * d.cy) // Use custom cy value from your data
    .style('fill', d => colorScale(d.year));

// Create circles for India with custom cx and cy values
svg.selectAll('.india-circle')
    .data(indiaData)
    .enter()
    .append('circle')
    .attr('class', 'india-circle')
    .attr('r', d => radiusScale(d.value))
    .attr('cx', d => containerWidth * d.cx) // Use custom cx value from your data
    .attr('cy', d => containerHeight * d.cy) // Use custom cy value from your data
    .style('fill', d => colorScale(d.year));

// Create a single "Iceland" text label
svg.append('text')
    .attr('x', containerWidth * 0.59) // Adjust the x position as needed (moved to the left)
    .attr('y', containerHeight * 0.9 - radiusScale(icelandData[0].value) - 5) // Adjust the Y position as needed
    .text('Iceland')
    .attr('class', 'label-text')
    .style('text-anchor', 'middle')
    .style('font-weight', 'bold'); // Make the text bold; // Center the text horizontally

// Create a single "India" text label
svg.append('text')
    .attr('x', containerWidth * 0.4) // Adjust the x position as needed (moved to the left)
    .attr('y', containerHeight * 0.88 - radiusScale(indiaData[0].value) - 5) // Adjust the Y position as needed
    .text('India')
    .attr('class', 'label-text')
    .style('text-anchor', 'middle')
    .style('font-weight', 'bold'); // Make the text bold; // Center the text horizontally

// Add a text element for the impact statement
svg.append('text')
    .attr('x', containerWidth - 180) // Shift the text to the right side (adjust as needed)
    .attr('y', containerHeight - 130) // Adjust the Y position as needed
    .attr('class', 'impact-text') // Apply the impact-text class for styling
    .style('text-anchor', 'end') // Align the text to the end (right side)
    .selectAll('tspan')
    .data([
        'Year 2020 had a significant',
        'impact on tourism expenditure',
        'in both countries, likely due',
        'to the COVID-19 pandemic.'
    ])
    .enter()
    .append('tspan')
    .text(d => d)
    .attr('x', containerWidth - 20) // Continue on the same x position
    .attr('dy', 15); // Adjust the dy (vertical spacing) as needed



// Create a legend
const legendData = [2018, 2019, 2020];
const legendX = 20;
const legendY = 320;
const legendSpacing = 20;

const legend = svg.selectAll('.legend')
    .data(legendData)
    .enter()
    .append('g')
    .attr('class', 'legend')
    .attr('transform', (d, i) => `translate(${legendX}, ${legendY + i * legendSpacing})`);

legend.append('rect')
    .attr('width', 10)
    .attr('height', 10)
    .style('fill', d => colorScale(d));

legend.append('text')
    .attr('x', 20)
    .attr('y', 10)
    .text(d => d);

// Create a tooltip div
const tooltip = d3.select('body')
    .append('div')
    .attr('class', 'tooltip')
    .style('opacity', 0);

// Add mouseover and mouseout behavior to circles
svg.selectAll('.iceland-circle, .india-circle')
    .on('mouseover', handleMouseOver)
    .on('mouseout', handleMouseOut);

// Create a background rectangle for the title
svg.append('rect')
    .attr('x', 0) // Adjust the x position as needed
    .attr('y', 0) // Adjust the Y position as needed
    .attr('width', containerWidth/1.05) // Adjust the width as needed
    .attr('height', 30) // Adjust the height as needed
    .attr('class', 'title-background'); // Apply a CSS class for styling

// Create a title for the container
svg.append('text')
    .attr('x', containerWidth / 2.1) // Center the title horizontally
    .attr('y', 20) // Adjust the Y position as needed
    .text('Tourism Expenditure Comparison: Iceland vs. India (2018-2020)') // Set the title text
    .attr('class', 'container-title')
    .style('text-anchor', 'middle') // Center the text horizontally
    .style('font-weight', 'bold'); // Make the text bold


// Mouseover function to show tooltip and highlight circle
function handleMouseOver(event, d) {
    const circle = d3.select(this);
    const year = d.year;
    const value = d.value;

    circle.style('stroke', 'black');

    tooltip.transition()
        .duration(200)
        .style('opacity', 0.9);

    tooltip.html(`Year: ${year}<br>Value: ${value}`)
        .style('left', (event.pageX + 10) + 'px')
        .style('top', (event.pageY - 20) + 'px');
}

// Mouseout function to hide tooltip and remove highlight
function handleMouseOut() {
    const circle = d3.select(this);

    circle.style('stroke', 'none');

    tooltip.transition()
        .duration(500)
        .style('opacity', 0);
}
