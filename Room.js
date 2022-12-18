import React,{Component} from 'react';
import {variables} from './Variables.js';

export class Room extends Component{

    constructor(props){
        super(props);

        this.state={
            departments:[],
            employees:[],
            hotelguests:[],
            rooms:[],
            modalTitle:"",
            RoomNum:0,
            BedNum:0,
            RoomsType:""
        }
    }

    refreshList(){
        fetch(variables.API_URL+'room')
        .then(response=>response.json())
        .then(data=>{
            this.setState({rooms:data});
        });

        fetch(variables.API_URL+'hotelguest')
        .then(response=>response.json())
        .then(data=>{
            this.setState({hotelguests:data});
        });

        fetch(variables.API_URL+'department')
        .then(response=>response.json())
        .then(data=>{
            this.setState({departments:data});
        });

        fetch(variables.API_URL+'employee')
        .then(response=>response.json())
        .then(data=>{
            this.setState({employees:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }
    

    changeRoomsType =(e)=>{
        this.setState({RoomsType:e.target.value});
    }
    changeBedNum=(e)=>{
        this.setState({BedNum:e.target.value});
    }

    addClick(){
        this.setState({
            modalTitle:"Add Room",
            GuestId:0,
            GuestEmailAddr:"",
            GuestName:"",
            GuestAddr:""
        });
    }
    editClick(roo){
        this.setState({
            modalTitle:"Edit Room",
            RoomNum:roo.RoomNum,
            BedNum:roo.BedNum,
            RoomsType:roo.RoomsType
        });
    }

    createClick(){
        fetch(variables.API_URL+'room',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                RoomsType:this.state.RoomsType,
                BedNum:this.state.BedNum
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        })
    }


    updateClick(){
        fetch(variables.API_URL+'room',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                RoomNum:this.state.RoomNum,
                RoomsType:this.state.RoomsType,
                BedNum:this.state.BedNum
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        })
    }

    deleteClick(id){
        if(window.confirm('Are you sure?')){
        fetch(variables.API_URL+'room/'+id,{
            method:'DELETE',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        })
    }
    }



    render(){
        const {
            departments,
            employees,
            rooms,
            hotelguests,
            modalTitle,
            RoomNum,
            RoomsType,
            BedNum
        }=this.state;

        return(
<div>
    <button type="button"
    className="btn btn-primary m-2 float-end"
    data-bs-toggle="modal"
    data-bs-target="Modal"
    onClick={()=>this.addClick()}>
        Add Room
    </button>
<table className="table table-striped">
    <thead>
    <tr>
        <th>
            RoomNum
        </th>
        <th>
            RoomsType
        </th>
        <th>
            BedNum
        </th>
        <th>
            Options
        </th>
    </tr>
    </thead>
    <tbody>
        {rooms.map(roo=>
             <tr key={roo.RoomNum}>
             <td>{roo.RoomNum}</td>
             <td>{roo.RoomsType}</td>
             <td>{roo.BedNum}</td>
             <td>
             <button type="button"
             className="btn btn-light mr-1"
             data-bs-toggle="modal"
             data-bs-target="Modal"
             onClick={()=>this.editClick(roo)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                    </svg>
                </button>

                <button type="button"
                className="btn btn-light mr-1"
                onClick={()=>this.deleteClick(roo.RoomNum)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                    </svg>
                </button>
                </td>
            </tr>
            
            )}
    </tbody>

    </table>


    <div className="modal fade" id="Modal" tabIndex="-1" aria-hidden="true">
    <div className="modal-dialog modal-lg modal-dialog-centered">
    <div className="modal-content">
        <div className="modal-header">
            <h5 className="modal-title">{modalTitle}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
       ></button>
   </div>

   <div className="modal-body">
   <div className="d-flex flex-row bd-highlight mb-3">
     
     <div className="p-2 w-50 bd-highlight">
    
        <div className="input-group mb-3">
            <span className="input-group-text">RoomsType</span>
            <input type="text" className="form-control"
            value={RoomsType}
            onChange={this.changeRoomsType}/>
        </div>
        </div>
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text">BedNum</span>
            <select className="form-select"
            value={BedNum}
            onChange={this.changeBedNum}/>
        </div>


        {RoomNum==0?
        <button type="button"
        className="btn btn-primary float-start"
        onClick={()=>this.createClick()}
        >Create</button>
        :null}

        {RoomNum!=0?
        <button type="button"
        className="btn btn-primary float-start"
        onClick={()=>this.updateClick()}
        >Update</button> 
        :null}

        </div>
    </div>
    </div>
    </div>
    
</div>
        )
    }
}