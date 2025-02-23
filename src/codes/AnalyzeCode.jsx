import React from 'react'
import { TypeAnimation } from 'react-type-animation';
const AnalyzeCode = () => {
  return (
    <div>      
      <TypeAnimation
      sequence={[
        'function quickSort(arr) {',
        1000,
        'function quickSort(arr) {\n  if (arr.length <= 1) return arr;',
        1000,
        'function quickSort(arr) {\n  if (arr.length <= 1) return arr;\n  const pivot = arr[0];\n  const left = [];\n  const right = [];',
        1000,
        'function quickSort(arr) {\n  if (arr.length <= 1) return arr;\n  const pivot = arr[0];\n  const left = [];\n  const right = [];\n\n  for (let i = 1; i < arr.length; i++) {\n    if (arr[i] < pivot) left.push(arr[i]);\n    else right.push(arr[i]);\n  }\n\n  return [...quickSort(left), pivot, ...quickSort(right)];\n}\n\n// Time Complexity: O(n log n)\n// Space Complexity: O(n)',
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
    </div>
  )
}

export default AnalyzeCode
