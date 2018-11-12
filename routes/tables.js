const express = require('express');
const router = express.Router();
const Table = require('../models/Table');
router.get('/tables', (req, res) => {

    Table.find(
        {
            gameEnded: false
        },
        (err, tables) => {
            if (err) {
                return res.json(
                    {
                        success: false,
                        message: 'Server Error'
                    }
                )
            }
            if(tables.length == 0)
            {
                return res.json(
                    {
                        success:false,
                        message:'No games'
                    }
                )
            }
            if (!req.session.signedIn) {
                return res.json(
                    {
                        success: false,
                        message: 'Log in to view tables'
                    }
                );
            }
            return res.json(
                {
                    success: true,
                    payload: tables.map(element =>
                        {
                            return element.lobbyData
                        })
                }
            );

        }
    )

});


module.exports = router;
