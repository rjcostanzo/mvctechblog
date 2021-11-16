const { Comment } = require('../models');

const commentData = [{
        comment_text: "You'll get a good grade, I know it.",
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: "You can do it. It's difficult, but rewarding.",
        user_id: 3,
        post_id: 2
    },
    {
        comment_text: "We don't even know what to do yet. Good luck.",
        user_id: 4,
        post_id: 3
    },
    {
        comment_text: "Depends what exactly you want to do, think about your strong languages and see what's out there.",
        user_id: 1,
        post_id: 4
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;