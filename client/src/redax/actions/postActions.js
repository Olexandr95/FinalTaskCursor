
import {
    CREATE_POST,
    INC_DEC_COMENTS,
    INC_DEC_LIKES,
    INC_DEC_REPOST,
  } from "../types/postTypes";
  
  
  export function createPost(id, text, image, photo, name, nickname) {
    return {
      type: CREATE_POST,
      post: {
        id,
        photo,
        name,
        nickname,
        date: new Date().toJSON().slice(0, 10).replace(/-/g, "/").toString(),
        content: text,
        image: image,
        likes: 0,
        comments: 0,
        reposts: 0,
      },
    };
  }
  
  export function changeStateLikes(id, liked) {
    return {
      type: INC_DEC_LIKES,
      payload: {
        id,
        liked,
      },
    };
  }
  
  export function changeStateComments(id, commnted) {
    return {
      type: INC_DEC_COMENTS,
      payload: {
        id,
        commnted,
      },
    };
  }
  
  export function changeStateReposts(id, reposted) {
    return {
      type: INC_DEC_REPOST,
      payload: {
        id,
        reposted,
      },
    };
  }
  
  