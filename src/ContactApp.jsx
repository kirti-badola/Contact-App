import React,{useState} from 'react';
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; // bootstrap

const ContactApp = () => {

    const[inputData, setInputData] = useState('');  // for input name
    const[inputEmail, setInputEmail] = useState('');  // for input email
    const[items, setItems] = useState([]);  // for add items
    const[toggleSubmit, setToggleSubmit] = useState(true);   // for toggle button means: change add button to edit button
    const[isEditItem, setIsEditItem] = useState(null);       // for check edit button id

    // Add items
    const addItem = () => {
        if(!inputData && !inputEmail) {
             alert('Please Fill Your Name & Email Id');
             }
        else if(inputData && inputEmail && !toggleSubmit) {
            setItems(
                items.map((elem) => {
                    if(elem.id === isEditItem){
                        return { ...elem, name:inputData, email:inputEmail}
                    }
                    return elem;
                })
            )
            setToggleSubmit(true);
            setInputData('');
            setInputEmail('');
            setIsEditItem(null);
        }
        else{
            const allInputData = {id: new Date().getTime().toString(), name: inputData, email: inputEmail}
            setItems([...items, allInputData]);
            setInputData('');
            setInputEmail('');
        }
    }

    //delete Items
    const deleteItem = (index) => {
        const updateItems = items.filter((elem) => {
            return index !== elem.id;
        });
        setItems(updateItems);
    }

    // Edit Items
    // When use click on edit button

    // 1. Get the id and name of the data which user clicked to edit
    // 2. Set the toggle mode to change the submit button into edit button
    // 3. Now update the value of the setInput with the new updated value to edit.
    // 4. To pass the current element Id to new state variable for reference

    const editItem = (id) =>{
        let newEditItem = items.find((elem) =>{
            return elem.id === id
        });

        setToggleSubmit(false);
        setInputData(newEditItem.name);
        setInputEmail(newEditItem.email);
        setIsEditItem(id);
    }

    

    //Remove All Items
    const removeAll = () =>{
        setItems([]);
    }

    return (
        <>
            <div className="main_div">
                <div className="child_div">
                <h1 className="text-uppercase heading">Contact App</h1>
                {/* Add Items */}
                <div className="addItems mt-4"> 
                    <input 
                    type="text" 
                    placeholder="Enter Your Name" 
                    className="form-control nameInput"
                    value={inputData}
                    onChange={(e) => setInputData(e.target.value)}
                    required
                     />

                     <input 
                    type="email" 
                    placeholder="Enter Your Email" 
                    className="form-control EmailInput"
                    value={inputEmail}
                    onChange={(e) => setInputEmail(e.target.value)}
                    required
                     />
                     {
                         toggleSubmit ? <button className="btn btn-success text-uppercase submit_btn" onClick={addItem}>Submit</button>:
                         <button className="btn btn-success text-uppercase update_btn" onClick={addItem}>Update</button>
                     }
                     
                </div>

                {/* Show Items */}
                <div className="showItems">

                {
                    items.map((elem) => {
                        return(
                            <>
                                <div className="eachItems mt-4" key={elem.id}>
                                  <h3>{elem.name} <br /> { elem.email}</h3>
                                 
                                  <div className="todo_btn">
                                    <i className="fa fa-pencil-square-o edit_btn" title="Edit Item" onClick={()=>editItem(elem.id)}></i>
                                    <i className="fa fa-trash delete_btn" title="Delete Item" onClick={()=>deleteItem(elem.id)}></i>
                                  </div>

                                  </div>
                                  
                              
                            </>
                        )
                    })
                }

                </div>

                {/* Clear All List */}
                <div className="showItems">
                    <button 
                    className="btn btn-primary remove_btn mt-5 text-uppercase"
                    onClick={removeAll}
                    >Remove All</button>
                </div>


                </div>
            </div>
        </>
    )
}

export default ContactApp
