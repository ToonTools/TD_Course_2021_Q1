function sceneInformation(){


	// tell me the name of the current scene
	var sceneName = scene.currentScene()
	//MessageLog.trace(typeof(sceneName));


	// tell me the number of nodes selected
	var mySelection =   selection.selectedNodes()
	var mySelectionLength = mySelection.length

	// print out all of the nodes selected in a list

	MessageLog.trace("	\nScene name = " 
						+ sceneName 
						+ "\nI have "
						+ mySelectionLength 
						+ " nodes selected.\nMy Selection = " 
						+ mySelection)

}
