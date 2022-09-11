const mongoose=require('mongoose');
//להעביר לתיקיית מודל
const menSchema=mongoose.Schema({
    //שאלון לבחור
    firstName:{type:String},//שם פרטי
    lastName:{type:String},//שם משפחה
    age:{type:Number},//גיל
    status:{type:String},//מצב משפחתי
    bornDate:{type:Date},//תאריך לידה
    countryBirth:{type:String},//ארץ לידה
    city:{type:String},//עיר
    phone:{type:Number},//טלפון
    characters:{type:String},//תכונות אופי
    colorSkin:{type:String},//גוון עור
    height:{type:String},//גובה
    bodyStracture:{type:String},//מבנה גוף
    healthCondition:{type:String},//מצב בריאותי
    economicCondition:{type:String},//מצב כלכלי
    clothingStyle:{type:String},//סגנון לבוש
    look:{type:String},//מראה כללי
    sector:{type:String},//מגזר
    picture:{type:String},//תמונה
    requireMoney:{type:String},//דרישות כספיות
    CommitMoney:{type:String},//התחייבויות כספיות
    yeshivaOrSeminar:{type:String},//שם מקום לימודים
    doingToday:{type:String},//עיסוק כיום
    fatherName:{type:String},//שם האב
    motherName:{type:String},//שם האם
    fatherDoing:{type:String},//עיסוק אב
    motherDoing:{type:String},//עיסוק אם
    mozaAv:{type:String},//מוצא אב
    mozaEm:{type:String},//מוצא אם
    siblings:{type:Number},//מס אחים ואחיות
    halachaMethod:{type:String},//שיטה הלכתית
    drishotSector:{type:String},//דרישות-שיוך מגזרי
    drishotLook:{type:String},//דרישות-מראה כללי
    drishotCharacters:{type:String},//דרישות-תכונות אופי
    drishotFavoriteMoza:{type:String},//דרישות-ארץ מוצא מועדף
    drishotNotMoza:{type:String},//דרישות לא ממוצאd
    drishotHeaddress:{type:String},//דרישות-כיסוי ראש
    fromAge:{type:String},//מגיל
    mostAge:{type:String},//עד גיל
    fromHigh:{type:String},//מגובה
    mostHigh:{type:String},//עד גובה
    casherPhone:{type:Boolean},//טלפון כשר
    licence:{type:Boolean},//רישיון
    smoking:{type:Boolean}//מעשן
});

const Men=new mongoose.model("men",menSchema);
module.exports = {men};