const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class CourseController {
    // [GET] /course/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                if (!res.headersSent) {
                    res.json(course);
                }
            })
            .catch(next);
    }
}

module.exports = new CourseController();
