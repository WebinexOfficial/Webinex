const express = require('express');
const router = express.Router();
const UiProject = require('../models/UiProject');
const catchAsync = require('../core/catchAsync');
router.get('/uiProject', async(req, res) => {
    const uiProjects=await uiProject.find({})        // Remeber product should be start wit capital P roduct
    res.json(uiProjects);

});

//create project
router.post('/uiProjects', catchAsync(async (req, res) => {
    console.log('Entry in create project');
    const { Title, image, description, projectLink,tags } = req.body;

    try {
        const uiProject = new UiProject({ Title, image, description, projectLink,tags });
        await uiProject.save();
        console.log(uiProject);

        res.json({
            message: "Project created successfully",
            uiProjectId: uiProject._id
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
router.patch('/uiProjects/:uiProjectId', catchAsync(async (req, res) => {
    const { UiProjectId } = req.params;
    const { title, image, description, projectLink,tags } = req.body;
    await Product.findByIdAndUpdate(UiProjectId, { title, image, description, projectLink,tags });
    res.status(200).json({ message: 'project updated successfully' });
  }));
  
  // Delete a food
  router.delete('/uiProjects/:uiProjectId',catchAsync( async (req, res) => {
    const { webProjectId } = req.params;
    await UiProject.findByIdAndDelete(webProjectId);
    res.status(200).json({ message: 'project deleted successfully' });
  }));


module.exports = router;