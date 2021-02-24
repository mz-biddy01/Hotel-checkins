use hotel_checkins;
db.dropDatabase();

db.checkins.insertMany([
    {
        name: "Helen Aguda",
        email: "helenaguda@gmail.com",
        status: "Checked in"
    },
    {
        name: "Tina Houston",
        email: "tina_houston@icloud.com",
        status: "Checked in"
    },
    {
        name: "Jennifer Lopez",
        email: "jlo@hotmail.com",
        status: "Not checked in"
    },
    {
        name: "Piers Morgan",
        email: "piersknowsall@hotmail.com",
        status: "Not checked in"
    }
]);