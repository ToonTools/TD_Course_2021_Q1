// user selects a node
// message log outputs information on:
//			node name
// 			node type


function getSelectionInformation(){

	// get user selection input
	var mySelection = selection.selectedNodes()
	if( mySelection.length > 0 ){
		// we have at least one node selected
		MessageLog.trace( " I have at least one node selected " )

		for(var i = 0 ; i < mySelection.length ; i++ ){
			
			var nodeName = mySelection[i]
			//MessageLog.trace("nodeName = " + nodeName) 
			
			var nodeType = node.type(nodeName)
			//MessageLog.trace("nodeType = " + nodeType) 
			
			var myMessage = "\t"+i+"\t"+ nodeName + "\t" + nodeType
			MessageLog.trace(myMessage)
		}

		// if selection is a composite
		if(node.type(mySelection[0]) == "COMPOSITE"){
			//MessageLog.trace( "selection is a composite")
			var mySelectedNode = mySelection[0]
			var specifficFrame = 1
			var currentCompositeMode = node.getAttr(mySelectedNode, specifficFrame, "compositeMode")
			MessageLog.trace("current composite mode = " + currentCompositeMode.textValue())

		}
		// then also return the value of the compositeMode attribute

		//



	}
	else{
		// we have no nodes selected
		MessageLog.trace( " I have nothing selected " )
	}



// check at least 1 node is selected

// go through all selected nodes

// pring out their name
// print out their type
}
