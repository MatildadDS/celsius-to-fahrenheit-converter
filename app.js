function BoilingVerdict({celsius}) {
    if (celsius >=100) {
        return <div className='alert alert-success'>The water boils</div>
    }
    return <div className='alert alert-info'>The water does not boil
    </div>

}

class Calculator extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            temperature: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({temperature: e.target.value})
    }

    render() {
        const {temperature} = this.state
        return <div>
            <div className="form-group">
                <label htmlFor="celsius">Température (in Celsius)</label>
                <input type="text" id="celsius" value={temperature} className="form-control" onChange={this.handleChange}/>
            </div>
            <BoilingVerdict celsius={parseFloat(temperature)} />
        </div>
    }
}

ReactDOM.render(<Calculator />, document.getElementById('app'))