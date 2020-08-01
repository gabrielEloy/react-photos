import { useState, useEffect } from 'react';
import { firestore } from '../firebase/config';

const useFirestore = collection => {
    const [docs, setDocs] = useState([]);

    const unsub = useEffect(() => {
        firestore.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot(snap => {
                const documents = []

                snap.forEach(doc => documents.push({
                    ...doc.data(),
                    id: doc.id
                }))

                setDocs(documents)
            })

        return () => unsub();
    }, [collection])

    return { docs }
}

export default useFirestore;