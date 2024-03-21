//import thu vien
const express= require('express');
const mailer= require('nodemailer');
const app = express();//tao doi tuong server
//tao transporter
let transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
      user:'caohaianh26@gmail.com',
      pass:'pijt ipya xkpj ikss'
    }
});
//Chuan bi thong tin
let maiOption ={
    from:'caohaianh26@gmail.com',
    to:'nguyenanhlinh66.dhcd@gmail.com',
    subject:'Muốn nói là:',
    text:'Nhớ emmmmmmmm'
};
//gui email
transporter.sendMail(maiOption,(error,info)=>{
    if (error) {
        console.error(error);

    }else{
        console.log('Thanh cong: '+ info.messageId);
    }
});
//khoi dong may chu(server)
app.listen(3004,()=>{
    console.log('server dang chay 3004')
});