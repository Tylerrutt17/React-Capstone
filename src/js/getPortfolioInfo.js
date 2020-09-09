// grab stocks allocation details from database
const getPortfolioInfo = () => {
    // return mock details for now
    let rv = [
          {id: 1, name: "My First Portfolio", funds: 54000, percent_allocated:100, active: true, user_id: 1},
          {id: 2, name: "My Test Portfolio", funds: 1000, percent_allocated: 0, active: false, user_id: 1},
         ]
    return rv
}

export { getPortfolioInfo}