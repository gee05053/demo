import React, { Component } from 'react'
import { View, Text, StyleSheet, Picker, Button } from 'react-native'
import axios from 'axios'
import DropzoneComponent from '../Component/DropzoneComponent'
import MainHeader from '../Component/MainHeader'
import UI from '../Component/UI'

export default class Homescreen extends Component {
    constructor (props) {
        super(props)
        this.state = {
            function : '',
            filename : '',
            files : []
        } 
        this.onPressSubmitButton = this.onPressSubmitButton.bind(this)
        this.changeFilename = this.changeFilename.bind(this)
        this.onDrop = this.onDrop.bind(this)
    }
    changeFilename (filename) {
        this.setState({ filename : filename })
    }
    onDrop (files) {
        this.setState({
            files: files.map(file => Object.assign(file, {
              preview: URL.createObjectURL(file)
            }))
        })
    }
    onPressSubmitButton() {
        const files = this.state.files
        const uploaders = files.map(file => {
          const formData = new FormData()
          formData.append('file', file);
    
          return axios.post('http://127.0.0.1:8000/file/', formData, {
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
          })
        })
    
        axios.all(uploaders).then(() => {
          // remove files once they've all been uploaded
          this.setState({ files: [], filename : '' })
        })
    }
    render() {
        return (
            <View>
                <MainHeader/>
                <View style={styles.container}>
                    <Text style={{marginTop: 10}}>Hello Demo Version</Text>
                    <DropzoneComponent changeFilename = {this.changeFilename} onDrop = {this.onDrop} filename = {this.state.filename} />
                    <Picker
                        selectedValue={this.state.function}
                        style={{height: 50, width: 200}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({function: itemValue})
                        }>
                            <Picker.Item label="Select function" value= "" />
                            <Picker.Item label="Super Resolution" value= "Super Resolution" />
                            <Picker.Item label="Style Transfer" value= "Style Transfer" />
                            <Picker.Item label="Frame Interpolation" value= "Frame Interpolation" />
                    </Picker>
                    {(this.state.function) && (this.state.filename) ?  <Button title= 'submit' style={{ width : 50, height: 100}} onPress={this.onPressSubmitButton}/> : <Text/>}
                </View>
                <Text>dasdsads</Text>
                <UI/>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop : 20
    }
})

/*
import React, { Component } from 'react'
import { View, Text, StyleSheet, Picker, Button } from 'react-native'
import Dropzone from 'react-dropzone'
import MainHeader from '../Component/MainHeader'


export default class Homescreen extends Component {
    constructor (props) {
        super(props)
        this.state = {
            function : '',
            file : ''
        } 
        this.pressSumbitButtom = this.pressSumbitButtom.bind(this) 
    }
    pressSumbitButtom() {
        var formData = new FormData()
        formData.append('file', this.state.file)
        return fetch('http://127.0.0.1:8000/file/', {
            method: 'POST',
            headers: {
                "Accept" : "application/json",
                'Content-Type': 'multipart/form-data',
            },
            body: formData
        }).then(res =>
            res.json()
        ).then(data => console.log(data))
    }
    render() {
        return (
            <View>
                <MainHeader/>
                <View style={styles.container}>
                    <Text style={{marginTop: 10}}>Hello Demo Version</Text>
                    <Dropzone>
                        {({getRootProps, getInputProps, acceptedFiles}) => (
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                {acceptedFiles.length > 0 ? '' : "Click me or drag a file to upload!"}
                                <ul>
                                    {acceptedFiles.length > 0 && acceptedFiles.map(acceptedFile => (
                                        this.state.file ? '' : this.setState({file : acceptedFile.name}),
                                        <li>
                                            {acceptedFile.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </Dropzone>
                    <Picker
                        selectedValue={this.state.function}
                        style={{height: 50, width: 200}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({function: itemValue})
                        }>
                            <Picker.Item label="Select function" value= "" />
                            <Picker.Item label="Super Resolution" value= "Super Resolution" />
                            <Picker.Item label="Style Transfer" value= "Style Transfer" />
                            <Picker.Item label="Frame Interpolation" value= "Frame Interpolation" />
                    </Picker>
                    {(this.state.function) && (this.state.file) ?  <Button title= 'submit' style={{ width : 50, height: 100}} onPress={this.pressSumbitButtom}/> : <Text/>}
                </View>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop : 20
    }
})
*/