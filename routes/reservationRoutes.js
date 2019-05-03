let Reservation = require('../models/Reservations')

module.exports = app => {

    app.post("/reservation/create", (req, res) => {
        let instance = new Reservation({
            date: req.body.date,
            breaks: req.body.breaks,
            player_1: req.body.player_1,
            player_2: req.body.player_2,
            player_3: req.body.player_3,
            player_4: req.body.player_4,
        });

        instance.save(function (err) {
            if (err) return handleError(err);
            res.sendStatus(200);
        });
    });

    app.get("/reservations", (req, res) => {
        Reservation.find({}, function(err, Reservation) {
            if (err) throw err;
            res.send(Reservation);
        });
    });
};