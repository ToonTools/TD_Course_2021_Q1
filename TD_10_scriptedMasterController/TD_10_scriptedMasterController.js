Controller.onShowControl = function(){  

    Controller.controls = [];
   var valAttr = node.getAttr(Controller.node, frame.current(), "checkbox_value");
   var checkBox = new  CheckboxWidget({ 

        data: valAttr,
           position : Point2d(0.,0.),
           screen_space : false,
           outer_color : ColorRGBA(0,0,0,255),
           on_color : ColorRGBA(0,255,0,128),
           off_color : ColorRGBA(255,0,0,128),
           size : 1
   });

   checkBox.valueChanged.connect(toggleValue);
 
     Controller.controls = [checkBox];
}

Controller.onHideControl = function(){  

   MessageLog.trace("Master Controller is hidden");
   node.setTextAttr(Controller.node, "checkboxvalue",  frame.current(), false);
}

// when value is true what should I do?
function toggleValue(valAttr){
    try{
        MessageLog.trace("button has been pressed")

        MessageLog.trace("value is : " + valAttr)
    
        var type = ["CurveModule","FreeFormDeformation"]
        var nodesToShow = node.getNodes(type)
        
        if(valAttr){
            for ( var i = 0 ; i < nodesToShow.length ; i++){
                selection.addNodeToSelection(nodesToShow[i])
            }
    
            Action.perform("onActionShowSelectedDeformers()", "miniPegModuleResponder");
            selection.clearSelection()
        }else{
    
            selection.clearSelection()
            selection.addNodeToSelection(Controller.node)
            Action.perform("onActionShowSelectedDeformers()", "miniPegModuleResponder");
        }
    }
    catch(error){
        MessageLog.trace("Error : " + error )
    }
}

// when value is false what should I do?


