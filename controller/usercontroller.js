const { User } = require("../model/index.js");

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

    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId }, { $set: req.body });

            if (!user) {
                return res.status(404)
                          .json({ message: "No user found" });
            }
            return res.status(200)
                      .json({message: "User updated"});
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
            return res.status(200)
                      .json({message: "User deleted"});
        }
        catch (err) {
            res.status(500)
               .json(err);
        }
    },

    async createFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId }, { $addToSet: { friends: params.friendId } }, { new: true });

            if (!user) {
                return res.status(404)
                          .json({ message: "No user found" });
            }
            return res.status(200)
                      .json({message: "User updated"});
        }
        catch (err) {
            res.status(500)
               .json(err);
        }
    },

    async deleteFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId }, { $pull: { friends: params.friendId } });

            if (!user) {
                return res.status(404)
                          .json({ message: "No user found" });
            }
            return res.status(200)
                      .json({message: "User updated"});
        }
        catch (err) {
            res.status(500)
               .json(err);
        }
    },
};
