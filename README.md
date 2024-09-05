Tip Calculator

This project is a simple tip calculator that allows users to quickly calculate the total tip amount and the amount each person needs to contribute when splitting the tip. 
As soon as the user inputs the number of people splitting the tip, the result is displayed immediately.

Features

- Bill Amount Input: Users can enter the total bill amount.
- Tip Percentage Selection: Users can select the desired tip percentage (e.g., 10%, 15%, 20%).
- Number of People Input: Users can specify the number of people sharing the tip.
- Real-Time Calculation: The calculator displays the total tip amount and the amount per person as soon as the number of people is entered.
- Responsive Design: Styled using CSS to ensure the calculator looks good on different devices.
  
How to Use

- Enter the total bill amount (e.g., $100) in the input field.
- Select a tip percentage from the available options (e.g., 15%).
- Enter the number of people splitting the tip in the input field.
The result will be displayed immediately:
Total tip amount.
Tip per person (total tip divided by the number of people).
If there is only 1 person, the tip per person will equal the total tip.

Technologies Used

HTML: For structuring the calculator interface.
CSS/Sass: For styling the tip calculator to make it visually appealing and responsive.
JavaScript: For calculating the tip amount in real time based on user input.

Getting Started

1. Clone the repository: https://github.com/Nkiru-Ujam/tip-calculator.git
2. To open and see the UI on the terminal enter 'cd dist'
3. Open live server.

How to Compile Sass (Optional)

If you're using Sass for styling:
Install Sass (if not already installed):
npm install -g sass
Run Sass in watch mode to compile the .scss file into the styles.css file:
sass --watch src/styles.scss:styles.css
