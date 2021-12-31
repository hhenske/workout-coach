const React = require ('react');
const ms = require('pretty-ms');


class Timer extends React.Component {
    constructor (props) {
        super (props)
            this.state = {
                time: 0,
                isOn: false,
                start: 0
        }
    }
}