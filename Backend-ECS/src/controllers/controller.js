import Question from "../models/qnsSchema.js";
import Result from "../models/resultSchema.js";
import { questions } from "../db/data.js";

// GET Questions
export async function getQuestions(req, res) {
    try {
        const q = await Question.find();
        res.json(q);
    } catch (error) {
        res.status(500).json(error);
    }
}

// ADD Questions
export async function insertQuestion(req, res) {
    try {
        await Question.insertMany(questions);
        res.json({ msg: "Inserted successfully" });
    } catch (error) {
        res.status(500).json(error);
    }
}

// DELETE Questions
export async function dropQuestion(req, res) {
    try {
        await Question.deleteMany();
        res.json({ msg: "Deleted successfully" });
    } catch (error) {
        res.status(500).json(error);
    }
}

// GET Results
export async function getResults(req, res) {
    try {
        const r = await Result.find();
        res.json(r);
    } catch (error) {
        res.status(500).json(error);
    }
}

export async function storeResult(req, res) {
    try {
        const { username, answers, attempts, points } = req.body;

        // Proper validation check
        if (!username || !answers) {
            return res.status(400).json({ error: "Data not provided" });
        }

        // Ensure answers is an array
        if (!Array.isArray(answers)) {
            return res.status(400).json({ error: "Answers must be an array" });
        }

        // Store in database
        await Result.create({ username, answers, attempts, points });

        res.json({ msg: "Result stored successfully" });

    } catch (error) {
        console.error("Error storing result:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}



// DELETE Results
export async function dropResult(req, res) {
    try {
        await Result.deleteMany();
        res.json({ msg: "Deleted successfully" });
    } catch (error) {
        res.status(500).json(error);
    }
}
