import Project from './Project'
import CryptoWatcher from "../Files/CryptoWatcher.jpg"
import ShoppingCart from "../Files/ShoppingCart.jpg"
import WeatherApp from "../Files/WeatherApp.jpg"
import CvCreator from "../Files/CvCreator.jpg"


const background1 = {backgroundImage:`url(${CryptoWatcher})`}
const background2 = {backgroundImage:`url(${ShoppingCart})`, backgroundPosition: "center"}
const background3 = {backgroundImage:`url(${CvCreator})`}
const background4 = {backgroundImage:`url(${WeatherApp})`}


export default function Projects(){
    return(<div className="projects" id="projects">
        <div className="projects__title"><span class="underline--magical">Projects</span></div>
        <Project technologies={["HTML", "Sass", "JS", "React", "API", "Context API"]} title="CryptoWatcher" description={`A CoinGecko clone site built using React and the CoinGecko API. The site displays the first 250 cryptocurrencies by market capitalization. 
            You can sort these by the price change in the last 24h and add them to a watchlist. Also you can search any cryptocurrency by its name in the search bar.

            A useful feature of this site is that it also displays the all time high on the main page so you can choose the cryptos with the biggest potential return.`}
            image={background1} 
            siteCode = "https://github.com/Rakooa37/CryptoWatcher" siteLink="https://rakooa37.github.io/CryptoWatcher/">

        </Project>

        <Project technologies={["HTML", "CSS", "JS", "React"]} title="Shopping Cart" description={`A shopping card application for movie posters, that let's you add and remove products from the cart and dynamically calculates the total price.`}
            image={background2} 
            siteCode = "https://github.com/Rakooa37/Shopping-Cart" siteLink="https://rakooa37.github.io/Shopping-Cart/">

        </Project>

        <Project technologies={["HTML", "CSS", "JS", "React"]} title="CV Cretor" description={`A CV creator application that let's you add your personal information, personal experience, education and an image. You can also download the CV in PDF format.`}
            image={background3} 
            siteCode = "https://github.com/Rakooa37/Shopping-Cart" siteLink="https://rakooa37.github.io/Shopping-Cart/">

        </Project>

        <Project technologies={["HTML", "CSS", "JS", "API"]} title="Weather App" description={`A simple weather app that displays data like the temperature, real feel, humidity and windspeed in any location around the world, using the OpenWeather API.`}
            image={background4} 
            siteCode = "https://github.com/Rakooa37/WeatherApp" siteLink="https://rakooa37.github.io/WeatherApp/">

        </Project>



    </div>)
}