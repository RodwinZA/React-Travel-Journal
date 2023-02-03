import './App.css'
import Destination from './components/Destination'
import Header from './components/Header'
import data from "./data"

function App() {
  console.log(data)

  const items = data.map(item => {
    return <Destination
      key={item.id}
      imageUrl={item.imageUrl}
      country={item.location}
      mapsUrl={item.googleMapsUrl}
      title={item.title}
      startDate={item.startDate}
      endDate={item.endDate}
      description={item.description}
    />
  })
  return (
    <div>
      <Header />
      {items}
    </div>
  )
}

export default App
