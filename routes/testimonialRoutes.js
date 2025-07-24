const express = require("express");
const router = express.Router();
const testimonialController = require("../controllers/testimonialControllers");

router.get("/", testimonialController.getAddTestimonial);
router.get("/testimonials", testimonialController.getTestimonial);
router.post("/add-testimonial", testimonialController.postAddTestimonial);

module.exports = router;
