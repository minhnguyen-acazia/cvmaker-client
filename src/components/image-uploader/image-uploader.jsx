import React, {useMemo} from 'react'
import {useDropzone} from 'react-dropzone'
import './image-uploader.scss'

const baseStyle = {
  flex: 1,
  flexBasis: 300,
  flexGrow: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
}

const activeStyle = {
  borderColor: '#2196f3'
}

const acceptStyle = {
  borderColor: '#00e676'
}

const rejectStyle = {
  borderColor: '#ff1744'
}

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginRight: 20
}

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
}

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
}

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
}


export function ImageUploader(props) {
  const { handleImageUpload, previewImage } = props
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    accept: 'image/*',
    multiple: false,
    onDrop: acceptedFiles => {
      handleImageUpload(acceptedFiles[0])
    }
  })

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject
  ])

  const thumbs = previewImage
    ? (
      <div style={thumb}>
        <div style={thumbInner}>
          <img
            src={previewImage}
            style={img}
            alt='Preview'
          />
        </div>
      </div>
    )
    : <div style={thumb} />

  return (
    <section className='image-uploader'>
      <aside style={thumbsContainer}>
        {thumbs}
      </aside>
      <div {...getRootProps({className: 'dropzone', style})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
        <em>(Only *.jpeg, *.jpg, *.gif and *.png images will be accepted)</em>
      </div>
    </section>
  )
}