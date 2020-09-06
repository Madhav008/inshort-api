

async function main(url) {
    const puppeteer = require("puppeteer");
  
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox"],
    });
    const page = await browser.newPage();
    await page.goto(url);
  
    rec = await getNews(page);
  
    
    await browser.close();
  
    return rec;
  }
  
  async function getNews(page) {
    await page.click("#load-more-btn");
    await page.waitFor(1000);
    await page.click("#load-more-btn");
    await page.waitFor(1000);
    // await page.click("#load-more-btn");
    // await page.waitFor(1000);
    const recipes = await page.evaluate(() =>
      Array.from(document.querySelectorAll("div.news-card.z-depth-1")).map(
        (compact) => ({
          img: compact
            .querySelector("div.news-card-image")
            .style.backgroundImage.slice(5, 111),
          headline: compact.querySelector("a.clickable span").innerText,
          detail: compact
            .querySelector("div.news-card-content.news-right-box")
            .innerText.replace(/(\r\n|\n|\r)/gm, ""),
        })
      )
    );
    return recipes;
  }


  module.exports= {main}