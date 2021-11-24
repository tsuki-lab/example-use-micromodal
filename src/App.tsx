import './App.css'
import { useMicromodal } from './hooks/use-micromodal'

function App() {
  const {Modal, open, close} = useMicromodal('sample-modal')

  return (
    <div className="App">
      <h1>Micromodal.js Use CustomHooks</h1>
      <a href="https://micromodal.vercel.app/" target="_blank">micromodal.js</a>
      <p><button onClick={open}>open</button></p>
      <Modal>
        <div className="">
          <p>Try hitting the tab key* and notice how the focus stays within the modal itself. To close modal hit the esc button, click on the overlay or just click the close button.</p>
          <p>* alt+tab in safari</p>
          <button onClick={close}>close</button>
        </div>
      </Modal>
    </div>
  )
}

export default App
