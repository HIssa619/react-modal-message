# modal-message

Un composant React simple pour afficher une modale animée avec un bouton de fermeture.

## Installation

```bash
npm install @hissa619/modal-message
```

## Utilisation

```jsx
import React, { useState } from 'react';
import { ModalMessage } from '@hissa619/modal-message';
import '@hissa619/modal-message/dist/index.css';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Afficher la modale</button>

      {showModal && (
        <ModalMessage onClose={() => setShowModal(false)}>
          <p>Action effectuée avec succès !</p>
        </ModalMessage>
      )}
    </div>
  );
}
```

## Props

| Nom       | Type        | Description                                           |
|-----------|-------------|-------------------------------------------------------|
| `onClose` | `function`  | Fonction appelée lors de la fermeture de la modale.  |
| `children`| `ReactNode` | Contenu personnalisé à afficher dans la modale.      |

## Licence

MIT © [Aïssa Henni](https://github.com/HIssa619)
