# DSCI 554 Assignment 4: Create and Evaluate Infographics

## Description

### Objective

In this combined assignment, you will both evaluate and compare two different infographics on the same subject using the visualization wheel and create an infographic on a separate web page to compare two countries using data of your choice. This assignment encompasses two distinct tasks. The repository includes an `package.json` initialized with `npm init`.

## Task 1: Infographic Comparison

1. **Data Collection**
   - Find two different infographics on the same subject.
   - Download or access the infographics in suitable format to include in an html page.

2. **Evaluation and Comparison**
   - Present the infographics side by side on the page to facilitate direct comparison.
   - Utilize the visualization wheel framework to assess each infographic, explaining your choices.
   - Document what each infographic does well in terms of design, data representation, and storytelling.
   - Document areas where each infographic can be improved.

3. **Suggestions for Improvement**
   - Based on your evaluation, provide specific recommendations on how to enhance each infographic's effectiveness.
   - Explain how implementing your suggestions would lead to better information communication.

## Task 2: Country Comparison Infographic

### Dataset: United Nations data of your choice

1. **Data Collection**
   - Select data of your choice for two countries to compare
   - Download or fetch the necessary datasets

2. **Infographic Design**
   - Use the visualization wheel to design the infographic
   - Create a wireframe of the design with an SVG tool.
   - Use only bubble clouds (at least one), bubble charts (at least one), and horizontal bar charts (at least two).
   - Apply appropriate visual encoding techniques to enhance information communication.

3. **Infographic Implementation**
   - Implement your design in `index.html`
   - Use separate files for each graphic that you include in `index.html`
   - Find and customize D3 code to create the bubble chart(s)
   - Use D3 with data join to implement one bar chart with div
   - Use D3 with data join to implement one bar chart with SVG
   - Use D3 with data join to implement one bubble chart. Create minimal axes (an SVG line with few tick marks, tick mark labels and axis label) using D3 select and append.
   - Use Bootstrap to customize the page according to your design.

## Submission

### For Task 1: Infographic Comparison

- Document your evaluation and comparison in a Google Slide presentation.
- Provide a link to the Google Slide in `README.md`
- Include the infographics you analyzed in the submission
- Organize your analysis logically, addressing each aspect of the visualization wheel.
- Adhere to sound analysis practices: be objective, support your points with evidence, and communicate your suggestions clearly.

### For Task 2: Country Comparison Infographic

- Document the wireframe, your design choices and the rationale behind them, information and details regarding the dataset(s) you utilized, references to code you reused (e.g., ChatGPT, D3 sample code from Observable, etc.) in a Google Slide presentation.
- Provide a link to the Google Slide in `README.md`
- Include all the source design files (wireframe, color palette, etc.) in the submission.
- Ensure that the infographic is functional and displays correctly in Google Chrome and that there are no errors in DevTools.

## Rubrics

### Task 1: Infographic Comparison

|               | **Evaluation** | **Suggestions for Improvement** |
| ------------- | -------------- | -------------------------------- |
| **Thorough** | The evaluation is comprehensive and insightful, considering all aspects of the visualization wheel. It highlights strengths and weaknesses clearly (4-5 pts) | Suggestions for improvement are specific, actionable, and supported by the evaluation. The recommendations are well-explained and would significantly enhance the infographics (4-5 pts) |
| **Competent** | The evaluation provides a good overview of the infographics' strengths and weaknesses but may lack some depth or clarity (2-3 pts) | Suggestions for improvement are presented but may lack specificity or detail. They offer some potential enhancements (2-3 pts) |
| **Needs work** | The evaluation is unclear or incomplete, missing essential aspects of the visualization wheel (0-1 pts) | Suggestions for improvement are vague or absent, providing little guidance for enhancing the infographics (0-1 pts) |

### Task 2: Country Comparison Infographic

|               | **Data Visualization** |
| ------------- | ----------------------- |
| **Sophisticated** | Data visualizations are skillfully implemented. D3 bubble cloud layout code is customized to create an effective bubble cloud chart. Two horizontal bar charts (one with `div` and one with SVG) are implemented using D3 with data join. A bubble chart is implemented with minimal axes, enhancing data clarity and communication. Bootstrap is used effectively to customize the page according to the design (4-5 pts) |
| **Competent** | Data visualizations are functional but may have minor formatting issues or minor errors. D3 bubble cloud layout is customized adequately for a functional bubble cloud chart. Horizontal bar charts (one with `div` and one with SVG) are implemented using D3 with data join, with competent but possibly minor issues. The bubble chart includes minimal axes created with D3 select and append. Bootstrap is used but with some minor formatting issues (2-3 pts) |
| **Needs work** | Data visualizations are incomplete or non-functional, containing significant errors. The D3 bubble cloud layout is incomplete or non-functional. Horizontal bar charts (one with `div` and one with SVG) are incomplete or non-functional with major issues. The bubble chart lacks axes or has major issues with axis implementation. Bootstrap is not used or is entirely non-functional (0-1 pts) |

## Homework Guidelines

- Homework repository must be updated before the deadline
- Commits after the deadline will not be considered unless requested
- Late policy: 10% of total available points per each late day; duration less than 24 hours counts as one whole day
- Homework is expected to work in Chrome
