import './App.css'
import { IonIcon } from '@ionic/react'
import { document, folder, search, arrowForward } from 'ionicons/icons'

function App() {
  return (

    <div className="main-container">
    <div className="menu-container">

      {/* SEARCH BAR */}
      <div className="search-container">
        <IonIcon icon={search} className="search-icon" />
        <input type="text" placeholder="Search..." className="search-input" />
        <IonIcon icon={arrowForward} className="search-arrow-icon" />
      </div>

      {/* <h5 className="recent">Recenly opened</h5> */}
      <div className="centered-container">
        <div className="icon-name-container">
          <IonIcon icon={folder} className="large-icon" />
          <p className="name">study</p>
        </div>

        <div className="icon-name-container">
          <IonIcon icon={document} className="large-icon" />
          <p className="name">recipes</p>
        </div>

        <div className="icon-name-container">
          <IonIcon icon={folder} className="large-icon" />
          <p className="name">poems</p>
        </div>

        <div className="icon-name-container">
          <IonIcon icon={document} className="large-icon" />
          <p className="name">random</p>
        </div>
      </div>
    </div>


    <div className="content-container">

      content here
    </div>
  </div>
  )
}

export default App
