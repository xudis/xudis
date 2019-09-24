import React from 'react';
import ReactDOM from 'react-dom';


//无状态组件的定义
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}
const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9
}
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32
}
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return ''
    }
    const output = convert(input)
    const rounded = Math.round(output * 1000) / 1000
    return rounded.toString();
}
class TemInput extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange = (e) => {
        // const val = e.target.value
        // this.setState({ temperature: val })
        this.props.onTemperatureChange(e.target.value);
    }
    render() {
        const temperature = this.props.temperature
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input type="text" value={temperature} onChange={this.handleChange} />
            </fieldset>
        )
    }
}
class CalTem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            temperature: '',
            scale: "c"
        }
        this.handelCelsiusChange = this.handelCelsiusChange.bind(this)
        this.handelFahrenheitChange = this.handelFahrenheitChange.bind(this)
    }
    handelCelsiusChange = (temperature) => {
        this.setState({ scale: 'c', temperature })
    }
    handelFahrenheitChange = (temperature) => {
        this.setState({ scale: "f", temperature })
    }
    render() {
        const temperature = this.state.temperature
        const scale = this.state.scale;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature

        return (
            <div>
                <TemInput scale='c' onTemperatureChange={this.handelCelsiusChange} temperature={celsius} />
                <TemInput scale='f' onTemperatureChange={this.handelFahrenheitChange} temperature={fahrenheit} />
                <BoilingVerdict celasius={parseFloat(celsius)} />
            </div>
        )
    }

}
ReactDOM.render(<CalTem />, document.getElementById('root'));


