const CounterReducer = (state = 0, action) => {
    switch(action.type) {
        case "ADD":
            return state + 1;
        case "MINUS":
            return state - 1;
        case "ADD-TEN":
            return state + 10;
        case "MINUS-TEN":
            return state - 10;
        case "RESET":
            return 0;
        default:
            return state;
    }

  };
  export default CounterReducer;