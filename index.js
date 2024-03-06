const express  = require('express')
const app = express();
const port = 3000;
app.use(express.json())

const {arr} = require('./Datafile')

// -------- Get products from the Array ----------
app.get('/products',(req,res)=>{
    return res.json(arr)
})

// -------- Get particular products from the Array ----------
app.get('/products/:id',(req,res)=>{
    
    const id = req.params.id;
    const specfic_data = arr.find((item)=>{
        return item.id == +id;
    })

    return res.json({data :specfic_data})
})

// -------- Insert data in the Array ----------
app.post('/products', (req,res)=>{

    const newItem = req.body;
    return res.json([...arr,newItem])
})

// ------------ Update the Item of the Array ------------
app.put('/products/:id',(req,res)=>{

    const id = req.params.id;
    const newItem = req.body;
    const getItem = arr.find(item=>item.id == id);

    const update_Item = {...getItem,...newItem}

    return res.json({updateData: update_Item}   )

})

// ------------ Delete the Item of the Array ------------

app.delete('/products/:id',(req,res)=>{

    const id = req.params.id;
    const after_delete = arr.splice(id,1)

    return res.json(after_delete)

})
app.listen(port, ()=>{
    console.log("Express nodemon server is running!");
})
