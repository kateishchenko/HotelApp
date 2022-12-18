import React,{Component} from 'react';
import {variables} from './Variables.js';

export class HotelGuest extends Component{

    constructor(props){
        super(props);

        this.state={
            departments:[],
            employees:[],
            hotelguests:[],
            modalTitle:"",
            GuestName:"",
            GuestId:0,
            GuestEmailAddr:"",
            GuestAddr:""
        }
    }

    refreshList(){
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
    

    changeGuestName =(e)=>{
        this.setState({GuestName:e.target.value});
    }
    changeGuestEmailAddr=(e)=>{
        this.setState({GuestEmailAddr:e.target.value});
    }
    changeGuestAddr=(e)=>{
        this.setState({GuestAddr:e.target.value});
    }

    addClick(){
        this.setState({
            modalTitle:"Add Guest",
            GuestId:0,
            GuestEmailAddr:"",
            GuestName:"",
            GuestAddr:""
        });
    }
    editClick(gue){
        this.setState({
            modalTitle:"Edit Guest",
            GuestId:gue.GuestId,
            GuestName:gue.GuestName,
            GuestEmailAddr:gue.GuestEmailAddr,
            GuestAddr:gue.GuestAddr
        });
    }

    createClick(){
        fetch(variables.API_URL+'hotelguest',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                GuestName:this.state.GuestName,
                GuestEmailAddr:this.state.GuestEmailAddr,
                GuestAddr:this.state.GuestEmailAddr
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
        fetch(variables.API_URL+'hotelguest',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                GuestId:this.state.GuestId,
                GuestName:this.state.GuestName,
                GuestEmailAddr:this.state.GuestEmailAddr,
                GuestAddr:this.state.GuestEmailAddr
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
        fetch(variables.API_URL+'hotelguest/'+id,{
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
            hotelguests,
            modalTitle,
            GuestId,
            GuestName,
            GuestEmailAddr,
            GuestAddr
        }=this.state;

        return(
<div>
    <button type="button"
    className="btn btn-primary m-2 float-end"
    data-bs-toggle="modal"
    data-bs-target="Modal"
    onClick={()=>this.addClick()}>
        Add Guest
    </button>
<table className="table table-striped">
    <thead>
    <tr>
        <th>
            GuestId
        </th>
        <th>
            GuestName
        </th>
        <th>
            GuestAddr
        </th>
        <th>
            GuestEmailAddr
        </th>
        <th>
            Options
        </th>
    </tr>
    </thead>
    <tbody>
        {hotelguests.map(gue=>
             <tr key={gue.GuestId}>
             <td>{gue.GuestId}</td>
             <td>{gue.GuestName}</td>
             <td>{gue.GuestAddr}</td>
             <td>{gue.GuestEmailAddr}</td>
             <td>
             <button type="button"
             className="btn btn-light mr-1"
             data-bs-toggle="modal"
             data-bs-target="Modal"
             onClick={()=>this.editClick(gue)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                    </svg>
                </button>

                <button type="button"
                className="btn btn-light mr-1"
                onClick={()=>this.deleteClick(gue.GuestId)}>
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
            <span className="input-group-text">GuestName</span>
            <input type="text" className="form-control"
            value={GuestName}
            onChange={this.changeGuestName}/>
        </div>
        </div>
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text">GuestAddr</span>
            <select className="form-select"
            value={GuestAddr}
            onChange={this.changeGuestAddr}/>
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text">GuestEmailAddr</span>
            <select className="form-select"
            value={GuestEmailAddr}
            onChange={this.changeGuestEmailAddr}/>
        </div>


        {GuestId==0?
        <button type="button"
        className="btn btn-primary float-start"
        onClick={()=>this.createClick()}
        >Create</button>
        :null}

        {GuestId!=0?
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