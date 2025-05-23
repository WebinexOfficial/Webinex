const express = require('express');
const router = express.Router();
const SeoProject = require('../models/SeoProject');
const catchAsync = require('../core/catchAsync');

router.get('/seoProjects', async(req, res) => {
    const seoProjects = await SeoProject.find({}); // Remember product should start with capital P roduct
    res.json(seoProjects);
});

//create project
router.post('/seoProjects', catchAsync(async (req, res) => {
    console.log('Entry in create project');
    const { Title, image, description, projectLink, tags } = req.body;

    try {
        const seoProject = new SeoProject({ Title, image, description, projectLink, tags });
        await seoProject.save();
        console.log(seoProject);

        res.json({
            message: "Project created successfully",
            seoProjectId: seoProject._id
        });
    } catch (error) {
        console.error('Error creating project:', error);
        res.status(500).json({
            message: "Error creating project",
            error: error.message
        });
    }
}));

//update Project
router.patch('/seoProjects/:seoProjectId', catchAsync(async (req, res) => {
    const { seoProjectId } = req.params;
    const { title, image, description, projectLink, tags } = req.body;
    await SeoProject.findByIdAndUpdate(seoProjectId, { title, image, description, projectLink, tags });
    res.status(200).json({ message: 'project updated successfully' });
}));

// Delete a project
router.delete('/seoProjects/:seoProjectId', catchAsync(async (req, res) => {
    const { seoProjectId } = req.params;
    await SeoProject.findByIdAndDelete(seoProjectId);
    res.status(200).json({ message: 'project deleted successfully' });
}));

module.exports = router;
