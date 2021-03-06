// script to be called by "scripted_masterController" node

// when the controller is shown what should I do?
Controller.onShowControl = function(){

    Controller.controls = []
    var valAttr = node.getAttr(Controller.node, frame.current(), "checkbox_value")
    var checkBox = new CheckboxWidget({
        data:           valAttr,
        position :      Point2D(0.,0.,),
        screen_space :  false,
        outer_color :   ColorRGBA(0,0,0,255),
        on_color:       ColorRGBA(0,255,0,127),
        off_color:      ColorRGBA(255,0,0,127),
        size:           1
    } )

    checkBox.valueChanged.connect(toggleValue)
    Controller.controls = [checkBox]
}

// when the controller is hidden what should I do?
Controller.onHideControl = function(){
    MessageLog.trace("Master Controller is hidden")
    node.setTextAttr(Controller.node, "checkbox_value", frame.current(), false)
}


// when value is true what should I do?
function toggleValue(valAttr){
    MessageLog.trace("button has been pressed")
}

// when value is false what should I do?


