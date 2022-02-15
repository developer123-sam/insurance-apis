const Document = require("../model/document-model")


// ADD DOCUMENT 

exports.adddocument = async (req, res) => {
    try {
        const document = new Document()
        document.user = req.user._id

        document.adddocument = {
            documentimage: req.files['documentimage'][0].filename,
            documentname: req.body.documentname,
            documentdate: req.body.documentdate,
            documentremark: req.body.documentremark,
        };

        document.save(function (err) {
            if (err) {
                console.log(err);
                return res.status(500).json(err);
            }
            res.json({
                message: "document add Successfully",
                data: document,
            });
        });
    } catch (error) {
        console.log(error)
        return res.status(400).json({ msg: "something went wrong", error: error.message })
    }
}

// GET DOCUMENT

exports.getdocument = async (req, res) => {
    try {
        const getdocument = await Document.find({ user: req.user._id })
        return res.status(200).json({ msg: "get document successfully", getdocument })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ msg: "something went wrong", error: error.message })
    }
}

// DELETE DOCUMENT

exports.deletedocument = async (req, res) => {
    try {
        const deletedocument = await Document.deleteOne({ user: req.user._id })
        return res.status(200).json({ msg: "delete Insurance successfully", deletedocument })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ msg: "something went wrong", error: error.message })
    }
}