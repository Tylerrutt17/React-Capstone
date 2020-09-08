// grab stocks allocation details from database
const getStockInfo = () => {
    // return mock details for now
    let rv = [
          {id: 1, name: "AAPL", avg_price: 200.48, volume: 300, allocation: 45, user_id: 1},
          {id: 2, name: "TSLA", avg_price: 969.69, volume: 42, allocation: 12, user_id: 1},
          {id: 3, name: "PRPL", avg_price: 365.48, volume: 123, allocation: 5, user_id: 1},
          {id: 4, name: "ROPE", avg_price: 24, volume: 48, allocation: 20, user_id: 1},
          {id: 5, name: "RKT", avg_price: 36, volume: 9, allocation: 18, user_id: 1},
         ]
    return rv
}

export { getStockInfo}