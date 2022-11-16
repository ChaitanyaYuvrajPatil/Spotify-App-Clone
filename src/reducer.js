export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item : null,
    // token: "BQAaZMrPh9bFuw52nhEwhWe_7A_LVHm6Iy231P3YDbBFAJy3I2dInfcyPG5ZCSf8J80WtDGYAtd9QCBLLfOfyHP3si5n79DeJJGDOumubQ979l9s0duS_p24-y0tHUQFdWzL91wZihzYXtX4kOP9ugbLN92i0ZnF8fBcAKImnIbg8zIhrbD8C1qMU8O7_7flpI92NqbxJP1lwyaO",
}

const reducer = (state,action) => {
    console.log(action);

    switch(action.type){
        case 'SET_USER' :
            return {
                ...state,
                user: action.user,
            }

        case 'SET_TOKEN' :
            return {
                ...state,
                token: action.token,
            }

        case 'SET_PLAYLISTS' :
            return {
                ...state,
                playlists: action.playlists,
            }

        case 'SET_DISCOVER_WEEKLY' :
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }

        default :
            return state;
    }
}

export default reducer;