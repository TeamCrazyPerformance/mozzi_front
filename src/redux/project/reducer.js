
const projectInitialState = {
  projects : null
};

const projectReducer = (state = projectInitialState, action)=>{
  switch (action.type) {
    case 'GET_PROJECT_LIST' : {
      return {
        ...state,
        
      }
    }
    
    case 'POST_PROJECT' : {
      return {
        ...state,
      }
    }
    
    case 'MODIFY_PROJECT' : {
      return {
        ...state,
      }
    }
    
    case 'DELETE_PROJECT' : {
      return {
        ...state,
      }
    }
    
    case 'GET_PROJECT_VIEW' : {
      return {}
    }
  }
};