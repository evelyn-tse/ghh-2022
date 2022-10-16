function FormInput({handleChange, formInputData, handleSubmit}){
    return(
    
        <div className="form-row row">
          <div className="col">
            <input type="text" onChange={handleChange} value={formInputData.date} name="date" className="form-control"  placeholder="Date" />
          </div>
          <div className="col">
            <input type="email" onChange={handleChange} value={formInputData.category} name="category" className="form-control" placeholder="Category" />
          </div>
          <div className="col">
            <input type="text" onChange={handleChange} value={formInputData.salary} name="amount" className="form-control" placeholder="Amount" />
          </div>
          <div className="col">
            <input type="submit" onClick={handleSubmit} className="btn btn-primary" />
          </div>
        </div>
     
      
    )
    }
    
    export default FormInput;