Cricket Match Insights: IPL Edition
Repository Structure
DMQL Project
│
├── public
│   ├── background.jpg
│   ├── facebook-logo.png
│   ├── instagram-logo.png
│   ├── twitter-logo.png
│   ├── ipl.png
│   ├── main.html
│   ├── script.js
│   └── styles.css
│
├── server.js
├── package-lock. json
└── package. json
Description
The DMQL Project is a web application that provides insights and statistics for IPL matches. It allows users to select a season and a statistic to view detailed information about matches.
Data Sources
The data for this project has been derived from Kaggle's IPL datasets, ensuring accuracy and reliability.
First, we created the table in PostgreSQL using ‘create’ command and then we imported the .csv file using PostgreSQL import feature.
Key Features
Interactive interface for selecting seasons and statistics.
Real-time updates based on user selections.
Clear and visually appealing presentation of match data.
Technologies Used
HTML
CSS
JavaScript
Node.js
Express.js
PostgreSQL
How to Use
Clone the repository to your local machine.
Install dependencies using npm install.
Start the server using node server.js.
Open your web browser and go to https://localhost:3000.
Select a season and a statistic from the dropdown lists.
Click the "Submit" button to view the updated table with match details and statistics.
Statistic Options
Most Runs
Most Sixes
Most Fours
Most Wickets
Additional Notes
When you run node server.js in the terminal, you should see the console output Server is listening on port 3000.
Make sure PostgreSQL is installed and running on your machine if you plan to use it for data storage.
Future Improvements
In the future, we plan to add more advanced statistics and visualizations to provide deeper insights into IPL matches. We also aim to improve the user interface for a more seamless user experience.
