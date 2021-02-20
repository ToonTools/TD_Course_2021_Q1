
// Step 1----------
// get user selection
// create composite node
// connect selection to composite node

function addAndUseDiplay(){
    MessageLog.trace("addAndUseDisplays clicked")

    var mySelection         = selection.selectedNodes()
    var invalidTypes        = ["PEG","DISPLAY"]
    
    //------------ Validation---------------------
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

    // -------------- Coordinate generation ----------------
    var xTotal  = 0
    var yMin    = -9999

    for( k in mySelection ){
        var selNodeX = node.coordX(mySelection[k])
        var selNodeY = node.coordY(mySelection[k])
        xTotal += selNodeX // same as xTotal = selNodeX + xTotal

        if( selNodeY > yMin){ 
            yMin = selNodeY 
        }
    }

    //------------ Composite Creation ---------------------------

    // Y should be 200 below lowest original selection
    // X should be exactly averate of selections x coordinates
    var compX   = xTotal/mySelection.length
    var compY   = yMin + 200
    var compZ   = 0

    var myNewComposite  = node.add("Top" , "myComposite" , "COMPOSITE" ,compX,compY,compZ)

    //------------- Connecting Composite to selection --------------------
    for( j = 0 ; j < mySelection.length ; j++){
        var selNode = mySelection[j]
        node.link(selNode, 0 , myNewComposite, j, false, true)
        //MessageLog.trace(selNode)
    }
} 



// make composite near the source nodes







// Step 2 ---------
// create display
// connect composite to display
// make display the current display
