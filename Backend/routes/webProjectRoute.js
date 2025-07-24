const express = require('express');
const router = express.Router();
const WebProject = require('../models/WebProject');
const catchAsync = require('../core/catchAsync');
router.get('/webProjects', async(req, res) => {
    const webProjects=await WebProject.find({})        // Remeber product should be start wit capital P roduct
    res.json(webProjects);

});

//create project
router.post('/webProjects', catchAsync(async (req, res) => {
    console.log('Entry in create project');
    const { Title, image, description, projectLink,tags } = req.body;

    try {
        const webProject = new WebProject({ Title, image, description, projectLink,tags });
        await webProject.save();
        console.log(webProject);

        res.json({
            message: "Project created successfully",
            webProjectId: webProject._id
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
router.patch('/webProjects/:webProjectId', catchAsync(async (req, res) => {
    const { WebProjectId } = req.params;
    const { title, image, description, projectLink,tags } = req.body;
    await Product.findByIdAndUpdate(WebProjectId, { title, image, description, projectLink,tags });
    res.status(200).json({ message: 'project updated successfully' });
  }));
  
  // Delete a food
  router.delete('/webProjects/:webProjectId',catchAsync( async (req, res) => {
    const { webProjectId } = req.params;
    await WebProject.findByIdAndDelete(webProjectId);
    res.status(200).json({ message: 'project deleted successfully' });
  }));


module.exports = router;