import React, { Component } from "react";
import "./CreateForm.css";

class CreateForm extends Component {
    state = {
        input: ""
    };

    handleChange = e => {
        this.setState({
            input: e.target.value
        });
    };

    handleInsert = text => {
        this.props.onCreate(text);
        this.setState({
            input: ""
        });
    };

    render() {
        return (
            <div className="CreateForm">
                <form
                    className="form_container"
                    onSubmit={e => {
                        e.preventDefault();
                        this.handleInsert(this.state.input);
                    }}
                >
                    <input
                        value={this.state.input}
                        placeholder="something to do?"
                        onChange={this.handleChange}
                    />
                    <button type="submit">추가</button>
                </form>
            </div>
        );
    }
}

export default CreateForm;
