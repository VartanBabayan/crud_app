const axios = require('axios');


exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:3000/api/users')
        .then(function(response){
            res.render('index', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.add_user = (req, res) =>{
    res.render('add_user');
}

exports.update_user = (req, res) => {
    axios.get(`http://localhost:3000/api/users/find-by-id`, {params : {id : req.query.id}})
        .then(function(userdata) {
            const user = userdata.data
            res.render("update_user", { user })
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.find_user = (req, res) =>{
    res.render('find_user')
}

exports.about = (req, res) =>{
    res.render('about')
}


exports.answer = (req, res) =>{
    const {name, email, status, gender} = req.query
    console.log(name + " " + email + " " + status)
    res.render('answer', {name, email, status, gender})
}

exports.not_found = (req, res) =>{
    res.render('not_found')
}