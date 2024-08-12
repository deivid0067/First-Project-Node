// import {createServer} from 'node:http';

// const server = createServer((request, response) => {
//     response.write('Hello World');

//     return response.end();
// })

// server.listen(3333);

// Porta na Web 3333

import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";
import { title } from "process";

const server = fastify();

const database = new DatabaseMemory();

server.post("/videos", (req, res) => {
  const { title, description, duration } = req.body;

  database.create({
    title,
    description,
    duration,
  });

  // database.create({
  //     title : title,
  //     description : description,
  //     duration : duration,
  // });

  return res.send;
});

server.get("/videos", (req, res) => {
  const videos = database.list();

  console.log(videos);

  return videos;
});

server.put("/videos/:id", (req, res) => {
  const videoId = req.params.id;
  const { title, description, duration } = req.body;

  database.update(videoId, {
    title,
    description,
    duration,
  });

  return res.status(204).send();
});

server.delete("/videos/:id", (req, res) => {
  const videoId = req.params.id;
    
  database.delete(videoId);

  return res.status(204).send();
});

server.listen({
  port: 3333, // Utiizando fastfy a porta é passada como Objeto.
});
