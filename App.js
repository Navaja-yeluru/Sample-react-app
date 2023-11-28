import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from "react-native";
import DatePicker from "react-native-datepicker";
import { RadioButton } from "react-native-paper";
import RNPickerSelect from "react-native-picker-select";
export default function PAN({ route, Context }) {
  const [name, setName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [selectedIncome, setSelectedIncome] = useState(null);
  const [qualification, setQualification] = useState(null);
  const [fatherName, setFatherName] = useState(null);
  const [motherName, setMotherName] = useState(null);
  const [checked, setChecked] = useState("first");
  const [spousesName, setSpousesName] = useState("");
  const [branch, setBranch] = useState("");
  const [nominee, setNominee] = useState("");
  const [nomineeDOB, setNomineeDOB] = useState(new Date());
  const handleNameChange = (text) => {
    const regex = /^[A-Za-z]+$/;
    if (regex.test(text) || text === "") {
      setName(text);
    }
  };
  const handleNomineeNameChange = (text) => {
    const regex = /^[A-Za-z]+$/;
    if (regex.test(text) || text === "") {
      setNominee(text);
    }
  };
  const handleBranchDetailsChange = (text) => {
    setBranch(text);
  };
  const handleFatherNameChange = (text) => {
    const regex = /^[A-Za-z]+$/;
    if (regex.test(text) || text === "") {
      setFatherName(text);
    }
  };
  const handleMotherNameChange = (text) => {
    const regex = /^[A-Za-z]+$/;
    if (regex.test(text) || text === "") {
      setMotherName(text);
    }
  };
  const occupationOptions = [
    { label: "Business", value: "Business" },
    { label: "Self Employee", value: "Self Employee" },
    { label: "Employee", value: "Employee" },
  ];
  const incomeOptions = [
    { label: "0-5 LPA", value: "0-5 LPA" },
    { label: "5-10 LPA", value: "5-10 LPA" },
    { label: "Above 10 LPA", value: "Above 10 LPA" },
  ];
  const qualificationOptions = [
    { label: "Masters", value: "Masters" },
    { label: "Degree", value: "Degree" },
    { label: "B-tech", value: "B-tech" },
  ];
  return (
    <ScrollView contentContainerStyle={styles.container} style={{height:"100%",width:"100%"}}>
      <Text> Let's start by providing your personal details</Text>
      <View style={styles.field}>
        <Text>Enter Text:</Text>
        <TextInput
          style={{
            width: "80%",
            height: 40,
            borderColor: "gray",
          }}
          placeholder="Type here..."
          onChangeText={handleNameChange}
          value={name}
        />
      </View>
      <View style={styles.field}>
        <Text>Occupation:</Text>
        <RNPickerSelect
          value={occupation}
          placeholder={{ label: "Select an option", value: null }}
          items={occupationOptions}
          onValueChange={(value) => setOccupation(value)}
          style={{
            inputAndroid: {
              backgroundColor: "#fafafa",
              height: 40,
              width: 200,
              paddingHorizontal: 8,
            },
          }}
        />
      </View>
      <View style={styles.field}>
        <Text>Income range:</Text>
        <RNPickerSelect
          placeholder={{ label: "Select an option", value: null }}
          items={incomeOptions}
          onValueChange={(value) => setSelectedIncome(value)}
          value={selectedIncome}
          style={{
            inputAndroid: {
              backgroundColor: "#fafafa",
              color:"black",
              height: 40,
              width: 200,
              paddingHorizontal: 8,
            },
          }}
        />
      </View>
      <View style={styles.field}>
        <Text>Qualification:</Text>
        <RNPickerSelect
          placeholder={{ label: "Select an option", value: null }}
          items={qualificationOptions}
          onValueChange={(value) => setQualification(value)}
          value={qualification}
          style={{
            inputAndroid: {
              backgroundColor: "#fafafa",
              height: 40,
              width: 200,
              paddingHorizontal: 8,
            },
          }}
        />
      </View>
      <View style={styles.field}>
        <Text>Father's Name:</Text>
        <TextInput
          style={{
            width: "80%",
            height: 40,
            borderColor: "gray",
          }}
          placeholder="Type here..."
          onChangeText={handleFatherNameChange}
          value={fatherName}
        />
      </View>
      <View style={styles.field}>
        <Text>Mother's Name:</Text>
        <TextInput
          style={{
            width: "80%",
            height: 40,
            borderColor: "gray",
          }}
          placeholder="Type here..."
          onChangeText={handleMotherNameChange}
          value={motherName}
        />
      </View>
      <Text>what do you want to print on your card?</Text>
      <View style={styles.field}>
        <Text>Select an option:</Text>
        <View>
          <RadioButton.Group
            onValueChange={(value) => setChecked(value)}
            value={checked}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <RadioButton value="first" />
              <Text>father's Name</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <RadioButton value="second" />
              <Text>Mother's name</Text>
            </View>
            {/* Add more RadioButton components as needed */}
          </RadioButton.Group>
        </View>
        <Text>
          Selected name: {checked == "first" ? fatherName : motherName}
        </Text>
      </View>
      <View style={styles.field}>
        <Text>Marital status:</Text>
        <RNPickerSelect
          placeholder={{ label: "Married", value: "Married" }}
          items={[
            { label: "Married", value: "Married" },
            { label: "single", value: "single" },
          ]}
          onValueChange={(value) => setQualification(value)}
          value={qualification}
          style={{
            inputAndroid: {
              backgroundColor: "#fafafa",
              height: 40,
              width: 200,
              paddingHorizontal: 8,
            },
          }}
        />
      </View>
      <View style={styles.field}>
        <Text>Spouses name:</Text>
        <RNPickerSelect
          placeholder={{ label: "name 1", value: "name 1" }}
          items={[
            { label: "name 2", value: "name 2" },
            { label: "name 3", value: "name 3" },
          ]}
          onValueChange={(value) => setSpousesName(value)}
          value={spousesName}
          style={{
            inputAndroid: {
              backgroundColor: "#fafafa",
              height: 40,
              width: 200,
              paddingHorizontal: 8,
            },
          }}
        />
      </View>
      <Text> Preferred Brach Details</Text>
      <View style={styles.field}>
        <Text>Branch:</Text>
        <TextInput
          style={{
            width: "80%",
            height: 40,
            borderColor: "gray",
          }}
          multiline={true}
          numberOfLines={7}
          placeholder="Type here..."
          onChangeText={handleBranchDetailsChange}
          value={branch}
        />
      </View>
      <Text> your nominee details</Text>
      <View>
        <Text>tier i account nominee details:</Text>
        <View style={styles.field}>
          <Text>nominee name:</Text>
          <TextInput
            style={{
              width: "80%",
              borderColor: "gray",
            }}
            placeholder="Type here..."
            onChangeText={handleNomineeNameChange}
            value={nominee}
          />
        </View>
      <View>
        <Text>tier i account nominee details:</Text>
        <View style={styles.field}>
          <Text>nominee DOB:</Text>
          <DatePicker
        style={styles.field}
        date={nomineeDOB}
        mode="date"
        placeholder="Select date"
        format="YYYY-MM-DD"
        minDate="2022-01-01"
        maxDate="2030-12-31"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0,
          },
          dateInput: {
            marginLeft: 36,
          },
          // ...other styles
        }}
        onDateChange={(date) => setNomineeDOB(date)}
      />
        </View>
      </View>
      </View>
      
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
  flexGrow:1,
    justifyContent:"center",
    alignItems:"center"
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    paddingRight: 8,
  },
  field: {
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
  },
});







