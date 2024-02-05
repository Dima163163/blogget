// const initialState = {
//   loading: false,
//   posts: [],
//   error: '',
//   after: '',
//   isLast: false,
//   page: '',
// };

// export const postsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case POSTS_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case POSTS_REQUEST_SUCCESS:
//       return {
//         ...state,
//         posts: action.posts,
//         loading: false,
//         error: '',
//         after: action.after,
//         isLast: !action.after,
//       };
//     case POSTS_REQUEST_ERROR:
//       return {
//         state,
//         loading: false,
//         error: action.error,
//       };
//     default:
//       return state;
//   }
// };
