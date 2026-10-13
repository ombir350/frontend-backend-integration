import express from 'express';
const app=express();

// app.get('/', (req,res)=>{
//     res.send('server is ready');
// });

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'Why did the developer go broke? Because he used up all his cache!'
        },
        {
            id: 2,
            title: 'Another joke',
            content: 'Why do programmers prefer dark mode? Because light attracts bugs!'
        },
        {
            id: 3,
            title: 'Funny coding joke',
            content: 'Why was the JavaScript developer sad? Because he did not know how to null his feelings!'
        },
        {
            id: 4,
            title: 'Computer joke',
            content: 'Why did the computer get cold? Because it left its Windows open!'
        },
        {
            id: 5,
            title: 'Programmer joke',
            content: 'How many programmers does it take to change a light bulb? None, that is a hardware problem!'
        },
        {
            id: 6,
            title: 'Debugging joke',
            content: 'A programmer had a problem and decided to use recursion. Now he has two problems!'
        },
        {
            id: 7,
            title: 'Database joke',
            content: 'Why did the database administrator leave the party? Because everyone kept asking for a JOIN!'
        },
        {
            id: 8,
            title: 'HTML joke',
            content: 'Why did the HTML element go to therapy? It had too many issues with its parents!'
        },
        {
            id: 9,
            title: 'Java joke',
            content: 'Why do Java developers wear glasses? Because they cannot C#!'
        },
        {
            id: 10,
            title: 'API joke',
            content: 'Why did the API break up with the frontend? There was no connection!'
        }
    ];

    res.json(jokes);
});

const port=process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`Server at http//localhost:${port}`)
});