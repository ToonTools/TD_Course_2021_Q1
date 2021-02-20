
// Step 1----------
// get user selection
// create composite node
// connect selection to composite node

function addAndUseDiplay(){
    MessageLog.trace("addAndUseDisplays clicked")

    var mySelection     = selection.selectedNodes()
    
    if( mySelection.length == 0){
        MessageLog.trace("nothing selected, nothing to do...")
        return
    }

    var myNewComposite  = node.add("Top" , "myComposite" , "COMPOSITE" , 0, 0, 0)

    for( i = 0 ; i < mySelection.length ; i++){
        var selNode = mySelection[i]
        node.link(selNode, 0 , myNewComposite, i, false, true)
        //MessageLog.trace(selNode)
    }

    /*
    if( mySelection.length != 1){
        MessageLog.trace("sorry, im only handling 1 node at the moment")
        return
    }
    else{
        MessageLog.trace("node selected = " + mySelection[0])

        node.link(mySelection[0], 0 , myNewComposite, 0, false, true);
    }
    */
} 



// make composite near the source nodes
//  
// make it handle more than one item selected















// Step 2 ---------
// create display
// connect composite to display
// make display the current display
