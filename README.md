# modal-message-hrnet-hissa619

Un composant React simple et léger pour afficher une modale animée avec un bouton de fermeture. Idéal pour afficher des messages de confirmation ou d'erreur dans vos applications React.

## Fonctionnalités

- Animation fluide à l'ouverture et à la fermeture
- Accessibilité (`role="dialog"`, `aria-modal`)
- Intégration facile dans n’importe quelle application React
- Personnalisation possible via CSS

## Installation

```bash
npm install modal-message-hrnet-hissa619
```

## Utilisation

```jsx
import React, { useState } from 'react';
import { ModalMessage } from 'modal-message-hrnet-hissa619';
import 'modal-message-hrnet-hissa619/dist/index.css';

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

export default App;
```

## Props

| Nom        | Type        | Description                                      |
|------------|-------------|--------------------------------------------------|
| `onClose`  | `function`  | Fonction appelée lors de la fermeture            |
| `children` | `ReactNode` | Contenu de la modale (texte, balises, etc.)     |

## Dépendances

- React 18 ou plus
- Aucune dépendance externe supplémentaire

## Licence

MIT © [Aïssa Henni](https://github.com/HIssa619)
