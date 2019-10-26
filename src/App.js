import React, {Component} from 'react'
import './App.css'

export default class App extends Component {
  state = {
    options: [],
    value: '',
    inpvalue: '',
    news: [],
    click:false,
    num: 0,


  }



  addOptions = (e) => {
    this.setState({
      value: e.target.value
    })

  }



  getValue = (e) => {

    let b = this.state.options.find(i=>i.id == e.id)
    this.state.num = b
    this.setState({
      click:!this.state.click
    })

  }

  addOptionsHandler = (i) => {


    if (this.state.value.length !== 0 && this.state.value.trim().length !== 0 ){

      var val = this.state.value
      this.state.options.push({id: Date.now(), vals: val, name: []})
      this.state.value = []
      document.querySelector('input').focus()
      this.setState({})

    }
    this.setState({
    })
  }


  changeValue = (e) => {
    this.setState({
      inpvalue: e.target.value
    })
  }

  editor = (j) => {
    var sel = document.querySelector('select')
    var b = this.state.options;
    var val = this.state.inpvalue

    var u = j.map((r, l )=> {
      if(sel.value == r.id ){
        r.name.push(val)

      }
      return r

    })
    this.state.inpvalue = '';
    this.setState({})

  }




  render() {
    return(

        <div className={"d-flex justify-content-center"}>
          <div className={'g'}>
            <h1>To Do List</h1>
            <div className='head'>



              <div className='firstInput '>
                <p>Enter Your To Do Date</p>
                <div className={'d-flex'}>
                  <input className={"form-control"}  type="text" onChange={this.addOptions} value={this.state.value}/>
                  <button className='btn btn-success btn-md' onClick={this.addOptionsHandler}>Add</button>
                </div>
              </div>

              <div className='secondInput'>
                <div >
                  <p>Select Unique To Do from List</p>
                  <select  className={'selectpicker'} >
                    <option value=""></option>

                    {this.state.options.map((elem, index) => {
                      return(
                          <option key={index} value={elem.id} id={elem.id} > {elem.vals} </option>
                      )
                    })}
                  </select>
                  <p>Add What To Do</p>
                  <div className={'d-flex'}>
                    <input className={"form-control"} type="text" onChange={this.changeValue} value={this.state.inpvalue}/>
                    <button className='btn btn-success' onClick={this.editor.bind(this,this.state.options.map(elem=>{
                      return this.state.options.find(i=>i.id == elem.id)
                    }))}>What to Do</button>
                  </div>
                </div>


                <div className='lastItems'>
                  <ul className='ul1'>{this.state.options.map((elem, index) => {
                    return(
                        <li key={index}>
                          <a  onClick={this.getValue.bind(this,this.state.options.find(i=>i.id == elem.id))}> {elem.vals}
                          </a>
                        </li>
                    )
                  })}
                  </ul>
                  <ul className='ul2'>
                    { this.state.click ? this.state.num.name.map((e,i) => {
                      return(
                          <li>
                            <label htmlFor="">
                              <input type="checkbox"  key={i} value={'inchvorban'}/>
                              {e}
                            </label>
                          </li>
                      )
                    }): null}
                  </ul>

                </div>
              </div>
            </div>
          </div>
        </div>


    )
  }
}