import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Weather from '../components/weather'


function MyApp({ Component, pageProps }) {
  const cities = [
    {
      city_name: 'Tokyo',
      color_name: 'blue'
    },
    {
      city_name: 'London',
      color_name: 'yellow'
    },
    {
      city_name: 'Paris',
      color_name: 'green'
    }, 
    {
      city_name: 'Los Angeles',
      color_name: 'red'
    },
  ];
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Component {...pageProps} />
    { 
        cities.map((city,index) => 
        <Weather 
          key={index} 
          city_name={city.city_name} 
          color_name={city.color_name} 
        />)
      }
  </div>
  )
}

export default MyApp
