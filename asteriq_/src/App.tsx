import './App.css'
import { IonIcon } from '@ionic/react'
import { documentOutline } from 'ionicons/icons'

function App() {
  
  const alexanderTheGreatQuotes = [
      "I am not afraid of an army of lions led by a sheep; I am afraid of an army of sheep led by a lion.",
      "There is nothing impossible to him who will try.",
      "A tomb now suffices him for whom the world was not enough.",
      "I would rather live a short life of glory than a long one of obscurity.",
      "In the end, when it's over, all that matters is what you've done.",
      "He who is not a good servant will not be a good master.",
      "I am indebted to my father for living, but to my teachers for living well.",
      "The greatest victory is that which requires no battle.",
      "To conquer the world is not enough; it is necessary to be able to conquer oneself.",
      "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.",
      "I would rather die of passion than of boredom.",
      "The weak fall, but the strong will remain and never go under!",
      "There is nothing more important than the freedom of the mind.",
      "A great man is one who can have power and not abuse it.",
      "What we do in life echoes in eternity.",
      "I am not a man, I am a legend."
  ];

  return (
    <div>
      <div className="Quotes">
        <h4>{alexanderTheGreatQuotes[Math.floor(Math.random() * alexanderTheGreatQuotes.length)]}</h4>
      </div>
      <IonIcon icon={documentOutline} />
    </div>
  )
}

export default App
