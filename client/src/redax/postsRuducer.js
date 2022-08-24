import {
  CREATE_POST,
  INC_DEC_COMENTS,
  INC_DEC_LIKES,
  INC_DEC_REPOST,
} from "./types";

const initualState = {
  users: {
    Obi_Wan_Kenobi: {
      userPhoto:
        "https://mobimg.b-cdn.net/v3/fetch/52/5272c08573aceaf71234e2b95c236f26.jpeg",
      userName: "Obi-Wan Kenobi",
      userNickName: "@Obi_Wan_Kenobi",
    },
    Anakin_Skywalker: {
      userPhoto:
        "https://media.gq-magazine.co.uk/photos/620529e268071f7ecff06fac/1:1/w_1080,h_1080,c_limit/100222_Bobba_hp.jpg",
      userName: "Anakin Skywalker",
      userNickName: "@dart_vader",
    },
  },
  posts: [
    {
      id: 101,
      name: "Anakin Skywalker",
      photo:
        "https://media.gq-magazine.co.uk/photos/620529e268071f7ecff06fac/1:1/w_1080,h_1080,c_limit/100222_Bobba_hp.jpg",
      nickname: "@dart_vader",
      content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
      image:
        "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",
      date: "26 Feb",
      comments: 482,
      reposts: 182,
      likes: 887,
    },
    {
      id: 102,
      name: "Obi-Wan Kenobi",
      photo:
        "https://mobimg.b-cdn.net/v3/fetch/52/5272c08573aceaf71234e2b95c236f26.jpeg",
      nickname: "Obi_Wan_Kenobi",
      content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
      image:
        "https://data2.origin.com/asset/content/dam/originx/web/app/games/star-wars/star-wars-battlefront-2/celebration-edition/SWBF2_Celebration_Edition_pdp_prefeature_FeatureName_en_ww_v1.jpg/6ee2bf6c-c2d6-4dd7-a211-e84b67b4062f/original.jpg",
      date: "26 Feb",
      comments: 481,
      reposts: 181,
      likes: 886,
    },
    {
      id: 103,
      name: "Saw Gerrera",
      photo:
        "https://mobimg.b-cdn.net/v3/fetch/a5/a5c76c61934efbd35c9b63b39fc678b5.jpeg?h=600&r=0.5",
      nickname: "@dart_vader",
      content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
      image:
        "https://data3.origin.com/asset/content/dam/originx/web/app/games/star-wars/star-wars-battlefront-2/last-jedi-content-update/star-wars-battlefront2_pdp_prefeature_1920x800_en_WW_Phasma.jpg/9cefe0ae-0611-48fc-a266-fdea4e879a84/original.jpg",
      date: "26 Feb",
      comments: 480,
      reposts: 180,
      likes: 885,
    },
  ],
};

export const postsReducer = (state = initualState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_POST:
      return {
        ...state,
        posts: [action.post, ...state.posts],
      };
    case INC_DEC_LIKES: {
      const findPostId = state.posts.findIndex(
        (post) => post.id === payload.id
      );
      payload.liked
        ? (state.posts[findPostId].likes -= 1)
        : (state.posts[findPostId].likes += 1);
      return state;
    }

    case INC_DEC_REPOST: {
      const findPostId = state.posts.findIndex(
        (post) => post.id === payload.id
      );
      payload.reposted
        ? (state.posts[findPostId].reposts -= 1)
        : (state.posts[findPostId].reposts += 1);
      return state;
    }
    case INC_DEC_COMENTS: {
      const findPostId = state.posts.findIndex(
        (post) => post.id === payload.id
      );
      payload.commnted
        ? (state.posts[findPostId].comments -= 1)
        : (state.posts[findPostId].comments += 1);
      return state;
    }
    case INC_DEC_LIKES:
    default:
      return state;
  }
};

export const postsSelector = (state) => state.postsReducer.posts;
export const usersSelector = (state) => state.postsReducer.users;
