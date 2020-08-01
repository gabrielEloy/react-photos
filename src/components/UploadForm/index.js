import React, { useState } from 'react';
import ProgressBar from '../ProgressBar';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    const onChangeHandler = e => {
        const selected = e.target.files[0]

        if (Boolean(selected) &&
            types.includes(selected.type)) {
            setFile(selected)
            setError(null)

            return;
        }

        setFile(null)
        setError('Please select an image file (png or jpeg)')
    }
    return (
        <form className="upload-button-wrapper">
            <input type="file" onChange={onChangeHandler} />
            <div className="output">
                <div>{error && <div className="error">{error}</div>}</div>
                <div>{file && <div>{file.name}</div>}</div>
                <div>{file && <ProgressBar file={file} setFile={setFile}/>}</div>
            </div>
        </form>
    )
}

export default UploadForm
