import React, { Component } from "react"
import Dropzone from 'react-dropzone'

export default class DromzoneComponent extends Component {
  render () {
    return (
      <Dropzone
        onDrop={this.props.onDrop}
      >
        {({getRootProps, getInputProps, acceptedFiles}) => (
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                {acceptedFiles.length > 0 ? '' : "Click me or drag a file to upload!"}
                <ul>
                    {acceptedFiles.length > 0 && acceptedFiles.map(acceptedFile => (
                        this.props.filename ? '' : this.props.changeFilename(acceptedFile.name),
                        <li>
                            {acceptedFile.name}
                        </li>
                    ))}
                </ul>
            </div>
        )}
    </Dropzone>
    )
  }
}