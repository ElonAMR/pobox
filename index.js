const express = require('express'); // משתמש בפונקציה require כדי לייבא את המודול express הוא חלק מהפקודה המרכזית ליצירת שרת HTTP באמצעות Node.js
const port = 5533; // הגדרת port ערוצים שאיתו הוא מתקשר
const app = express();//פה אני מבקש ממנו בוא ותשתמש לי בסיפרייה הזאת
app.use(express.json());//כאן אומר לו להשתמש באקספקס לעבודה עם json

//------------------------------------------------
app.get("/",(req, res) => {
    res.sendFile("./index.html", {root: __dirname}); // פקודה ששולחת את הקובץ
});















app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`);
});



