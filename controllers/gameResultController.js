const gamesResult = require('../models/gameResultSchema');
const AddGameResult = async (req, res) => {
    try {
        console.log("req.body=>", req.body);
        const result = await gamesResult.create(req.body);
        res.status(201).send(result);
    } catch (error) {
        console.error('Error in game adding Result', error);
        res.status(500).send("Error adding Result ");
    }
};

// const GetGameResults = async (req, res) => {
//     try {
//         const { date } = req.query; // Assuming date is passed as a query parameter
//         console.log("dat===>",date);
        
//         let query = {};
//         if (date) {
//             query = { date: { $gte: new Date(date), $lt: new Date(date + 'T23:59:59') } };
//         }

//         const results = await gamesResult.find(query);

//         if (results) {
//             res.status(200).send(results);
//         } else {
//             res.status(404).send("No results found for the given date");
//         }
//     } catch (error) {
//         console.error('Error fetching game results:', error);
//         res.status(500).send("Internal Server Error");
//     }
// };

const GetGameResults = async (req, res) => {
    try {
      const { date } = req.query;
  
      // Validate date parameter
      if (!date || isNaN(new Date(date).getTime())) {
        return res.status(400).send('Invalid date parameter');
      }
  
      const startDate = new Date(date);
      startDate.setUTCHours(0, 0, 0, 0); // Start of the day in UTC
      const endDate = new Date(startDate);
      endDate.setUTCHours(23, 59, 59, 999); // End of the day in UTC
  
      const results = await gamesResult.find({
        date: { '$gte': startDate, '$lt': endDate }
      });
  
      res.json(results);
    } catch (error) {
      console.error('Error fetching game results:', error);
      res.status(500).send('Error fetching game results');
    }
  };
  





const DeleteGameResult = async(req, res) => {
    try {
        console.log("delete req.body=>", req.body);
        const result = await gamesResult.findByIdAndDelete({_id: req.body.id});
        if (result) {
            res.status(201).send(result);
        } else {
            res.status(500).send("Error deleting result");
        }
    } catch (error) {
        console.error('Error deleting game result:', error);
        res.status(500).send("Internal Server Error");
    }
};

const getGamesResultByMonth = async (req, res) => {
    try {
        const { startDate, endDate } = req.query;
        // Query MongoDB to fetch results within the date range
        const results = await gamesResult.find({
            date: {
                $gte: new Date(startDate),
                $lte: new Date(endDate),
            },
        }).exec();
        res.status(200).json(results);
    } catch (error) {
        console.error('Error fetching game results:', error);
        res.status(500).json({ error: 'Error fetching game results' });
    }
};

module.exports = {
    AddGameResult,
    GetGameResults,
    DeleteGameResult,
    getGamesResultByMonth
};
