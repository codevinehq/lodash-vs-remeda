import * as remeda from "./remeda";
import * as lodash from "./lodash";
import "./App.css";
import { isDeepEqual } from "remeda";

/**
 * Used methods
 * - merge
 * - pickBy
 * - mapKeys
 * - get
 * - defaultTo
 * - omit
 * - isInteger
 * - kebabCase
 * - truncate
 * - uniqBy
 * - isEqual
 * - values
 * - mapValues
 * - sum
 * - uniq
 * - isArray
 * - mergeWith
 * - ceil
 * - floor
 * - round
 * - toNumber
 * - camelCase
 * - upperFirst
 * - toPairs
 * - invert
 * - map
 * - pickBy
 * - reduce
 * - find
 * - omit
 * - set
 * - findIndex
 * - reject
 * - range
 * - xor
 * - chunk
 * - mapValues
 * - isPlainObject
 * - minBy
 * - size
 * - debounce
 * - kebabCase
 * - clamp
 * - has
 * - trim
 * - take
 * - isMatch
 * - compact
 * - values
 * - orderBy
 * - objSize
 * - first
 * - uniq
 * - isString
 * - memoize
 * - isFunction
 * - shuffle
 * - some
 * - random
 * - keyBy
 * - throttle
 * - flatMap
 * - isUndefined
 * - each
 * */

// Remeda = 24.26 KB (10.37 KB gzipped)
// Lodash = 547.05 KB (94.76 KB gzipped)
// Lodash-es = 213.41 KB (107.59 KB gzipped)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Remeda vs Lodash</h1>
        <p>Open the console to see the results of the examples.</p>

        <h2>Results</h2>

        <h3>Size</h3>
        <table>
          <thead>
            <tr>
              <th>Library</th>
              <th>Size</th>
              <th>Gzipped</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Remeda</td>
              <td>24.26 KB</td>
              <td>10.37 KB</td>
            </tr>
            <tr>
              <td>Lodash-es</td>
              <td>213.41 KB</td>
              <td>107.59 KB</td>
            </tr>
            <tr>
              <td>Lodash</td>
              <td>547.05 KB</td>
              <td>94.76 KB</td>
            </tr>
          </tbody>
        </table>

        <h3>Output</h3>
        <table>
          <thead>
            <tr>
              <th>Method</th>
              <th>Remeda</th>
              <th>Lodash</th>
              <th>Is Equal</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(lodash).map(([key, value]) => (
              <tr key={key}>
                <td>{key.replace("Result", "")}</td>
                {/* @ts-expect-error - We are comparing the results of the methods */}
                <td>{JSON.stringify(remeda[key], null, "  ")}</td>
                <td>{JSON.stringify(value, null, "  ")}</td>
                {/* @ts-expect-error - We are comparing the results of the methods */}
                <td>{isDeepEqual(value, remeda[key]) ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;

console.log(
  Object.entries(lodash).map(([key, value]) => [
    key,
    value,
    // @ts-expect-error - We are comparing the results of the methods
    remeda[key],
    // @ts-expect-error - We are comparing the results of the methods
    isDeepEqual(value, remeda[key]),
  ])
);
