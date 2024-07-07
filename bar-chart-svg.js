    // Data for year vs exchange rates
    const exchangeRateData = [
        { country: "Iceland", year: 1995, exchangeRate: 65.2 },
        { country: "Iceland", year: 2005, exchangeRate: 63.0 },
        { country: "Iceland", year: 2010, exchangeRate: 115.1 },
        { country: "Iceland", year: 2015, exchangeRate: 129.6 },
        { country: "Iceland", year: 2018, exchangeRate: 116.3 },
        { country: "Iceland", year: 2019, exchangeRate: 121.1 },
        { country: "Iceland", year: 2020, exchangeRate: 127.2 },
        { country: "Iceland", year: 2021, exchangeRate: 130.4 },
        { country: "India", year: 1995, exchangeRate: 35.2 },
        { country: "India", year: 2005, exchangeRate: 45.1 },
        { country: "India", year: 2010, exchangeRate: 44.8 },
        { country: "India", year: 2015, exchangeRate: 66.3 },
        { country: "India", year: 2018, exchangeRate: 69.8 },
        { country: "India", year: 2019, exchangeRate: 71.3 },
        { country: "India", year: 2020, exchangeRate: 73.1 },
        { country: "India", year: 2021, exchangeRate: 74.3 }
    ];
    
    // Container dimensions for the chart3
    const chartWidth3 = 450; // Set your desired width here
    const chartHeight3 = 300; // Set your desired height here
    const margin3 = { top: 20, right: 20, bottom: 30, left: 40 }; // Adjusted margin3
    
    // Calculate inner dimensions of the chart3
    const innerWidth3 = chartWidth3 - margin3.left - margin3.right;
    const innerHeight3 = chartHeight3 - margin3.top - margin3.bottom;
    
    // Create an svg3 for the chart3
    const svg3 = d3.select('#bar-chart-svg-container-2') // Change the ID to match your SVG container
        .attr('width', chartWidth3)
        .attr('height', chartHeight3);
    
    // Define color scale based on countries
    const exchangeRateColorScale = d3.scaleOrdinal()
    .domain(["Iceland", "India"])
    .range(["lightblue", "purple"]);
    
    // Create a group for the chart3 content
    const chart3 = svg3.append('g')
        .attr('transform', `translate(${margin3.left}, ${margin3.top})`);
    
    // Create x and y scales
    const xScale3 = d3.scaleLinear()
        .domain([0, d3.max(exchangeRateData, d => d.exchangeRate)])
        .nice()
        .range([0, innerWidth3]);
    
    const yScale3 = d3.scaleBand()
        .domain(exchangeRateData.map(d => d.year))
        .range([0, innerHeight3])
        .padding(0.2);
    
    // Create x and y axes
    const xAxis3 = d3.axisBottom(xScale3).ticks(5);
    const yAxis3 = d3.axisLeft(yScale3);
    
    // Append x and y axes to the chart3
    chart3.append('g')
        .attr('class', 'x-axis')
        .attr('transform', `translate(0, ${innerHeight3})`)
        .call(xAxis3);
    
    chart3.append('g')
        .attr('class', 'y-axis')
        .call(yAxis3);
    
    // Create bars for the exchange rate chart3
    chart3.selectAll('.exchange-rate-bar')
        .data(exchangeRateData)
        .enter()
        .append('rect')
        .attr('class', 'exchange-rate-bar')
        .attr('x', 0)
        .attr('y', d => yScale3(d.year))
        .attr('width', d => xScale3(d.exchangeRate))
        .attr('height', yScale3.bandwidth())
        .style('fill', d => exchangeRateColorScale(d.country));
    
    // Create a legend for the chart3
    const legend3 = chart3.append('g')
        .attr('class', 'legend3')
        .attr('transform', `translate(${innerWidth3 - 100}, 0)`);
    
    const exchangeRateLegend = ["Iceland", "India"];
    
    legend3.selectAll('.legend3-item')
        .data(exchangeRateLegend)
        .enter()
        .append('g')
        .attr('class', 'legend3-item')
        .attr('transform', (d, i) => `translate(0, ${i * 20})`);
    
    legend3.selectAll('.legend3-item')
        .append('rect')
        .attr('class', 'legend3-color')
        .attr('width', 10)
        .attr('height', 10)
        .style('fill', d => exchangeRateColorScale(d));
    
    legend3.selectAll('.legend3-item')
        .append('text')
        .attr('x', 15)
        .attr('y', 6)
        .attr('dy', '0.7em')
        .style('font-size', '12px')
        .text(d => d);

// X-axis label
svg3.append("text")
    .attr("x", innerWidth3 / 2)
    .attr("y", innerHeight3 + margin3.bottom + 30) // Move down by adding 30 units
    .style("text-anchor", "middle")
    .style("font-size", "14px")
    .text("Exchange Rate");

// Y-axis label
svg3.append("text")
    .attr("x", -innerHeight3 / 2)
    .attr("y", -margin3.left + 20) // Move down by adding 20 units
    .attr("transform", "rotate(-90)")
    .style("text-anchor", "middle")
    .style("font-size", "14px")
    .text("Year");
