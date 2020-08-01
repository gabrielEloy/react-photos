import { useState, useEffect } from 'react';
import { storage, firestore, timeStamp } from '../firebase/config';

const useStorage = file => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        // References
        const storageRef = storage.ref(file.name);
        const collectionRef = firestore.collection('images')

        storageRef.put(file)
            .on('state_changed', snap => {
                setProgress((snap.bytesTransferred / snap.totalBytes) * 100)
            }, err => {
                setError(err)
            },
                async () => {
                    const url = await storageRef.getDownloadURL();
                    collectionRef.add({ url , createdAt: timeStamp() })
                    setUrl(url)
                }
            )
    }, [file]);


    return { progress, url , error }
}

export default useStorage;