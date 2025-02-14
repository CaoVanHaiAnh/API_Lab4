const express=require('express');
const mongoose= require('mongoose');
const bodyParser= require('body-parser');
const sinhvienRoute= require('./routes/sinhvienRoutes');
const app=express();//tao doi tuong moi
//ket noi mongoose db
mongoose.connect('mongodb+srv://anhcvhph41274:caohaianh123@cluster0.iem5djl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("hket noi thanh cong");
}).catch((err)=>{
    console.error(err);
});
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
//su dung route
app.use('/',sinhvienRoute);
//goi den file ejs
app.set('view engine','ejs');
//tao port
const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log("dang chay");
});

