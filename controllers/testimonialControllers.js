const Testimonails = require("../models/Testimonials");

exports.getTestimonial = async (req, res) => {
  try {
    const testimonials = await Testimonails.find().sort({ createdAt: -1 });
    res.render("testimonials", { testimonials });
  } catch (error) {
    console.log(error);
    res.status(500).send("server error");
  }
};

exports.getAddTestimonial = (req, res) => {
  res.render("add-testimonial");
};

exports.postAddTestimonial = async (req, res) => {
  try {
    const { name, email, feedback } = req.body;
    const newTestimonial = new Testimonails({
      name,
      email,
      feedback,
    });

    await newTestimonial.save();
    res.redirect("/testimonials");
  } catch (error) {
    console.log(error);
    res.status(500).send("server error");
  }
};
