const express = require('express');
const router = express.Router();
const Table = require('../models/Table');
router.get('/tables', (req, res) => {

    Table.find(
        {
            gameEnded:false
        },
        (err,tables) =>
        {
            if(err)
            {
                return res.json(
                    {
                        success:false,
                        message:'Server Error'
                    }
                )
            }
            if(!req.session.signedIn)
            {
                return res.json(
                    {
                        success:false,
                        message:'Log in to view tables'
                    }
                );
            }
            return res.json(
                {
                    success:true,
                    payload:tables
                }
            );

        }
    )

});


module.exports = router;
