import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

// displays components (class based)
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App


// displays components (function based)
// function App () {
//   return (
//     <div>
//       <Header />
//       <Main />
//       <Footer />
//     </div>
//   )
// }
