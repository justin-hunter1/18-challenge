const { User, Thought } = require("../model/index.js");

module.exports = {

    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        }
        catch (err) {
            res.status(500)
               .json(err);
        }
    },

    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
                .select('-__v');

            if (!user) {
                return res.status(404)
                          .json({ message: "No user found" });
            }

            res.json(user);
        }
        catch (err) {
            res.status(500)
               .json(err);
        }
    },

    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        }
        catch (err) {
            res.status(500)
               .json(err);
        }
    },

    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId });

            if (!user) {
                return res.status(404)
                          .json({ message: "No user found" });
            }

        }
        catch (err) {
            res.status(500)
               .json(err);
        }
    },
};
