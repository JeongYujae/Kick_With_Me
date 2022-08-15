import ReactWeather, { useOpenWeather } from 'react-open-weather';
const Weather = () => {
    // const [lat, setLat] = useState(null);
    // const [lng, setLng] = useState(null);
    // const [status, setStatus] = useState(null);
  
    // const getLocation = () => {
    //   if (!navigator.geolocation) {
    //     setStatus('Geolocation is not supported by your browser');
    //   } else {
    //     setStatus('Locating...');
    //     navigator.geolocation.getCurrentPosition((position) => {
    //       setStatus(null);
    //       setLat(position.coords.latitude);
    //       setLng(position.coords.longitude);
    //     }, () => {
    //       setStatus('Unable to retrieve your location');
    //     });
    //   }
    // }

    const { data, isLoading, errorMessage } = useOpenWeather({
        key: '7b5f855dea5801df1df9469b143c0742',
        lat: '43.23316706954475',
        lon: '143.0836792826125',
        lang: 'en',
        unit: 'metric', // values are (metric, standard, imperial)
      });

    return (
            <div className="WeatherBox">
                <ReactWeather
                isLoading={isLoading}
                errorMessage={errorMessage}
                data={data}
                lang="en"
                unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
                showForecast
                className="WeatherWidget"  
                />
            </div>
      );
    
}


export default Weather