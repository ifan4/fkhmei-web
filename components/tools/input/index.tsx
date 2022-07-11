
export function Input({label_name,id="input",type='text',errors,register,disabled=false,value=null}:any){

    return(
        <>
            <label htmlFor={id} className='form-label'>{label_name}</label>
            <input 
            id={id}
            type={type} 
            value={value}
            className={`form-control ${errors ? 'is-invalid' :''}`}
            {...register}
            disabled={disabled}
            />
            {
                errors && 
                <span className="invalid">{errors.message}</span>
            }
        </>
    )
}


export function PriceInput({label_name,id="input",type='text',disabled=false,errors,register}:any){

    return(
        <>
            <label htmlFor={id} className='form-label'>{label_name}</label>
            <div className="input-group">
                <div className="input-group-text">Rp.</div>
                <input 
                id={id}
                type={type} 
                className={`form-control ${errors ? 'is-invalid' :''}`}
                {...register}
                disabled={disabled}
                />
            </div>
            {
                errors && 
                <span className="invalid">{errors.message}</span>
            }
        </>
    )
}
export function PhoneInput({label_name,id="input",type='text',disabled=false,errors,register}:any){

    return(
        <>
            <label htmlFor={id} className='form-label'>{label_name}</label>
            <div className="input-group">
                <div className="input-group-text">+62</div>
                <input 
                id={id}
                type={type} 
                className={`form-control ${errors ? 'is-invalid' :''}`}
                {...register}
                disabled={disabled}
                />
            </div>
            {
                errors && 
                <span className="invalid">{errors.message}</span>
            }
        </>
    )
}

export function TextArea({label_name,id="input",errors,register,disabled=false,value=null}:any){
    
    return(
        <>
            <label htmlFor={id} className='form-label'>{label_name}</label>
            <textarea 
            id={id}
            rows={5}
            value={value}
            className={`form-control ${errors ? 'is-invalid' :''}`}
            {...register}
            disabled={disabled}
            ></textarea>
            
            {
                errors && 
                <span className="invalid">{errors.message}</span>
            }
        </>
    )
}

export function CheckBox({label_name,id="input",type='text',errors,register,disabled=false,value=null}:any){

    return(
        <div className="form-check">
            <input 
            id={id}
            type={'checkbox'} 
            value={value}
            className={`form-check-input ${errors ? 'is-invalid' :''}`}
            {...register}
            disabled={disabled}
            />
            <label 
            htmlFor={id} 
            className='form-check-label' 
            style={{
                fontWeight: 500,
                fontSize: '12px',
                letterSpacing: '0.085em',
                color: '#048EA7',
                marginTop: '5px',
            }}
            >
                {label_name}
            </label>
            {
                errors && 
                <span className="invalid d-block">{errors.message}</span>
            }
        </div>
    )
}

