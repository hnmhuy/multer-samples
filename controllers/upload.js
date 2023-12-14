const controller = {};

controller.singleFileUpload = (req, res) => {
    res.json(
        {
            message: "Upload single file success",
            file: req.file,
            others: req.body
        }
    )
}

controller.multipleFilesUpload = (req, res) => {
    res.json(
        {
            message: "Upload multiple files success",
            files: req.files,
            others: req.body
        }
    )
}

controller.multipleFieldsUpload = (req, res) => {
    res.json(
        {
            message: "Upload multiple files success",
            files: req.files,
            others: req.body
        }
    )
}

module.exports = controller;