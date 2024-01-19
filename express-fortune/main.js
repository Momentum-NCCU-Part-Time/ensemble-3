const express = require("express");

const app = express();
<<<<<<< HEAD
const config = { port: process.env.PORT || 3000 }
=======
const config = { port: process.env.PORT || 3000 };
>>>>>>> ba83756363379363460280608ce1bffa83bb7acb
app.get("/api/fortune", (req, res) => {
  const fortune = [
    "Embrace the learning journey. Coding experience is built step by step.",
    "Your dedication to learning to code will open doors to new opportunities.",
    "Just like debugging, challenges are temporary. Keep coding!",
    "In the world of tech, every line of code you write is a step toward success.",
    "Your career switch into tech is like a well-optimized algorithm: efficient and rewarding.",
    "Every error is an opportunity to learn something new. Don't give up!",
  ];

  const randomFortune = fortune[Math.floor(Math.random() * fortune.length)];

  res.json({ Fortune: randomFortune });
<<<<<<< HEAD
  app.listen(config.port, () => {

    console.log('App listening on http://localhost:${config.port}');
  } ) 
  })
=======
});
>>>>>>> ba83756363379363460280608ce1bffa83bb7acb
