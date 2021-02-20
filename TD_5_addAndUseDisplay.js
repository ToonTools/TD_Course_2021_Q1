
// Step 1----------
// get user selection
// create composite node
// connect selection to composite node

function addAndUseDiplay(){
    MessageLog.trace("addAndUseDisplays clicked")

    var mySelection         = selection.selectedNodes()
    var invalidTypes        = ["PEG","DISPLAY"]
    
    if( mySelection.length == 0){
        MessageLog.trace("nothing selected, nothing to do...")
        return
    }
    for( i = 0 ; i < mySelection.length ; i++){
        // is this node a type that can be connected to a composite?
        // if any are not then return 
        var nodeName    = mySelection[i]
        var selType     = node.type(nodeName)     
        
        for( invalid_intex in invalidTypes ){
            var this_invalidType = invalidTypes[invalid_intex]
            if( selType == this_invalidType ){
                MessageLog.trace("at least one of the selected types can not be connected to a composite")
                return 
            }
        }
    }

    var myNewComposite  = node.add("Top" , "myComposite" , "COMPOSITE" , 0, 0, 0)

    for( j = 0 ; j < mySelection.length ; j++){
        var selNode = mySelection[j]
        node.link(selNode, 0 , myNewComposite, j, false, true)
        //MessageLog.trace(selNode)
    }
} 



// make composite near the source nodes
// validate selected nodes






// Step 2 ---------
// create display
// connect composite to display
// make display the current display
