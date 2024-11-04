import Subject from "./../models/subjetc.model.js";


export const getSubjectById = async (req, res) => {
    //print id
    const idToSearch = req.params.id;

    try {
        const subject = await Subject.findById(idToSearch);
        res.json(subject);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        res.writeHead(404, {
            'Content-Type': 'text/plain'
        });
        res.send('Subject not found');
    }
};


export const createSubject = async (req, res) => {
    const {
        fullname,
        bithdate,
        deathdate,
        birthplace,
        spousesId,
        fatherId,
        motherId,
    } = req.body;

    try {
        const newSubject = new Subject({
            fullname,
            bithdate,
            deathdate,
            birthplace,
            spousesId,
            fatherId,
            motherId,
        });
        const savedSubject = await newSubject.save();
        console.log(`Subject ${fullname} created successfully`);
        res.json(savedSubject);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        res.statusMessage = 'Subject creation failed';
        res.status(500).end();

    }
};

export const updateSubjectInfoById = async (req, res) => {};
export const deleteSubjectInfoById = async (req, res) => {};