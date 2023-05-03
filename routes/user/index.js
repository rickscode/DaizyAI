const express = require('express');
const db = require("../models");
const User = db.user;

// Prepare Core Router
let app = express.Router()

app.post('/refresh/profile', async  (req, res) => {
	let user = await User.findOne({ _id: req.user._id })
	let profile = {
        ...user.toObject()
    }

	delete profile.password
	res.json({
		profile: profile
	})
})

module.exports = app