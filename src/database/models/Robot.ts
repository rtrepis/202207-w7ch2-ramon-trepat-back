import { Schema, model } from "mongoose";

const robotSchema = new Schema({
  id: Number,
  name: String,
  img: String,
  specs: {
    speed: Number,
    stamina: Number,
    createDate: String,
  },
});

const Robot = model("robot", robotSchema, "robots");

export default Robot;