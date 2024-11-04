import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
    fullname : { type: String, required: true },
    bithdate : { type: Date, required: true }, //format: YYYY-MM-DD
    deathdate : { type: Date, required: false },
    birthplace : { type: String, required: true },
    spousesId : { type: [String], required: false },
    sonsId : { type: [String], required: false },
    fatherId : { type: String, required: false },
    motherId : { type: String, required: false },
});

export default mongoose.model('Familiar', subjectSchema);