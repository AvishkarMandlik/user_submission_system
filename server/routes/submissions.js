const express = require('express');
const multer = require('multer');
const path = require('path');
const Submission = require('../models/Submission');

const router = express.Router();

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

router.post('/', upload.array('images', 10), async (req, res) => {
  const { name, socialMediaHandle } = req.body;
  const imagePaths = req.files.map(file => file.path);

  try {
    const newSubmission = new Submission({
      name,
      socialMediaHandle,
      images: imagePaths,
    });
    await newSubmission.save();
    res.status(201).json({ message: 'Submission saved successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

router.get('/', async (req, res) => {
  try {
    const submissions = await Submission.find();
    res.status(200).json(submissions);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;