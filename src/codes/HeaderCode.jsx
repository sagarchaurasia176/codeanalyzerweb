import { TypeAnimation } from 'react-type-animation';

const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        'function bubbleSort(arr) {',
        1000,
        'function bubbleSort(arr) {\n  for(let i = 0; i < arr.length; i++) {',
        1000,
        'function bubbleSort(arr) {\n  for(let i = 0; i < arr.length; i++) {\n    for(let j = 0; j < arr.length-i-1; j++) {',
        1000,
        'function bubbleSort(arr) {\n  for(let i = 0; i < arr.length; i++) {\n    for(let j = 0; j < arr.length-i-1; j++) {\n      if(arr[j] > arr[j+1]) {\n        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]\n      }\n    }\n  }\n  return arr;\n}\n\n// Time Complexity: O(n²)\n// Space Complexity: O(1)',
        1000,
        () => {
          console.log('Code animation completed');
        }
      ]}
      wrapper="pre"
      cursor={true}
      repeat={Infinity}
      style={{ 
        fontSize: '1em',
        display: 'inline-block',
        fontFamily: 'monospace',
        whiteSpace: 'pre-wrap',
        color: '#4ade80' // Light green color for code
      }}
    />
  );
};

export default ExampleComponent;