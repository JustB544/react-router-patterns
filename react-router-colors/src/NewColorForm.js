import React, { useState} from "react";
import { useNavigate } from "react-router-dom";


function NewColorForm({newColor}){
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    function handleChange(evt){
        const {name, value} = evt.target;
        setFormData(fData => ({...fData, [name]: value}));
    }

    function handleSubmit(evt){
        newColor(formData);
        setFormData({});
        navigate("/colors");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Color name</label>
                <input name="name" type="text" onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="color">Color</label>
                <input name="color" type="color" onChange={handleChange}/>
            </div>
            <button>Add color</button>
        </form>
    );
}

export default NewColorForm;