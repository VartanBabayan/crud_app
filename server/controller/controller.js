var Userdb = require('../model/model');

exports.create = (req,res)=>{

    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    const user = new Userdb({
        name : req.body.name,
        email : req.body.email,
        gender: req.body.gender,
        status : req.body.status
    })

    user.save(user)
        .then(data => {
            res.redirect('/add-user');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });
}

exports.find = (req, res) => {
    Userdb.find()
    .then(user => {
        res.send(user)
    })
    .catch(err => {
        res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
    })
}

exports.findOneUser = (req, res) => {
    const {email} = req.query
    Userdb.findOne({email})
            .then(data =>{
                if(!data) {
                    res.redirect(`/not_found`);
                } else {
                    res.redirect(`/answer?name=${data.name}&email=${data.email}&status=${data.status}&gender=${data.gender}`)
                }
            })
            .catch(err => {
                res.status(500).send({ message: "Erro retrieving user with email " + email })
            })
}

exports.findById = (req, res) => {
    const {id} = req.query
    Userdb.findById(id)
            .then(data =>{
                if(!data) {
                    res.status(404).send({ message : "Not found user with id "+ id })
                } else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({ message: "Erro retrieving user with id " + id })
            })
}

exports.update = (req, res) => {

    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const {id} = req.body;
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                res.redirect("/")
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })
}

exports.delete = (req, res)=>{
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "User was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}