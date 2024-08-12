import { randomUUID } from "crypto";
import { title } from "process";

export class DatabaseMemory {
    #videos = new Map();

    list() {
      return Array.from(this.#videos.entries()).map((videoArrays) => {
        const id = videoArrays[0];
        const data = videoArrays[1];

        return {
            id,
            ...data
        }
      });
    }

    create(video) {
        const videoId = randomUUID(); // Universal Unique ID

        this.#videos.set(videoId, video);
    }

    update(id, video) {
        this.#videos.set(id,  video);
        
    }

    delete(id) {
        this.#videos.delete(id);
    }
}