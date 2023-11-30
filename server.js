const express= require('express');
const app=express();
const mongoose = require('mongoose');
const dB = require('./middleware/dB');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');

//http://localhost:3000



app.use(express.json());
dB.connectToDB();


//postRoutes
app.use('/', postRoutes);

//commentRoutes
app.use('/', commentRoutes);

const uri = "mongodb+srv://pulkit1091:Pulkit0166@cluster0.as9rmgh.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri,{
  useNewUrlParser:true,
  useUnifiedTopology:true
})

.then(()=>console.log('Database Connected'))
.catch(()=>console.log('Error'))



app.listen(4000, () => {
    console.log("Server has started on 4000");
})
