import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

<TextInPut
style={styles.inputBox}
onChangeText={text => {
  this.setState({
    text: text,
    isSearchPressed: false,
    word : "Loading...",
    lexicalCategory : '',
    examples : [],
    defiination : ""
  });
}}
value={this.state.text}
/>
<TouchableOpacity
style={styles.searchButton}
onPress={ () => {
  this.setState({ isSearchPressed: true });
  this.getWord(this.state.text)
}}>

getWord=(word)=>{
  var searchKeyWord=word.toLowerCase()
  var url = "https://rupinwhitehatjr.github.io/dictionary/"+searchKeyword+".json"
  return fetch(url)
  .then((data)=>{
    if(data.status===200)
    {
      return data.json()
    }
    else
    {
      return null
    }
  })
  .then((response)=>{

    var responseObject = response
    if(responseObject)
    {
      var wordData = responseObject.definition[0]
      var definition=wordData.description
      var lexicalCategory=wordData.wordtype
      this.setState({
        "word" : this.state.text,
        "definition" :definition,
        "lexicalCategory" : lexicalCategory
      })
    }
    else
    {
      this.setState({
        "word" : this.state.text,
        "definition" : "Not Found",
      })
    }
  })
}
render(){
  <View style={styles.detailsContainer}>
  <Text style={styles.detailTitle}>
  Word :{" "}
  </Text>
  <Text style={{fontSize:18 }}>
  {this.state.word}
  </Text>
  </View>

  <View style={styles.detailsContainer}>
  <Text style={styles.detailTitle}>
  Type :{" "}
  </Text>
  <Text style={{fontSize:18 }}>
  {this.state.lexicalCategory}
  </Text>
  </View>

  <View style={{flexDirection: 'row',flexWrap: 'wrap'}}>
  <Text style={styles.detailTitle}>
  Definition :{" "}
  </Text>
  <Text style={{fontSize:18 }}>
  {this.state.definition}
  </Text>
  </View>
}