
// After the Form loads and prefill the fields
function FF_OnAfterRender(){
    
    // When the field is Date and it has TDAY as value, we will set the today date
    fs("input[value*=TDAY]input[data-vatt=DATE]").each(function(){
        // Using moment, we will get the Format of the date that the form is using.
	    var actualDate = moment().format(window.fs_formLocaleDate);
	    fs(this).val(actualDate);
    });
    
    return true;
}