const express= require('express');
const multer= require('multer');
const app= express();
const port =3000;
//cau hình multer de luu anh vao thu muc uploads
const storage= multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads');
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname );
    },
});
const upload=multer({storage});
//route để hiện thị
app.get('/upload',(req,res)=>{
    res.sendFile(__dirname+'/upload.html');

});
//upload ảnh
app.post('/upload',upload.single('image'),
(req,res)=>{
    res.send('upload anh thanh cong')
});
//
app.listen(port,()=>{
    console.log('server dang chay cổng 3000'); 
});