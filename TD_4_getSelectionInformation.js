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
