const { response } = require('express')
var usermodel = require('../model/insertmodel')

exports.insert = async (req, res) => {
    
    var data = await usermodel.insert(req, res)

    res.status(200).json({
        status: 'success',
        data
    });
}
