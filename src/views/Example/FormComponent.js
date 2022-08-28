import React from "react";

class FormComponent extends React.Component {
    state = {
        pos: '',
        salary: ''
    }
    handleChangePosition = (event) => {
        this.setState({
            pos: event.target.value,
        })
    }
    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value,
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        //console.log(">>> check data input: ", this.state);
        if (!this.state.pos || !this.state.salary) {
            alert('Missing required param')
            return;
        }
        this.props.addNewJob({
            id: 'job' + Math.floor(Math.random() * 1001),
            pos: this.state.pos,
            salary: this.state.salary
        })

        this.setState({
            pos: '',
            salary: ''
        })
    }

    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">Position:</label><br />
                    <input
                        type="text"
                        value={this.state.pos}
                        onChange={(event) => this.handleChangePosition(event)}
                    />
                    <br />
                    <label htmlFor="lname">Salary:</label><br />
                    <input
                        type="text"
                        value={this.state.salary}
                        onChange={(event) => this.handleChangeSalary(event)}
                    />
                    <br /><br />
                    <input
                        type="button" value="Submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>
            </>
        )
    }
}

export default FormComponent;