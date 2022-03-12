import React from 'react'
class Example extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        houseCoordinates:{
            1:{x:260,y:120},
            2:{x:120,y:40},
            3:{x:50,y:100},
            4:{x:150,y:200},
            5:{x:40,y:300},
            6:{x:100,y:370},
            7:{x:280,y:300},
            8:{x:420,y:370},
            9:{x:550,y:300},
            10:{x:420,y:200},
            11:{x:520,y:110},
            12:{x:420,y:40}
          }
      };
    }
  updateMe=()=>{
this.setState(prevState => ({
  food: {
    ...prevState.food,           // copy all other key-value pairs of food object
    pizza: {                     // specific object of food object
      ...prevState.food.pizza,   // copy all pizza key-value pairs
      extraCheese: true          // update value of specific key
    }
  }
}))
  }
    render() {
      return (
        <div>
          <p>You clicked {this.state.count} times</p>
          <button onClick={() =>this.updateMe}>
            Click me
          </button>
        </div>
      );
    }
  }


      if(houseList.length!==null){
    houseList.map(((h,hi)=>{
      planetDict[h].map((planet,index)=>{   
      updateHouseCoordinates(prevState=>({
        ...prevState,
        cordinate:{
          ...prevState.cordinate,
          [h]:
          [
          ...prevState.cordinate[h],
          {
            x:houseCoordinates.cordinate[h].x+5,
            y:houseCoordinates.cordinate[h].y+5
          }
        ]
        }
      }))
    })
  }))
}




//reducer example

let MyComponent = () => {
  let [state, dispatch] = useReducer(reducer, { a: 1, b: 2 });

  useEffect(() => {
    console.log("Some effect with B");
  }, [state.b]);

  return (
    <div>
      <p>A: {state.a}, B: {state.b}</p>
      <button onClick={() => dispatch({ type: "SET_A", payload: 5 })}>
        Set A to 5 and Check B
      </button>
      <button onClick={() => dispatch({ type: "INCREMENT_B" })}>
        Increment B
      </button>
    </div>
  );
};

// B depends on A. If B >= A, then reset B to 1.
function reducer(state, { type, payload }) {
  const someCondition = state.b >= state.a;

  if (type === "SET_A")
    return someCondition ? { a: payload, b: 1 } : { ...state, a: payload };
  else if (type === "INCREMENT_B") return { ...state, b: state.b + 1 };
  return state;
}


// let houseCoordinates=  {
//     1:{x:260,y:120},
//     2:{x:120,y:40},
//     3:{x:50,y:100},
//     4:{x:150,y:200},
//     5:{x:40,y:300},
//     6:{x:100,y:370},
//     7:{x:280,y:300},
//     8:{x:420,y:370},
//     9:{x:550,y:300},
//     10:{x:420,y:200},
//     11:{x:520,y:110},
//     12:{x:420,y:40}
//   }





ReactDOM.render(<MyComponent />, document.getElementById("root"));