const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
let dummy=
    {
        "ok": true,
        "members": [{
                "id": "W012A3CDE",
                "real_name": "Egon Spengler",
                "tz": "America/Los_Angeles",
                "activity_periods": [{
                        "start_time": "Feb 1 2020  1:33PM",
                        "end_time": "Feb 1 2020 1:54PM"
                    },
                    {
                        "start_time": "Mar 1 2020  11:11AM",
                        "end_time": "Mar 1 2020 2:00PM"
                    },
                    {
                        "start_time": "Mar 16 2020  5:33PM",
                        "end_time": "Mar 16 2020 8:02PM"
                    }
                ]
            },
            {
                "id": "W07QCRPA4",
                "real_name": "Glinda Southgood",
                "tz": "Asia/Kolkata",
                "activity_periods": [{
                        "start_time": "Feb 1 2020  1:33PM",
                        "end_time": "Feb 1 2020 1:54PM"
                    },
                    {
                        "start_time": "Mar 1 2020  11:11AM",
                        "end_time": "Mar 1 2020 2:00PM"
                    },
                    {
                        "start_time": "Mar 16 2020  5:33PM",
                        "end_time": "Mar 16 2020 8:02PM"
                    }
                ]
            },
            {
                "id": "Q07QCRPB5",
                "real_name": "Ankur Dwivedi",
                "tz": "India/Allahabad",
                "activity_periods": [{
                        "start_time": "Feb 1 2020  1:33PM",
                        "end_time": "Feb 1 2020 1:54PM"
                    },
                    {
                        "start_time": "Aug 15 2020  11:11AM",
                        "end_time": "Aug 15 2020 2:00PM"
                    },
                    {
                        "start_time": "Aug 15 2020  5:33PM",
                        "end_time": "Aug 15 2020 8:02PM"
                    }
                ]
            },
            {
                "id": "Y07QCRPB6",
                "real_name": "Philiph",
                "tz": "Africa/Madagascar",
                "activity_periods": [{
                        "start_time": "Feb 1 2020  1:33PM",
                        "end_time": "Feb 1 2020 1:54PM"
                    },
                    {
                        "start_time": "Aug 15 2020  11:11AM",
                        "end_time": "Aug 15 2020 2:00PM"
                    }
                ]
            }
        ]
    }


app.get('/api/demo', (req, res) => {
  res.send(dummy);
});



if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
      
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }
  
  app.listen(port, () => console.log(`Listening on port ${port}`));