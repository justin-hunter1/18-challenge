const { Thought } = require("../model/index.js");


module.exports = {

// Get all thoughts
    async getThought(req, res) {
        try {
            const thought = await Thought.find();
            res.json(thought);
        }
        catch (err) {
            res.status(500)
               .json(err);
        }
    },

// Get a single thought
    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId })
                                      .select('-__v');
            if (!thought) {
                return res.status(404)
                          .json({ message: "No thought found" });
            }
            res.json(thought);
        }
        catch (err) {
            res.status(500)
               .json(err);
        }
    },

// create a new thought
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            res.json(thought);
        }
        catch (err) {
            res.status(500)
               .json(err);
        }
    },

// Update a thought
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId }, { $set: req.body });
            if (!thought) {
                return res.status(404)
                          .json({ message: "No thought found" });
            }
            res.json(thought);
        }
        catch (err) {
            res.status(500)
               .json(err);
        }
    },

// Delete a user and associated apps
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });
            if (!thought) {
                return res.status(404)
                          .json({ message: "No thought found" });
            }
            res.json(thought);
        }
        catch (err) {
            res.status(500)
               .json(err);
        }
    }
};
