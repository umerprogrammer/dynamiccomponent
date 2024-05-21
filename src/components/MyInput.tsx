

export default function MyInput(props:{
    inputType:string
    inputName:string;
    inputLabel?:string
    inputPlaceHolder?:string ;
    inputChange?:(e:any)=> void;
    inputClass?:string;
    inputValue?:string |number;
    
}){
    const {inputType,inputName,inputLabel,inputPlaceHolder,inputChange,inputValue} = props;
    
    return(
        <div className='form-group text-start w-100'>
            <label htmlFor={inputName} className='col-form-label-sm'>{inputLabel} :</label>
            <input type={inputType} className='form-control form-control-sm' value={inputValue} name={inputName} id={inputName} placeholder={inputPlaceHolder}
            onChange={
                inputChange
            }/>
        </div>
    )

}