// import { createSlice } from "@reduxjs/toolkit";
// import Cookies from "js-cookie";

// const initialState = {
//   cartItems: [],
//   totalAmount: 0,
//   quantity: 0,
//   url: "https://ecommerceapp.arfilifestyle.com",
//   // url:'http://192.168.1.40:8800'
// };

// const STORAGE_KEY = "cartItems";

// const storedItems = Cookies.get(STORAGE_KEY);

// if (storedItems) {
//   initialState.cartItems = JSON.parse(storedItems);
//   initialState.totalAmount = calculateAmount(initialState.cartItems);
//   initialState.quantity = calculateQuantity(initialState.cartItems);
// }

// function calculateAmount(cartItems) {
//   return cartItems.reduce(
//     (total, item) => total + item.selling_price * item.quantity,
//     0
//   );
//   //cart.selling_price * cart.quantity
// }
// function calculateQuantity(cartItems) {
//   return cartItems.reduce((total, item) => total + item.quantity, 0);
// }

// export const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, { payload }) => {
//       console.log(payload);

//       const isExisted = state.cartItems.find((item) => item.id === payload.id);
//       if (isExisted) {
//         return state;
//       } else {
//         state.cartItems = [...state.cartItems, { ...payload }];
//       }
//       const total_price = state.cartItems?.map(
//         (item) => item.quantity * item.price
//       );
//       const total_quantity = state.cartItems?.map((item) => item.quantity * 1);
//       state.quantity += calculateQuantity(total_quantity);
//       state.totalAmount += calculateAmount(total_price);
//       Cookies.set(STORAGE_KEY, JSON.stringify(state.cartItems));
//     },
//     removeFromCart: (state, { payload }) => {
//       state.cartItems = state.cartItems.filter((item) => item.id != payload.id);
//       const total_price = state.cartItems?.map(
//         (item) => item.quantity * item.price
//       );
//       const total_quantity = state.cartItems?.map((item) => item.quantity * 1);
//       state.quantity -= calculateQuantity(total_quantity);
//       state.totalAmount -= calculateAmount(total_price);
//       Cookies.set(STORAGE_KEY, JSON.stringify(state.cartItems));
//     },
//     addItemsQuantity: (state, { payload }) => {
//       state.cartItems = state.cartItems.map((item) => {
//         if (item.id === payload.id) {
//           return { ...item, quantity: item.quantity + 1 };
//         } else {
//           return item;
//         }
//       });
//       state.quantity += calculateQuantity(state.cartItems);
//       state.totalAmount += calculateAmount(state.cartItems);
//       Cookies.set(STORAGE_KEY, JSON.stringify(state.cartItems));
//     },
//     subtractItemsQuantity: (state, { payload }) => {
//       const subItem = state.cartItems.find((item) => item.id === payload.id);
//       if (subItem.quantity === 1) {
//         state.cartItems = state.cartItems.filter(
//           (item) => item.id !== subItem.id
//         );
//       } else {
//         subItem.quantity -= 1;
//       }
//       state.quantity -= calculateQuantity(state.cartItems);
//       state.totalAmount -= calculateAmount(state.cartItems);
//       Cookies.set(STORAGE_KEY, JSON.stringify(state.cartItems));
//     },
//   },
// });

// export const {
//   addToCart,
//   removeFromCart,
//   addItemsQuantity,
//   subtractItemsQuantity,
// } = cartSlice.actions;
// export default cartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  quantity: 0,
  url: "https://ecommerceapp.arfilifestyle.com",
  // url: "http://192.168.1.40:8800"
};

const STORAGE_KEY = "cartItems";

const storedItems = Cookies.get(STORAGE_KEY);

if (storedItems) {
  initialState.cartItems = JSON.parse(storedItems);
  initialState.totalAmount = calculateAmount(initialState.cartItems);
  initialState.quantity = calculateQuantity(initialState.cartItems);
}

function calculateAmount(cartItems) {
  return cartItems.reduce(
    (total, item) => total + (item.selling_price - item.discount) * item.quantity,
    0
  );
  //cart.selling_price * cart.quantity
}

function calculateQuantity(cartItems) {
  return cartItems.reduce((total, item) => total + item.quantity, 0);
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // addToCart: (state, { payload }) => {
    //   console.log(payload);
    //   // const isExisted = state.cartItems.find(item=>item.id=== payload.id)
    //   // if(isExisted){
    //   //     return state;
    //   // }else{
    //   state.cartItems = [...state.cartItems, { ...payload }];
    //   // }
    //   const total_price = state.cartItems?.map(
    //     (item) => item.quantity * item.price
    //   );
    //   const total_quantity = state.cartItems?.map((item) => item.quantity * 1);
    //   state.quantity += calculateQuantity(total_quantity);
    //   state.totalAmount += calculateAmount(total_price);
    //   Cookies.set(STORAGE_KEY, JSON.stringify(state.cartItems));
    addToCart: (state, { payload }) => {
      const existingItem = state.cartItems.find(item => item.id === payload.id);
      if (existingItem) {
        // If item already exists in the cart, update its quantity
        existingItem.quantity += 1;
      } else {
        // If item is not in the cart, add it
        state.cartItems.push({ ...payload, quantity: 1 });
      }
      
      // Recalculate total quantity and total amount
      state.quantity = calculateQuantity(state.cartItems);
      state.totalAmount = calculateAmount(state.cartItems);
      
      // Update cookies
      Cookies.set(STORAGE_KEY, JSON.stringify(state.cartItems));
    },
    
  
    removeFromCart: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((item) => item.id != payload.id);
      const total_price = state.cartItems?.map(
        (item) => item.quantity * item.price
      );
      const total_quantity = state.cartItems?.map((item) => item.quantity * 1);
      state.quantity -= calculateQuantity(total_quantity);
      state.totalAmount -= calculateAmount(total_price);
      Cookies.set(STORAGE_KEY, JSON.stringify(state.cartItems));
    },

    addItemsQuantity: (state, { payload }) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === payload.id) {
          return {
            ...item,
            quantity: (item.quantity || 0) + 1,
          };
        }
        return item; // return the unchanged item if the id doesn't match
      });

      state.quantity = calculateQuantity(state.cartItems);
      state.totalAmount = calculateAmount(state.cartItems);

      Cookies.set(STORAGE_KEY, JSON.stringify(state.cartItems));
    },
    subtractItemsQuantity: (state, { payload }) => {
      const subItem = state.cartItems.find((item) => item.id === payload.id);
      if (subItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== subItem.id
        );
      } else {
        subItem.quantity -= 1;
      }
      state.quantity -= calculateQuantity(state.cartItems);
      state.totalAmount -= calculateAmount(state.cartItems);
      Cookies.set(STORAGE_KEY, JSON.stringify(state.cartItems));
    },
    clearCartItems: (state) => {
      state.cartItems = [];
      state.totalAmount = 0;
      state.quantity = 0;
      Cookies.remove(STORAGE_KEY); // Clear the cart items from cookies
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  addItemsQuantity,
  subtractItemsQuantity,
  clearCartItems,
} = cartSlice.actions;
export default cartSlice.reducer;
