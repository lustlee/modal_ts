import React, {useState} from 'react';
import Modal from "./componetns/Modal/Modal";
import ACE from './assets/ace.jpg'
const App = () => {
    const [open, setOpen] = useState(false);

    return (
      <div className="App">
        <button
            onClick={() => setOpen(true)}
            className="open-modal-btn">⚛️ Open modal</button>
          <Modal open={open} setOpen={setOpen}>
              <img src={ACE} alt={ACE}/>
              <h3>One Piece!</h3>
              <p>This is my Modal</p>
          </Modal>
      </div>
  );
};

export default App;