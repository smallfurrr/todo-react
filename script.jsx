class Task extends React.Component {
    render() {
        return (
            <li>{this.props.item}</li>
        )
    }
}


class List extends React.Component {
    constructor() {
        super()

        this.state = {
            word: "",
            list: []
        }
    }

    changeHandler() {
        let typed = event.target.value;

        this.setState({
            word: typed
        }, () => {
            console.log(this.state.word);
        })
    }

    addItem() {
        console.log(this.state.word);
        let newEntry = this.state.word;

        //spread operator
        this.setState({
            list: [...this.state.list, newEntry]
            }, () => {
                console.log(this.state.list)
            })
    }


  render() {

      const taskList = this.state.list.map((task, taskIndex) => {

        return(
            <Task key={taskIndex} item={task}/>
        );
      })

      console.log("rendering");
      return (
        <div className="list">
          <input onChange={()=>{this.changeHandler()}} value={this.state.word}/>
          <button onClick={()=>{this.addItem()}}>add item</button>
          <ul>
            {taskList}
          </ul>
        </div>
      );
  }
}

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);