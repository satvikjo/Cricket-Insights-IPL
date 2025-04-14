
# Cricket Match Insights: IPL Edition  

## Repository Structure  

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
├── package-lock.json  
└── package.json  


## Description  
The **DMQL Project** is a web application that provides **insights and statistics for IPL matches**.  
It allows users to select a **season** and a **statistic** to view detailed match information.  

## Data Sources  
The data for this project is derived from **Kaggle's IPL datasets**, ensuring accuracy and reliability.  

- A table was created in **PostgreSQL** using the `CREATE` command.  
- The `.csv` file was then **imported using PostgreSQL's import feature**.  

## Key Features  
✅ **Interactive interface** for selecting seasons and statistics.  
✅ **Real-time updates** based on user selections.  
✅ **Visually appealing presentation** of match data.  

## Technologies Used  
- **HTML**  
- **CSS**  
- **JavaScript**  
- **Node.js**  
- **Express.js**  
- **PostgreSQL**  

## How to Use  
1. **Clone the repository** to your local machine:  
   ```sh
   git clone https://github.com/satvikjo/Cricket-Insights-IPL.git
   ```
2. **Install dependencies**:  
   ```sh
   npm install
   ```
3. **Start the server**:  
   ```sh
   node server.js
   ```
4. **Open your web browser** and go to:  
   ```
   http://localhost:3000
   ```
5. **Select a season and a statistic** from the dropdown lists.  
6. **Click "Submit"** to view the updated table with match details and statistics.  

## Statistic Options  
📊 **Most Runs**  
💥 **Most Sixes**  
🏏 **Most Fours**  
🎯 **Most Wickets**  

## Additional Notes  
- When you run `node server.js`, you should see:  
  ```
  Server is listening on port 3000
  ```
- Make sure **PostgreSQL** is installed and running on your machine if you plan to use it for data storage.  

## Future Improvements  
🚀 **Advanced statistics and visualizations** for deeper IPL insights.  
🎨 **Improved user interface** for a seamless experience.  

---
