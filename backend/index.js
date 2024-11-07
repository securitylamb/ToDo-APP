// write  basic nodejs boiler plate code 
// with express.json middleware
const express = require('express');
const app = express();
const port = 3000;
const {create_todos} = require('./types');
const { todo } = require('./db');
const cors = require('cors');
app.use(express.json());
app.use(cors());

app.get('/todos', async (req, res) => {
    // this will give everything 
   const todofind = await todo.find({}) // promise
   res.json({
    todofind
   })
});

app.post('/todo', async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = create_todos.safeParse(createPayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg:"you send the wrong input"
        })
        return;
    } else {
        // put in monodb
        await todo.create({
            title:createPayload.title,
            description:createPayload.description,
            completed:false
        })

        res.json({
            msg:"todo created"
        })
    }
  
});

app.put('/completed', (req, res) => {
    const createPayload = req.body;
    const parsedPayload = update_todos.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg:"you send the wrong input"
        })
        return;
    } else {
        // all good
        todo.update({
            _id: req.body.id
        }, {
            completed: true
        })

        res.json({
            msg:"todo updated"
        })
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});