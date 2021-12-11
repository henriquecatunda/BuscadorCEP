import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #F8F7FC;
    font-family: 'Inter', sans-serif;
  }

  button {
      margin-right: 11px;
      border: 0;
      cursor: pointer;
      background-color: white;
  }

  a {
    color: #242424;
  }


  ::-webkit-input-placeholder {
      color: #504F52;
      font-size: 15px;
    }
    /* Firefox 19+ */
  ::-moz-placeholder {
      color: #504F52;
      font-size: 15px;
    
  }

  .row {
    margin-left: 15px !important;
  }

  .col-sm-12 {
    margin-top: 10px !important;
  }
`
