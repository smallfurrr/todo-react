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
            list: [],
            inputClass:"",
            status:""
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
        let newEntry = this.state.word;

        //validity checking: testing that entry must be between 2 and 200 chars
        if (newEntry.length < 2 || newEntry.length > 200) {
            this.setState({
                inputClass: "warning",
                status: "Entry must be between 2 and 5 characters!"
            }, () => {
                console.log(this.state.inputClass);
            });
            return;
        } else {
            //add entry to array
            this.setState({
                list: [...this.state.list, newEntry]
            }, () => {
                console.log(this.state.list)
            });
        }
    }

  render() {

      const taskList = this.state.list.map((task, taskIndex) => {

        return(
            <Task key={taskIndex} item={task}/>
        );
      })

      return (
        <div className="list">
          <input className={this.state.inputClass} onChange={()=>{this.changeHandler()}} value={this.state.word}/>
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