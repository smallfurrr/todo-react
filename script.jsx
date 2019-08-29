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
      // render the list with a map() here

      console.log("rendering");
      return (
        <div className="list">
          <input onChange={()=>{this.changeHandler()}} value={this.state.word}/>
          <button onClick={()=>{this.addItem()}}>add item</button>
        </div>
      );
  }
}

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);