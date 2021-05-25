const scaleNames = {
    c: "Celsius",
    f: "Fahrenheit"
}

function BoilingVerdict({celsius}) {
    if (celsius >=100) {
        return <div className='alert alert-success'>The water boils</div>
    }
    return <div className='alert alert-info'>The water does not boil
    </div>

}


class TemperatureInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {temperature: ''}
        this.handleChange =this.handleChange.bind(this)

    }

       // method to change the value in the field
    handleChange(e) {
        this.setState({temperature: e.target.value})
    }

    render() {
        const {temperature} = this.state
        const name= "scale" + this.props.scale
        const scaleName = scaleNames[this.props.scale]
        return <div className="form-group">
            <label htmlFor={name}>Temperature (in {scaleName})</label>
            <input type="text" id={name} value={temperature} className="form-control" onChange={this.handleChange}/>
        </div>
    }
}


class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            temperature: ''
        }
    }


    render() {
        const {temperature} = this.state
        return <div>
            <TemperatureInput scale="c" />
            <TemperatureInput scale="f" />
            <BoilingVerdict celsius={parseFloat(temperature)} />
        </div>
    }
}

ReactDOM.render(<Calculator />, document.getElementById('app'))
