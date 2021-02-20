
// Step 1----------
// get user selection
// create composite node
// connect selection to composite node

function addAndUseDiplay(){
    MessageLog.trace("addAndUseDisplays clicked")

    var mySelection = selection.selectedNodes()

    if( mySelection.length != 1){
        MessageLog.trace("sorry, im only handling 1 node at the moment")
        return
    }
    else{
        MessageLog.trace("node selected = " + mySelection[0])
    }


    node.add("Top" , "myComposite" , "COMPOSITE" , 0, 0, 0)

} 
















// Step 2 ---------
// create display
// connect composite to display
// make display the current display
