import React, { Component } from 'react'
import { View, Text, StyleSheet, Picker, Button } from 'react-native'
import Dropzone from 'react-dropzone'
import MainHeader from '../Component/MainHeader'


export default class Homescreen extends Component {
    constructor (props) {
        super(props)
        this.state = {
            function : '',
            filename : ''
        } 
        this.pressSumbitButtom = this.pressSumbitButtom.bind(this) 
    }
    pressSumbitButtom() {
        const filename = {
            filename : this.state.filename
        }
        return fetch('http://127.0.0.1:8000/filename/', {
            mode : "cors",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(filename)
        }).then(res=> {
            if(res.status != 200) {
                console.log("error")
                console.log(res.statusText)
            }
            else {
                console.log("success")
            }
            return res.json();
        })
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
                                        this.state.filename ? '' : this.setState({filename : acceptedFile.name}),
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
                    {(this.state.function) && (this.state.filename) ?  <Button title= 'submit' style={{ width : 50, height: 100}} onPress={this.pressSumbitButtom}/> : <Text/>}
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