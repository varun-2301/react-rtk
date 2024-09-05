import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    body,
    html {
        height: 100%;
        display:inherit;
    }
    .toast {
        background-color: #030303 !important;
    }
    .toast-success {
        background-color: #51a351 !important;
    }
    .toast-error {
        background-color: #bd362f !important;
    }
    .toast-info {
        background-color: #2f96b4 !important;
    }
    .toast-warning {
        background-color: #f89406 !important;
    }
    .errorMsg {
        color: red;
    }
`
