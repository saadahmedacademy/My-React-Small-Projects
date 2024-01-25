const BtnContainer = ({onButtonClick}) => {
 
    const buttonName = ['C','1','2','3','+','4','5','6','-','7','8','9','*','0','=' ,'.','/','AC']

    
    return  <div className="buttonsContainer">
    {buttonName.map((buttonName) => (
       <button className='buttons' onClick={() => onButtonClick(buttonName)}>{buttonName}</button> 
    ))}
</div>
}
export default BtnContainer;