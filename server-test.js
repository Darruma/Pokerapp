const express = require('express');
const app = express();
const path = require('path')


app.get('/api/leaderboard', (req, res) => {
    res.send([
        {
            username: 'steve',
            points: 10
        },
        {
            username: 'bob',
            points: 10
        },
        {
            username: 'hitler',
            points: 10
        }
    ]);
}
)


app.get('/api/profile/:username', (req, res) => {

    res.send(
        {
            username: req.params.username,
            password: 'lol',
            image: 'https://pbs.twimg.com/profile_images/972170159614906369/0o9cdCOp_400x400.jpg',
            bio: 'Death is the solution to all problems. No man - no problem.',
            header: 'https://static.joomlart.com/images/blog/2016/october/facebook-covers/Halloween-Facebook-Cover-13.png',
            priceData: [{ date: '01/2018', points: 300 }, { date: '02/2018', points: 220 }, { date: '03/2018', points: 100 }, { date: '04/2018', points: 59 }, { date: '05/2018', points: 20 }, { date: '06/2018', points: 45 }, { date: '07/2018', points: 400 }],
            wins:20,
            losses:30,
            draws:5,
            friends: [
                {
                    friendName: 'hitler',
                    image: 'https://www.historyonthenet.com/wp-content/uploads/2014/11/PROD-Adolf-Hitler-whrend-einer-Rede.jpg'
                },
                {
                    friendName: 'stalin',
                    image: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NTU2MzE2Mzc0NDY4MTA3/joseph-stalin-9491723-1-402.jpg'
                },
                {
                    friendName: 'mao',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Mao_Zedong_1963_%28cropped%29.jpg/220px-Mao_Zedong_1963_%28cropped%29.jpg'
                }
            ],
            posts: [{ title: 'anime', content: 'if you dont like tesla you are a pedo' }, { title: 'test', content: 'test' }
                , { title: 'asdosdkd', content: 'sdklsakdksdklsd' }, { title: 'yah', content: 'yeet' }, { title: 'marvel movies are great', content: 'so is rick and morty' },
            { title: 'test', content: 'test' },
            { title: 'George Bush', content: 'Likes fornite' }]
        }
    )
});

const port = process.env.PORT || 3005;
app.use(express.static('client/build'));
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'client/build/index.html'));
  });
app.listen(port, () => console.log(`Listening on port ${port}`));