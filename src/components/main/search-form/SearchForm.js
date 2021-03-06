import React, { useContext } from 'react'
import Form from './Form'

import { SearchContext } from '../../../context/SearchContext'


const SearchForm = () => {

    /////////dont 4get to delete!!!!!!
    const { dispatchAdvancedSearchOptions } = useContext(SearchContext)
    const onClickCheckReducerState = () => {
        dispatchAdvancedSearchOptions({ type: "CHECK" })
    }

    return (
        <div className="search-form">
            <div className="header-section">
                <h3>איזה נכס ל<span onClick={onClickCheckReducerState}>השכרה</span> תרצו לחפש?</h3>
                <button>
                    <img alt="bell" className="bell" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDc5LjYxOSA0NzkuNjE5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NzkuNjE5IDQ3OS42MTk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDc1Ljg1NSwzMzYuMzc2Yy0wLjQ0MS0yLjgwOS0xLjExNi01LjU3Ny0yLjAxNy04LjI3NWMtOC42MjEtMjMuOTkxLTMzLjIwMy0zOC4zNDYtNTguMzM0LTM0LjA2NQ0KCQkJYy04LjMxMywxLjMwOS0xNi4xMTQtNC4zNjgtMTcuNDI1LTEyLjY4MWwtMTIuNjQ2LTgwLjkxM2MtMTAuMzc5LTY4LjQ1OS01OS44MzUtMTI0LjUyMi0xMjYuNDY0LTE0My4zNg0KCQkJYy02LjA2LTM3LjA4OC00MS4wMzgtNjIuMjQyLTc4LjEyNy01Ni4xODJjLTM2LjU5OCw1Ljk4LTYxLjY2OSw0MC4xNjMtNTYuMzc2LDc2Ljg2Nw0KCQkJYy01Ny40MzIsMzYuMzQ2LTg3Ljc0OCwxMDMuMzY1LTc3LjEyNCwxNzAuNDk2bDEzLjU1MSw4Ni4xMThjMS4yNDEsOC4yOTctNC40MDUsMTYuMDU0LTEyLjY4LDE3LjQyNQ0KCQkJYy0yNS4yMzQsMy42NDEtNDQuMjI2LDI0Ljg0OS00NS4wNzMsNTAuMzNjLTAuMjkyLDI4LjI3NSwyMi4zOTMsNTEuNDM0LDUwLjY2OCw1MS43MjZjMC4xNzcsMC4wMDIsMC4zNTUsMC4wMDMsMC41MzIsMC4wMDMNCgkJCWMyLjY2OS0wLjAwMiw1LjMzMy0wLjIwNyw3Ljk3LTAuNjE0bDUyLjUzMS04LjI2YzE4LjI3NCwzMi42MjIsNTkuNTMzLDQ0LjI1NCw5Mi4xNTUsMjUuOTgNCgkJCWMxNy4yMzEtOS42NTIsMjkuMzg4LTI2LjM0NywzMy4yODUtNDUuNzA5TDQzMy4yMiwzOTQuOUM0NjEuMTU0LDM5MC41MTMsNDgwLjI0MywzNjQuMzExLDQ3NS44NTUsMzM2LjM3NnogTTE4Ni43NzcsMzYuMzEzDQoJCQljMS43NzktMC4yNzcsMy41NzYtMC40Miw1LjM3Ni0wLjQyN2MxMS40NDEsMC4wNjEsMjIuMDk4LDUuODIyLDI4LjQxNiwxNS4zNmgtMC44MTljLTYuMzY1LTAuMTkyLTEyLjczNy0wLjAwOS0xOS4wODEsMC41NDYNCgkJCWMtNi42ODEsMC42MzgtMTMuMzIsMS42NjQtMTkuODgzLDMuMDcyYy0xLjQxNywwLjI5LTIuODE2LDAuNy00LjIxNiwxLjA0MWMtNS4zNzYsMS4yNjMtMTAuNjUsMi43NDgtMTUuODIxLDQuNTA2DQoJCQljLTAuNTEyLDAuMTU0LTEuMDQxLDAuMjM5LTEuNTUzLDAuNDI3QzE2Mi43OTcsNDcuOTY5LDE3My41NzYsMzguMzg0LDE4Ni43NzcsMzYuMzEzeiBNMTczLjgwNiw0NDUuNDg2DQoJCQljLTcuMjMzLDAuMDA4LTE0LjI3Ny0yLjMxNC0yMC4wODctNi42MjJsNDcuNzg3LTcuNDkyQzE5NS4wNzUsNDQwLjI1MiwxODQuNzcsNDQ1LjUwMywxNzMuODA2LDQ0NS40ODZ6IE00MzkuODI0LDM1My4yMDcNCgkJCWMtMi42MTMsNC4yOTEtNi45ODMsNy4yMTMtMTEuOTQ3LDcuOTg3TDIyMi4zMSwzOTMuNTE4bC05OS44OTEsMTUuNzE4bC02NS4zNjUsMTAuMjRjLTQuOTUyLDAuODA4LTEwLjAwNi0wLjYzLTEzLjc5LTMuOTI1DQoJCQljLTMuODYyLTMuMjkzLTYuMDU3LTguMTM1LTUuOTktMTMuMjFjMC43MzktOC43NTMsNy41MjYtMTUuNzgyLDE2LjI0Ny0xNi44MjhjMjYuODgtNC4zMDksNDUuMjM0LTI5LjUxOCw0MS4wNzktNTYuNDIyDQoJCQlsLTEzLjUzNC04Ni4xMThjLTguODY0LTU2LjgxNCwxOC43MjMtMTEzLjExMSw2OS4wNTItMTQwLjkxOWMwLjI5Ni0wLjA5OSwwLjU4Ni0wLjIxMywwLjg3LTAuMzQxDQoJCQljMTYuMzM0LTguODUsMzQuMzAyLTE0LjI3NSw1Mi44MDQtMTUuOTRjNS42MDctMC40OTMsMTEuMjQtMC42MDEsMTYuODYyLTAuMzI0bDIuNzk5LDAuMTM3DQoJCQljNS44MTYsMC4zNTIsMTEuNjAyLDEuMDgxLDE3LjMyMywyLjE4NWMwLjE4OCwwLDAuMzU4LDAsMC41NDYsMGM1Ny43NDgsMTIuNDkzLDEwMS43MDEsNTkuNDc5LDExMC4zMTksMTE3LjkzMWwxMi43MzIsODAuOTEzDQoJCQljNC4yMzIsMjYuOTMxLDI5LjQ5LDQ1LjMzNiw1Ni40MjIsNDEuMTE0YzguNjA4LTEuNjgxLDE3LjIxNCwyLjkwNywyMC42MTcsMTAuOTkxDQoJCQlDNDQzLjA3NSwzNDMuNTQxLDQ0Mi40OTMsMzQ4Ljg1Nyw0MzkuODI0LDM1My4yMDd6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" />
                    <span>קבלו התראות במייל על החיפוש</span>
                </button>
            </div>
            <Form />
        </div>
    )
}

export default SearchForm