import React from 'react';

class Translate extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            text_to_translate: '',
            text_translated: ''
        }
    }

    handleChangeTextTranslated(e) {
        return this.setState({
            text_to_translate: e.target.value
        });
    }

    handlerClick() {
        console.log('##');
        fetch('http://localhost:9000/translate', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
				'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: this.state.text_to_translate,
                to: 'en'
            })
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data.data.text);
            this.setState({
                text_translated: data.data.text
            });
        });
    }

    render(){
        return(
            <div>
                <input type='text' name='text_to_translate' value={this.state.text_to_translate} onChange={this.handleChangeTextTranslated.bind(this)}/>
                <button type='button' onClick={this.handlerClick.bind(this)}>Translate</button>
                <hr/>
                <p>
                    {this.state.text_translated}
                </p>
            </div>
        );
    }

}

export default Translate;