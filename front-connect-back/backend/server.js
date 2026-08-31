import express from 'express';
const app = express();

// app.get('/',(req,res) =>{
//     res.send('server is ready');
// });

app.get('/api/jokes',(req, res) => {
    const jokes = [
        {
            id : 1,
            title : 'std1',
            content: 'Shreya lokhande'
        },
        {
            id : 2,
            title:'std2',
            content: 'shruti lokhande'
        },
        {
            id:3,
            title : 'std3',
            content : 'shourya thakare'
        },
        {
            id : 4,
            title : 'std4',
            content : 'satyam thakare'
        }
    ];
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
})