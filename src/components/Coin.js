import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Main from './Main'

const Coin = () => {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState("")

  const getCoin = () => {

    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res =>
        // console.log(res),
        setCoins(res.data)
      )
  }

  useEffect(() => {
    getCoin()
  }, [])

  const handleChange = (e) => {
    setSearch(e.target.value)
    console.log(e.target.value);
  }

  const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className='coin-app'>
      <div className='coin-search'>
        <form action="">
          <input type="text" className='coin-input' placeholder='Provide the coin name' onChange={handleChange} />
        </form>
      </div>
      {
        filteredCoins.map(coin => {
          return (
            <Main
              key={coin.id}
              name={coin.name}
              symbol={coin.symbol}
              image={coin.image}
              marketcap={coin.market_cap}
              price={coin.current_price}
              pricechange={coin.price_change_percentage_24h}
            />
          )
        })
      }
    </div>
  )
}

export default Coin