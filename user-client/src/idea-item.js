import React from 'react';


class IdeaItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            done: props.item.done
        }
    }

    toggleDone = () => {
        fetch(`https://flask-todo-api3.herokuapp.com//todo/${this.props.item.id}`, {
        method: "PATCH",
        headers: {"content-type": "application/json"},
        body: JSON.stringify({
            done: !this.state.done
        })
        })
        .then(() => {
            this.setState({
                done: !this.state.done
            })
        })
        .catch((error) => {
            console.log('error in toggleDone: ', error)
        })
    }



    render() {
        return (
            <div className="idea-item">
                <input
                    type="checkbox"
                    defaultChecked={this.state.done}
                    onClick={this.toggleDone}
                    />
                <p className={this.state.done ? "done" : null} >{this.props.item.title}</p>
                <button type="delete">X</button>
            </div>
        )
    }

 }

 export default IdeaItem 