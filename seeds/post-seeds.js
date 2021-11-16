const { Post } = require('../models');

const postData = [{
        title: "I just turned in my 14th weekly challenge.",
        content: "Feels pretty good. I'm still not great with handlebars but hopefully this all works.",
        user_id: 1

    },
    {
        title: "I'm about to start my week 17 challenge.",
        content: "I've been overwhelmed but I'm still pushing through these challenges.",
        user_id: 2
    },
    {
        title: "Figuring out what to do for our third project",
        content: "There's so much to building a full-stack application, it will be interesting to see how it goes.",
        user_id: 3
    },
    {
        title: "Where should I apply after I finish my course?",
        content: "I don't know where to start. There's high demand for developers in this city, I just don't know what to look for yet.",
        user_id: 4
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;