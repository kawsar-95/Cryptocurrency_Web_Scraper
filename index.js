const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

async function getPriceFeed() {
  try {
    const siteUrl = 'https://coinmarketcap.com/'

    const { data } = await axios({
      method: 'GET',
      url: siteUrl
    })

    const $ = cheerio.load(data)
    const elementSelector = "#__next > div > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div > div.h7vnx2-1.bFzXgL > table > tbody > tr"

    $(elementSelector).each((parentIndex, parentElement) => {
      console.log(parentElement)

    })

  } catch (err) {
    console.log(err)
  }

}
getPriceFeed()