import React, {Component} from 'react';


class Modal extends Component {

  constructor(){
    super();
    this.url = 'http://richardturra.pythonanywhere.com'
  }

  //when the button update is clicked
  updateHandler = () => {
    // get the actual variables
    var todo = document.getElementById("modal_input").value;
    var id = document.getElementById("modal_update").getAttribute("num");
    var modal_status = document.getElementById("modal_update").getAttribute("status");
    var origin = document.getElementById("modal_update").getAttribute("orig");
    var count = document.getElementById("count").innerHTML;
    document.getElementById("modal_close").click();


    // make the request to update
    if (document.getElementById("radio_completed").checked) {
      fetch(this.url,{
        method: 'POST',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'CRUD': "UP",
        'mode':'cors',
      },
       body: "id="+id+"&todo="+todo+"&status=true"
      })
      .then(res => res.text())
      .then(text => {
        if (text==='success'){
          //actualize the element with the new value
          document.getElementById("todo_"+id).innerHTML = todo
          //actualize the class and tab position display
          if(modal_status === 'false' && origin !=='all'){
              document.getElementById(id).classList.add("d-none")
              count--;
              document.getElementById("count").innerHTML = count;
            }
            else{
              document.getElementById("all").click();   
            }
        }
      })
      .catch(error => alert('error '+error))
      
    }
    else{
      fetch(this.url,{
        method: 'POST',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'CRUD': "UP",
        'mode':'cors',
      },
       body: "id="+id+"&todo="+todo+"&status=false"
      })
      .then(res => res.text())
      .then(text => {
        if (text==='success'){
          //actualize the element with the new value
          document.getElementById("todo_"+id).innerHTML = todo
          //actualize the class and tab display
          if(modal_status === 'true' && origin !=='all'){
              document.getElementById(id).classList.add("d-none")              
              count--;
              document.getElementById("count").innerHTML = count;
            }
            else{
              document.getElementById("all").click();
            }
        }
      })
      .catch(error => alert('error '+error))
    }
  }


  render(){
     // Bootstrap Modal
    return(
      <div>
        <div className="modal fade" id="EditModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-sm" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Edit</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <input id="modal_input" type="text"/>
                <label className="radio-inline"><input id="radio_pending" type="radio" name="optradio" defaultChecked/>Pending</label>
                <label className="radio-inline"><input id="radio_completed" type="radio" name="optradio"/>Completed</label>
              </div>
              <div className="modal-footer">
                <button id="modal_close" type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button id="modal_update" type="button" className="btn btn-primary" orig="all" onClick = {this.updateHandler}>Update</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
 };

 export default Modal;