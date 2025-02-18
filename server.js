const express = require('express');
const app = express();
const path = require('path');
const { Client } = require('pg');

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "Chinnu1408@",
    database: "dmql_project"
});

client.connect()
    .then(() => {
        console.log('Connected to the PostgreSQL database');
    })
    .catch((err) => {
        console.error('Error connecting to the PostgreSQL database:', err);
    });

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json()); // to parse JSON body

// Define route to serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'main.html'));
});

app.post('/runQuery', async (req, res) => {

    const selectedSeason = req.body.season;
    const selectedStat = req.body.stat;

    console.log(`Selected Season: ${selectedSeason}, Selected Stat: ${selectedStat}`);

    let query;

    if (selectedSeason === '0' && selectedStat === 'highest_scores') {
        query = "SELECT striker AS player, SUM(runs_off_bat) AS total_runs FROM ipl_match_data WHERE player_dismissed IS NULL OR wicket_type NOT IN('runout', 'retiredhurt') GROUP BY striker ORDER BY total_runs DESC; ";
    }
    else if (selectedSeason === '0' && selectedStat === 'most_sixes') {
        query = 'SELECT striker AS player, COUNT(*) AS sixes FROM ipl_match_data WHERE runs_off_bat = 6 GROUP BY striker ORDER BY sixes DESC; ';
    }
    else if (selectedSeason === '0' && selectedStat === 'most_fours') {
        query = 'SELECT striker AS player, COUNT(*) AS fours FROM ipl_match_data WHERE runs_off_bat = 4 GROUP BY striker ORDER BY fours DESC; ';
    }
    else if (selectedSeason === '0' && selectedStat === 'most_wickets') {
        query = "SELECT bowler AS player, COUNT(*) AS wickets FROM ipl_match_data WHERE wicket_type != 'runout' AND wicket_type != 'retiredhurt' AND wicket_type IS NOT NULL GROUP BY bowler ORDER BY wickets DESC;";
    }
    else if (selectedSeason === '0' && selectedStat === '5_wickets') {
        query = "SELECT match_id, bowler, COUNT(*) AS wickets FROM ipl_match_data WHERE wicket_type IN ('caught', 'bowled', 'lbw', 'caught and bowled', 'stumped', 'hit wicket') GROUP BY match_id, bowler HAVING COUNT(*) >= 5 ORDER BY wickets DESC; ";
    }
    else if (selectedSeason === '1' && selectedStat === 'highest_scores') {
        query = "SELECT striker AS player, SUM(runs_off_bat) AS total_runs FROM ipl_match_data WHERE season = '2007/08' AND (player_dismissed IS NULL OR wicket_type NOT IN ('runout', 'retiredhurt')) GROUP BY striker ORDER BY total_runs DESC; ";
    }
    else if (selectedSeason === '1' && selectedStat === 'most_sixes') {
        query = "SELECT striker AS player, COUNT(*) AS sixes FROM ipl_match_data WHERE season = '2007/08' AND runs_off_bat = 6 GROUP BY striker ORDER BY sixes DESC; ";
    }
    else if (selectedSeason === '1' && selectedStat === 'most_fours') {
        query = "SELECT striker AS player, COUNT(*) AS fours FROM ipl_match_data WHERE season = '2007/08' AND runs_off_bat = 4 GROUP BY striker ORDER BY fours DESC; ";
    }
    else if (selectedSeason === '1' && selectedStat === 'most_wickets') {
        query = "SELECT bowler AS player, COUNT(*) AS wickets FROM ipl_match_data WHERE season = '2007/08' AND wicket_type NOT IN ('runout', 'retiredhurt') AND wicket_type IS NOT NULL GROUP BY bowler ORDER BY wickets DESC; ";
    }
    else if(selectedSeason === '2' && selectedStat === 'highest_scores') {
        query = "SELECT striker AS player, SUM(runs_off_bat) AS total_runs FROM ipl_match_data WHERE season = '2009' AND (player_dismissed IS NULL OR wicket_type NOT IN ('runout', 'retiredhurt')) GROUP BY striker ORDER BY total_runs DESC; ";
    }
    else if (selectedSeason === '2' && selectedStat === 'most_sixes') {
        query = "SELECT striker AS player, COUNT(*) AS sixes FROM ipl_match_data WHERE season = '2009' AND runs_off_bat = 6 GROUP BY striker ORDER BY sixes DESC; ";
    }
    else if (selectedSeason === '2' && selectedStat === 'most_fours') {
        query = "SELECT striker AS player, COUNT(*) AS fours FROM ipl_match_data WHERE season = '2009' AND runs_off_bat = 4 GROUP BY striker ORDER BY fours DESC; ";
    }
    else if (selectedSeason === '2' && selectedStat === 'most_wickets') {
        query = "SELECT bowler AS player, COUNT(*) AS wickets FROM ipl_match_data WHERE season = '2009' AND wicket_type NOT IN ('runout', 'retiredhurt') AND wicket_type IS NOT NULL GROUP BY bowler ORDER BY wickets DESC; ";
    }
    else if (selectedSeason === '3' && selectedStat === 'highest_scores') {
        query = "SELECT striker AS player, SUM(runs_off_bat) AS total_runs FROM ipl_match_data WHERE season = '2010' AND (player_dismissed IS NULL OR wicket_type NOT IN ('runout', 'retiredhurt')) GROUP BY striker ORDER BY total_runs DESC; ";
    }
    else if (selectedSeason === '3' && selectedStat === 'most_sixes') {
        query = "SELECT striker AS player, COUNT(*) AS sixes FROM ipl_match_data WHERE season = '2010' AND runs_off_bat = 6 GROUP BY striker ORDER BY sixes DESC; ";
    }
    else if (selectedSeason === '3' && selectedStat === 'most_fours') {
        query = "SELECT striker AS player, COUNT(*) AS fours FROM ipl_match_data WHERE season = '2010' AND runs_off_bat = 4 GROUP BY striker ORDER BY fours DESC; ";
    }
    else if (selectedSeason === '3' && selectedStat === 'most_wickets') {
        query = "SELECT bowler AS player, COUNT(*) AS wickets FROM ipl_match_data WHERE season = '2010' AND wicket_type NOT IN ('runout', 'retiredhurt') AND wicket_type IS NOT NULL GROUP BY bowler ORDER BY wickets DESC; ";
    }
    else if (selectedSeason === '4' && selectedStat === 'highest_scores') {
        query = "SELECT striker AS player, SUM(runs_off_bat) AS total_runs FROM ipl_match_data WHERE season = '2011' AND (player_dismissed IS NULL OR wicket_type NOT IN ('runout', 'retiredhurt')) GROUP BY striker ORDER BY total_runs DESC; ";
    }
    else if (selectedSeason === '4' && selectedStat === 'most_sixes') {
        query = "SELECT striker AS player, COUNT(*) AS sixes FROM ipl_match_data WHERE season = '2011' AND runs_off_bat = 6 GROUP BY striker ORDER BY sixes DESC; ";
    }
    else if (selectedSeason === '4' && selectedStat === 'most_fours') {
        query = "SELECT striker AS player, COUNT(*) AS fours FROM ipl_match_data WHERE season = '2011' AND runs_off_bat = 4 GROUP BY striker ORDER BY fours DESC; ";
    }
    else if (selectedSeason === '4' && selectedStat === 'most_wickets') {
        query = "SELECT bowler AS player, COUNT(*) AS wickets FROM ipl_match_data WHERE season = '2011' AND wicket_type NOT IN ('runout', 'retiredhurt') AND wicket_type IS NOT NULL GROUP BY bowler ORDER BY wickets DESC; ";
    }
    else if (selectedSeason === '5' && selectedStat === 'highest_scores') {
        query = "SELECT striker AS player, SUM(runs_off_bat) AS total_runs FROM ipl_match_data WHERE season = '2012' AND (player_dismissed IS NULL OR wicket_type NOT IN ('runout', 'retiredhurt')) GROUP BY striker ORDER BY total_runs DESC; ";
    }
    else if (selectedSeason === '5' && selectedStat === 'most_sixes') {
        query = "SELECT striker AS player, COUNT(*) AS sixes FROM ipl_match_data WHERE season = '2012' AND runs_off_bat = 6 GROUP BY striker ORDER BY sixes DESC; ";
    }
    else if (selectedSeason === '5' && selectedStat === 'most_fours') {
        query = "SELECT striker AS player, COUNT(*) AS fours FROM ipl_match_data WHERE season = '2012' AND runs_off_bat = 4 GROUP BY striker ORDER BY fours DESC; ";
    }
    else if (selectedSeason === '5' && selectedStat === 'most_wickets') {
        query = "SELECT bowler AS player, COUNT(*) AS wickets FROM ipl_match_data WHERE season = '2012' AND wicket_type NOT IN ('runout', 'retiredhurt') AND wicket_type IS NOT NULL GROUP BY bowler ORDER BY wickets DESC; ";
    }
    else if (selectedSeason === '6' && selectedStat === 'highest_scores') {
        query = "SELECT striker AS player, SUM(runs_off_bat) AS total_runs FROM ipl_match_data WHERE season = '2013' AND (player_dismissed IS NULL OR wicket_type NOT IN ('runout', 'retiredhurt')) GROUP BY striker ORDER BY total_runs DESC; ";
    }
    else if (selectedSeason === '6' && selectedStat === 'most_sixes') {
        query = "SELECT striker AS player, COUNT(*) AS sixes FROM ipl_match_data WHERE season = '2013' AND runs_off_bat = 6 GROUP BY striker ORDER BY sixes DESC; ";
    }
    else if (selectedSeason === '6' && selectedStat === 'most_fours') {
        query = "SELECT striker AS player, COUNT(*) AS fours FROM ipl_match_data WHERE season = '2013' AND runs_off_bat = 4 GROUP BY striker ORDER BY fours DESC; ";
    }
    else if (selectedSeason === '6' && selectedStat === 'most_wickets') {
        query = "SELECT bowler AS player, COUNT(*) AS wickets FROM ipl_match_data WHERE season = '2013' AND wicket_type NOT IN ('runout', 'retiredhurt') AND wicket_type IS NOT NULL GROUP BY bowler ORDER BY wickets DESC; ";
    }
    else if (selectedSeason === '7' && selectedStat === 'highest_scores') {
        query = "SELECT striker AS player, SUM(runs_off_bat) AS total_runs FROM ipl_match_data WHERE season = '2014' AND (player_dismissed IS NULL OR wicket_type NOT IN ('runout', 'retiredhurt')) GROUP BY striker ORDER BY total_runs DESC; ";
    }
    else if (selectedSeason === '7' && selectedStat === 'most_sixes') {
        query = "SELECT striker AS player, COUNT(*) AS sixes FROM ipl_match_data WHERE season = '2014' AND runs_off_bat = 6 GROUP BY striker ORDER BY sixes DESC; ";
    }
    else if (selectedSeason === '7' && selectedStat === 'most_fours') {
        query = "SELECT striker AS player, COUNT(*) AS fours FROM ipl_match_data WHERE season = '2014' AND runs_off_bat = 4 GROUP BY striker ORDER BY fours DESC; ";
    }
    else if (selectedSeason === '7' && selectedStat === 'most_wickets') {
        query = "SELECT bowler AS player, COUNT(*) AS wickets FROM ipl_match_data WHERE season = '2014' AND wicket_type NOT IN ('runout', 'retiredhurt') AND wicket_type IS NOT NULL GROUP BY bowler ORDER BY wickets DESC; ";
    }
    else if (selectedSeason === '8' && selectedStat === 'highest_scores') {
        query = "SELECT striker AS player, SUM(runs_off_bat) AS total_runs FROM ipl_match_data WHERE season = '2015' AND (player_dismissed IS NULL OR wicket_type NOT IN ('runout', 'retiredhurt')) GROUP BY striker ORDER BY total_runs DESC; ";
    }
    else if (selectedSeason === '8' && selectedStat === 'most_sixes') {
        query = "SELECT striker AS player, COUNT(*) AS sixes FROM ipl_match_data WHERE season = '2015' AND runs_off_bat = 6 GROUP BY striker ORDER BY sixes DESC; ";
    }
    else if (selectedSeason === '8' && selectedStat === 'most_fours') {
        query = "SELECT striker AS player, COUNT(*) AS fours FROM ipl_match_data WHERE season = '2015' AND runs_off_bat = 4 GROUP BY striker ORDER BY fours DESC; ";
    }
    else if (selectedSeason === '8' && selectedStat === 'most_wickets') {
        query = "SELECT bowler AS player, COUNT(*) AS wickets FROM ipl_match_data WHERE season = '2015' AND wicket_type NOT IN ('runout', 'retiredhurt') AND wicket_type IS NOT NULL GROUP BY bowler ORDER BY wickets DESC; ";
    }
    else if (selectedSeason === '9' && selectedStat === 'highest_scores') {
        query = "SELECT striker AS player, SUM(runs_off_bat) AS total_runs FROM ipl_match_data WHERE season = '2016' AND (player_dismissed IS NULL OR wicket_type NOT IN ('runout', 'retiredhurt')) GROUP BY striker ORDER BY total_runs DESC; ";
    }
    else if (selectedSeason === '9' && selectedStat === 'most_sixes') {
        query = "SELECT striker AS player, COUNT(*) AS sixes FROM ipl_match_data WHERE season = '2016' AND runs_off_bat = 6 GROUP BY striker ORDER BY sixes DESC; ";
    }
    else if (selectedSeason === '9' && selectedStat === 'most_fours') {
        query = "SELECT striker AS player, COUNT(*) AS fours FROM ipl_match_data WHERE season = '2016' AND runs_off_bat = 4 GROUP BY striker ORDER BY fours DESC; ";
    }
    else if (selectedSeason === '9' && selectedStat === 'most_wickets') {
        query = "SELECT bowler AS player, COUNT(*) AS wickets FROM ipl_match_data WHERE season = '2016' AND wicket_type NOT IN ('runout', 'retiredhurt') AND wicket_type IS NOT NULL GROUP BY bowler ORDER BY wickets DESC; ";
    }
    else if (selectedSeason === '10' && selectedStat === 'highest_scores') {
        query = "SELECT striker AS player, SUM(runs_off_bat) AS total_runs FROM ipl_match_data WHERE season = '2017' AND (player_dismissed IS NULL OR wicket_type NOT IN ('runout', 'retiredhurt')) GROUP BY striker ORDER BY total_runs DESC; ";
    }
    else if (selectedSeason === '10' && selectedStat === 'most_sixes') {
        query = "SELECT striker AS player, COUNT(*) AS sixes FROM ipl_match_data WHERE season = '2017' AND runs_off_bat = 6 GROUP BY striker ORDER BY sixes DESC; ";
    }
    else if (selectedSeason === '10' && selectedStat === 'most_fours') {
        query = "SELECT striker AS player, COUNT(*) AS fours FROM ipl_match_data WHERE season = '2017' AND runs_off_bat = 4 GROUP BY striker ORDER BY fours DESC; ";
    }
    else if (selectedSeason === '10' && selectedStat === 'most_wickets') {
        query = "SELECT bowler AS player, COUNT(*) AS wickets FROM ipl_match_data WHERE season = '2017' AND wicket_type NOT IN ('runout', 'retiredhurt') AND wicket_type IS NOT NULL GROUP BY bowler ORDER BY wickets DESC; ";
    }
    else if (selectedSeason === '11' && selectedStat === 'highest_scores') {
        query = "SELECT striker AS player, SUM(runs_off_bat) AS total_runs FROM ipl_match_data WHERE season = '2018' AND (player_dismissed IS NULL OR wicket_type NOT IN ('runout', 'retiredhurt')) GROUP BY striker ORDER BY total_runs DESC; ";
    }
    else if (selectedSeason === '11' && selectedStat === 'most_sixes') {
        query = "SELECT striker AS player, COUNT(*) AS sixes FROM ipl_match_data WHERE season = '2018' AND runs_off_bat = 6 GROUP BY striker ORDER BY sixes DESC; ";
    }
    else if (selectedSeason === '11' && selectedStat === 'most_fours') {
        query = "SELECT striker AS player, COUNT(*) AS fours FROM ipl_match_data WHERE season = '2018' AND runs_off_bat = 4 GROUP BY striker ORDER BY fours DESC; ";
    }
    else if (selectedSeason === '11' && selectedStat === 'most_wickets') {
        query = "SELECT bowler AS player, COUNT(*) AS wickets FROM ipl_match_data WHERE season = '2018' AND wicket_type NOT IN ('runout', 'retiredhurt') AND wicket_type IS NOT NULL GROUP BY bowler ORDER BY wickets DESC; ";
    }
    else if (selectedSeason === '12' && selectedStat === 'highest_scores') {
        query = "SELECT striker AS player, SUM(runs_off_bat) AS total_runs FROM ipl_match_data WHERE season = '2019' AND (player_dismissed IS NULL OR wicket_type NOT IN ('runout', 'retiredhurt')) GROUP BY striker ORDER BY total_runs DESC; ";
    }
    else if (selectedSeason === '12' && selectedStat === 'most_sixes') {
        query = "SELECT striker AS player, COUNT(*) AS sixes FROM ipl_match_data WHERE season = '2019' AND runs_off_bat = 6 GROUP BY striker ORDER BY sixes DESC; ";
    }
    else if (selectedSeason === '12' && selectedStat === 'most_fours') {
        query = "SELECT striker AS player, COUNT(*) AS fours FROM ipl_match_data WHERE season = '2019' AND runs_off_bat = 4 GROUP BY striker ORDER BY fours DESC; ";
    }
    else if (selectedSeason === '12' && selectedStat === 'most_wickets') {
        query = "SELECT bowler AS player, COUNT(*) AS wickets FROM ipl_match_data WHERE season = '2019' AND wicket_type NOT IN ('runout', 'retiredhurt') AND wicket_type IS NOT NULL GROUP BY bowler ORDER BY wickets DESC; ";
    }
    else if (selectedSeason === '13' && selectedStat === 'highest_scores') {
        query = "SELECT striker AS player, SUM(runs_off_bat) AS total_runs FROM ipl_match_data WHERE season = '2020/21' AND (player_dismissed IS NULL OR wicket_type NOT IN ('runout', 'retiredhurt')) GROUP BY striker ORDER BY total_runs DESC; ";
    }
    else if (selectedSeason === '13' && selectedStat === 'most_sixes') {
        query = "SELECT striker AS player, COUNT(*) AS sixes FROM ipl_match_data WHERE season = '2020/21' AND runs_off_bat = 6 GROUP BY striker ORDER BY sixes DESC; ";
    }
    else if (selectedSeason === '13' && selectedStat === 'most_fours') {
        query = "SELECT striker AS player, COUNT(*) AS fours FROM ipl_match_data WHERE season = '2020/21' AND runs_off_bat = 4 GROUP BY striker ORDER BY fours DESC; ";
    }
    else if (selectedSeason === '13' && selectedStat === 'most_wickets') {
        query = "SELECT bowler AS player, COUNT(*) AS wickets FROM ipl_match_data WHERE season = '2020/21' AND wicket_type NOT IN ('runout', 'retiredhurt') AND wicket_type IS NOT NULL GROUP BY bowler ORDER BY wickets DESC; ";
    }
    else if (selectedSeason === '14' && selectedStat === 'highest_scores') {
        query = "SELECT striker AS player, SUM(runs_off_bat) AS total_runs FROM ipl_match_data WHERE season = '2021' AND (player_dismissed IS NULL OR wicket_type NOT IN ('runout', 'retiredhurt')) GROUP BY striker ORDER BY total_runs DESC; ";
    }
    else if (selectedSeason === '14' && selectedStat === 'most_sixes') {
        query = "SELECT striker AS player, COUNT(*) AS sixes FROM ipl_match_data WHERE season = '2021' AND runs_off_bat = 6 GROUP BY striker ORDER BY sixes DESC; ";
    }
    else if (selectedSeason === '14' && selectedStat === 'most_fours') {
        query = "SELECT striker AS player, COUNT(*) AS fours FROM ipl_match_data WHERE season = '2021' AND runs_off_bat = 4 GROUP BY striker ORDER BY fours DESC; ";
    }
    else if (selectedSeason === '14' && selectedStat === 'most_wickets') {
        query = "SELECT bowler AS player, COUNT(*) AS wickets FROM ipl_match_data WHERE season = '2021' AND wicket_type NOT IN ('runout', 'retiredhurt') AND wicket_type IS NOT NULL GROUP BY bowler ORDER BY wickets DESC; ";
    }
    else if (selectedSeason === '15' && selectedStat === 'highest_scores') {
        query = "SELECT striker AS player, SUM(runs_off_bat) AS total_runs FROM ipl_match_data WHERE season = '2022' AND (player_dismissed IS NULL OR wicket_type NOT IN ('runout', 'retiredhurt')) GROUP BY striker ORDER BY total_runs DESC; ";
    }
    else if (selectedSeason === '15' && selectedStat === 'most_sixes') {
        query = "SELECT striker AS player, COUNT(*) AS sixes FROM ipl_match_data WHERE season = '2022' AND runs_off_bat = 6 GROUP BY striker ORDER BY sixes DESC; ";
    }
    else if (selectedSeason === '15' && selectedStat === 'most_fours') {
        query = "SELECT striker AS player, COUNT(*) AS fours FROM ipl_match_data WHERE season = '2022' AND runs_off_bat = 4 GROUP BY striker ORDER BY fours DESC; ";
    }
    else if (selectedSeason === '15' && selectedStat === 'most_wickets') {
        query = "SELECT bowler AS player, COUNT(*) AS wickets FROM ipl_match_data WHERE season = '2022' AND wicket_type NOT IN ('runout', 'retiredhurt') AND wicket_type IS NOT NULL GROUP BY bowler ORDER BY wickets DESC; ";
    }
    else if (selectedSeason === '16' && selectedStat === 'highest_scores') {
        query = "SELECT striker AS player, SUM(runs_off_bat) AS total_runs FROM ipl_match_data WHERE season = '2023' AND (player_dismissed IS NULL OR wicket_type NOT IN ('runout', 'retiredhurt')) GROUP BY striker ORDER BY total_runs DESC; ";
    }
    else if (selectedSeason === '16' && selectedStat === 'most_sixes') {
        query = "SELECT striker AS player, COUNT(*) AS sixes FROM ipl_match_data WHERE season = '2023' AND runs_off_bat = 6 GROUP BY striker ORDER BY sixes DESC; ";
    }
    else if (selectedSeason === '16' && selectedStat === 'most_fours') {
        query = "SELECT striker AS player, COUNT(*) AS fours FROM ipl_match_data WHERE season = '2023' AND runs_off_bat = 4 GROUP BY striker ORDER BY fours DESC; ";
    }
    else if (selectedSeason === '16' && selectedStat === 'most_wickets') {
        query = "SELECT bowler AS player, COUNT(*) AS wickets FROM ipl_match_data WHERE season = '2023' AND wicket_type NOT IN ('runout', 'retiredhurt') AND wicket_type IS NOT NULL GROUP BY bowler ORDER BY wickets DESC; ";
    }
    else{
        query = 'select * from public.ipl_match_data;';
    }
    const result = await client.query(query);
    res.json(result.rows);
});
// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`); // Corrected to use template literal
});
