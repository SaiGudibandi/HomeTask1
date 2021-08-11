import React from 'react';
import '../Styles/SearchForm.css';

class SearchForm extends React.PureComponent {

    state = {
        inputValue: '',
        showSearchTerm: false
    };

    updateInputValue = (event) => {
        this.setState({
            inputValue: event.target.value,
            showSearchTerm: false
        });
        console.log(this.state.inputValue)
    };

    handleSubmit = (evt) => {
        evt.preventDefault();
        this.setState({
            showSearchTerm: true
        });
    };

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <form>
                    <input type="text" value={this.state.inputValue} onChange={this.updateInputValue} placeholder="What do you want to watch?" />
                    <button onClick={this.handleSubmit}>Search</button>
                </form>
                {this.state.showSearchTerm === true ? <h3>you searched for {this.state.inputValue}</h3> : null}
            </div>
        );
    };
};

export default SearchForm;