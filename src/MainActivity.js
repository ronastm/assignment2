import React, { Component } from 'react';

import { StyleSheet, View, Alert, TextInput, Text, Platform, TouchableOpacity } from 'react-native';

export default class MainActivity extends Component {
    static navigationOptions = {
        title: "Student Data"
    };

    constructor(props) {
        super(props);
        this.state = {
          TextInput_Student_Name: "",
          TextInput_Student_Class: ""
        };
      }
    
      InsertStudentRecordsToServer = () => {
        fetch("http://apps.airfastindonesia.com/rnim//student/InsertStudentData.php", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            student_name: this.state.TextInput_Student_Name,    
            student_class: this.state.TextInput_Student_Class,
    
     
          })
        })
          .then(response => response.json())
          .then(responseJson => {
            // Showing response message coming from server after inserting records.
            Alert.alert(responseJson);
          })
          .catch(error => {
            console.error(error);
          });
      };
    
      GoTo_Show_StudentList_Activity_Function = () => {
        this.props.navigation.navigate("ShowStudentListActivity");
      };
    
      render() {
        return (
          <View style={styles.MainContainer}>
            <Text style={{ fontSize: 20, textAlign: "center", marginBottom: 7 }}>
              {" "}
              Student Registration Form{" "}
            </Text>
    
            <TextInput
              placeholder="Enter Student Name"
              onChangeText={TextInputValue =>
                this.setState({ TextInput_Student_Name: TextInputValue })
              }
              underlineColorAndroid="transparent"
              style={styles.TextInputStyleClass}
            />
    
            <TextInput
              placeholder="Enter Student Class"
              onChangeText={TextInputValue =>
                this.setState({ TextInput_Student_Class: TextInputValue })
              }
              underlineColorAndroid="transparent"
              style={styles.TextInputStyleClass}
            />
    
    <TextInput
              placeholder="Enter Student Phone Number"
              onChangeText={TextInputValue =>
                this.setState({ TextInput_Student_Phone_Number: TextInputValue })
              }
              underlineColorAndroid="transparent"
              style={styles.TextInputStyleClass}
            />
    
            <TextInput
              placeholder="Enter Student Email"
              onChangeText={TextInputValue =>
                this.setState({ TextInput_Student_Email: TextInputValue })
              }
              underlineColorAndroid="transparent"
              style={styles.TextInputStyleClass}
            />

            <TouchableOpacity
              activeOpacity={0.4}
              style={styles.TouchableOpacityStyle}
              onPress={this.InsertStudentRecordsToServer}
            >
              <Text style={styles.TextStyle}>
                {" "}
                INSERT STUDENT RECORD TO SERVER{" "}
              </Text>
            </TouchableOpacity>
    
            <TouchableOpacity
              activeOpacity={0.4}
              style={styles.TouchableOpacityStyle}
              onPress={this.GoTo_Show_StudentList_Activity_Function}
            >
              <Text style={styles.TextStyle}>
                {" "}
                SHOW ALL INSERTED STUDENT RECORDS IN LISTVIEW{" "}
              </Text>
            </TouchableOpacity>
          </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
      MainContainer: {
        alignItems: "center",
        flex: 1,
        paddingTop: 30,
        backgroundColor: "#fff"
      },
    
      MainContainer_For_Show_StudentList_Activity: {
        flex: 1,
        paddingTop: Platform.OS == "ios" ? 20 : 0,
        marginLeft: 5,
        marginRight: 5
      },
    
      TextInputStyleClass: {
        textAlign: "center",
        width: "90%",
        marginBottom: 7,
        height: 40,
        borderWidth: 1,
        borderColor: "#30cb63",
        borderRadius: 5
      },
    
      TouchableOpacityStyle: {
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
        marginBottom: 7,
        width: "90%",
        backgroundColor: "#30cb63"
      },
    
      TextStyle: {
        color: "#fff",
        textAlign: "center"
      },
    
      rowViewContainer: {
        fontSize: 20,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10
      }
    });
    