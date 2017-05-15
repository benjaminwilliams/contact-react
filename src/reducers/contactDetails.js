

function contactDetails(state = {}, action){
  switch (action.type){
    case 'SET_CONTACT_DETAILS':
      state = action.contactDetails;
      return state;
    default:
      return state;
  }
}

export default contactDetails;