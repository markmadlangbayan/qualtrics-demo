import {Button, SafeAreaView, View} from 'react-native';
import React from 'react';

import Qualtrics from 'react-native-qualtrics';

function App() {
  return (
    <SafeAreaView>
      <View>
        <Button title="Initialize Me" onPress={initMe} />
      </View>
    </SafeAreaView>
  );
}

// <Button title="Initialize Me" onPress={initMe} />
//       <Button title="Evaluate & Display Me" onPress={evalMe} />

function initMe() {
  console.log('Initializing...');
  Qualtrics.initializeProjectWithExtRefId(
    'bswhsi',
    'SI_6JPiclZfSgy8w74',
    '',
    initializationResults => {
      console.log(initializationResults);
      console.log('Initialization Done');
    },
  );
}

// function evalMe() {
//   console.log('Evaluating...');
//   Qualtrics.evaluateProject(targetingResults => {
//     console.log(targetingResults);
//     for (var intercept in targetingResults) {
//       let result = targetingResults[intercept];
//       if (result.passed) {
//         Qualtrics.display();
//       }
//     }
//     console.log('Evaluation Done');
//   });
// }

export default App;
