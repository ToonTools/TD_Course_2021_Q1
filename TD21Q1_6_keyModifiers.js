function isShiftPresset(){
	var check = KeyModifiers.IsShiftPressed()

	if ( check ){
		MessageBox.information("Shift is pressed")
	}
    else{
        MessageBox.information("Shift has NOT been pressed")
    }
}