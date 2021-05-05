const ITEMS_LOADED = 'CalendarState/ITEMS_LOADED';

function itemsLoaded(items) {
  return {
    type: ITEMS_LOADED,
    items,
  };
}

function createItem(item) {
  // call api create item firebase

  // return {
  //   type: ITEMS_LOADED,
  //   items,
  // };
}


const names = ['Max', 'Philip', 'Alex', 'Irina', 'Vovan'];
const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const labels = ['Urgent', 'Interview'];

export function loadItems(day) {
  // console.log(day);
  // Do items loading here
  // call api get items firebase
  return (dispatch, getState) => {
    

    const newItems = {};
    Object.keys(items).forEach(key => {
      newItems[key] = items[key];
    });

    dispatch(itemsLoaded(newItems));
  };
}

const defaultState = {
  items: [],
  isLoading: false,
};

export default function CalendarStateReducer(state = defaultState, action) {
  switch (action.type) {
    case ITEMS_LOADED:
      return Object.assign({}, state, {
        isLoading: true,
        items: action.items,
      });
    default:
      return state;
  }
}
