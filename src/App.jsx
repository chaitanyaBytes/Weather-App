import { RecoilRoot } from "recoil"
import Weather from "./components/Weather"


function App() {
  const backgroundImageStyle = {
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.9)), url("https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?cs=srgb&dl=pexels-%C3%A1kos-szab%C3%B3-440731.jpg&fm=jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };


  return (

    <RecoilRoot>
      <div style={backgroundImageStyle}>
        <Weather />
      </div>
    </RecoilRoot>
  );
}

export default App