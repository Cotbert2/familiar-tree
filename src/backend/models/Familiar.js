import mongoose from "mongoose";

const familiarSchema = new mongoose.Schema({
    name : { type: String, required: true },
    bithdate : { type: Date, required: true },
    deathdate : { type: Date, required: false },
    birthplace : { type: String, required: true },
    spousesId : { type: [String], required: false },
    fatherId : { type: String, required: false },
    motherId : { type: String, required: false },
});