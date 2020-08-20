const quotes = [
  { id: 1,
  title: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
author: 4  },
{id: 2,
title: "When you reach the end of your rope, tie a knot in it and hang on.",
author: 5},
{ id: 3,
title: "Always remember that you are absolutely unique. Just like everyone else.",
author: 6},
{id: 4,
title: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
author: 7 },
{id: 5,
title: "The future belongs to those who believe in the beauty of their dreams.",
author: 8},
{ id: 6,
title: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
author: 9 },
{ id: 7,
title: "The best and most beautiful things in the world cannot be seen or even touched.  They must be felt with the heart.",
author: 10},
{ id: 8,
title: "It is during our darkest moments that we must focus to see the light.",
author: 11},
{ id: 9,
title: "Whoever is happy will make others happy too.",
author: 12 },
{ id: 10,
 title: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
author: 13 },
{ id: 11,
title: "You will face many defeats in life, but never let yourself be defeated.",
author: 14},
{ id: 12,
title: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
author: 15},
{ id: 13,
title: "In the end, it's not the years in your life that count. It's the life in your years.",
author: 16},
{ id: 14,
title: "Never let the fear of striking out keep you from playing the game.",
author: 17 },
{ id: 15,
title: "Life is either a daring adventure or nothing at all.",
author: 10 },
{ id: 16,
  title: "Many of life's failures are people who did not realize how close they were to success when they gave up." ,
  author: 18
},
{ id: 17,
title: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
author: 19 }
]

const courses = [
  {
    id: 1,
    title: "Securing React Apps with Auth0",
    slug: "react-auth0-authentication-security",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 2,
    title: "React: The Big Picture",
    slug: "react-big-picture",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 3,
    title: "Creating Reusable React Components",
    slug: "react-creating-reusable-components",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 4,
    title: "Building a JavaScript Development Environment",
    slug: "javascript-development-environment",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 5,
    title: "Building Applications with React and Redux",
    slug: "react-redux-react-router-es6",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 6,
    title: "Building Applications in React and Flux",
    slug: "react-flux-building-applications",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 7,
    title: "Clean Code: Writing Code for Humans",
    slug: "writing-clean-code-humans",
    authorId: 1,
    category: "Software Practices"
  },
  {
    id: 8,
    title: "Architecting Applications for the Real World",
    slug: "architecting-applications-dotnet",
    authorId: 1,
    category: "Software Architecture"
  },
  {
    id: 9,
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    slug: "career-reboot-for-developer-mind",
    authorId: 1,
    category: "Career"
  },
  {
    id: 10,
    title: "Web Component Fundamentals",
    slug: "web-components-shadow-dom",
    authorId: 1,
    category: "HTML5"
  }
];

const authors = [
  { id: 1, name: "Cory House" },
  { id: 2, name: "Scott Allen" },
  { id: 3, name: "Dan Wahlin" },
  {id: 4, name: "Mother Theresa"},
  {id: 5, name: "Franklin D. Roosevelt"},
  {id: 6, name: "Margaret Mead"},
  {id: 7, name: "Robert Louis Stevenson"}
  {id: 8, name: "Eleanor Roosevelt"},
  {id: 9, name: "Benjamin Franklin"},
  {id: 10, name: "Helen Keller"},
  {id: 11, name: "Aristotle"},
  {id: 12, name: "Anne Frank"},
  {id: 13, name: "Ralph Waldo Emerson"},
  { id: 14, name: "Maya Angelou"},
  {id: 15, name: "Nelson Mandela"},
  {id: 16, name: "Abraham Lincoln"},
  { id: 17, name: "Babe Ruth"},
  {id: 18, name: "Thomas Edison"},
  { id: 19, name: "Dr. Seuss"}

];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: ""
};

const newQuote = {
  id: nill,
  title: "",
  authorId: null,
  category: "",
}

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  newQuote,
  quotes,
  courses,
  authors
};
