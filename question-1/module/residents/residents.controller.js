const residents = require("../../data/data");

let msg = {}

exports.getResidentController = async (req, res, next) => {
    try {
        const residentId = parseInt(req.params.id);
        const resident = residents.find((r) => r.id === residentId);

        if (resident) {
            msg.message = "success"
            msg.data = resident
            res.status(200).json(msg);
        }
    } catch (err) {
        msg.message = "Resident not found"
        msg.data = err.message
        res.status(400).json(msg);
    }
}


exports.searchResidentController = async (req, res, next) => {
    try {
        const {fields} = req.body;
        const filteredResidents = residents.map((resident) => {
            const filteredData = {};

            fields.forEach((field) => {
                if (field in resident.biography) {
                    filteredData[field] = resident.biography[field];
                }
            });

            return {
                id: resident.id,
                name: resident.name,
                biography: filteredData,
            };
        });

        msg.message = "success"
        msg.data = filteredResidents
        res.status(200).json(msg);

    } catch (err) {
        msg.message = "Resident not found"
        msg.data = err.message
        res.status(400).json(msg);
    }
}