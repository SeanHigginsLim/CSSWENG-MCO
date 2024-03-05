const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const repairSchema = new Schema({
    // reservationNumber: {
    //     type: Number,
    //     required: true,
    //     unique: true
    // },
    // name: {
    //     type: String,
    //     required: true
    // },
    // seatNum: {
    //     type: Number,
    //     required: true,
    // },
    // timeReserved: {
    //     type: String,
    //     required: true,
    // },
    // finalTimeReserved: {
    //     type: String,
    //     required: true,
    // },
    // dateReserved: {
    //     type: String,
    //     required: true,
    // },
    // labNumber: {
    //     type: Number,
    //     required: true
    // }
});

const Repair = mongoose.model('repair', repairSchema);

module.exports = Repair;