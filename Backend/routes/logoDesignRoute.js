const express = require('express');
const router = express.Router();
const LogoDesignProject = require('../models/LogoDesignProject');
const catchAsync = require('../core/catchAsync');

router.get('/logoDesignProjects', async (req, res) => {
    const logoDesignProjects = await LogoDesignProject.find({});
    res.json(logoDesignProjects);
});

//create project
router.post('/logoDesignProjects', catchAsync(async (req, res) => {
    console.log('Entry in create project');
    const { Title, image, description, projectLink, tags } = req.body;

    try {
        const logoDesignProject = new LogoDesignProject({ Title, image, description, projectLink, tags });
        await logoDesignProject.save();
        console.log(logoDesignProject);

        res.json({
            message: "Project created successfully",
            logoDesignProjectId: logoDesignProject._id
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
router.patch('/logoDesignProjects/:logoDesignProjectId', catchAsync(async (req, res) => {
    const { logoDesignProjectId } = req.params;
    const { title, image, description, projectLink, tags } = req.body;
    await LogoDesignProject.findByIdAndUpdate(logoDesignProjectId, { title, image, description, projectLink, tags });
    res.status(200).json({ message: 'project updated successfully' });
}));

// Delete a project
router.delete('/logoDesignProjects/:logoDesignProjectId', catchAsync(async (req, res) => {
    const { logoDesignProjectId } = req.params;
    await LogoDesignProject.findByIdAndDelete(logoDesignProjectId);
    res.status(200).json({ message: 'project deleted successfully' });
}));

module.exports = router;
