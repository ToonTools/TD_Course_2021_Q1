function configure(packageFolder, packageName)
{
  if (about.isPaintMode())
    return;

 
  //---------------------------
  //Create Menu items
  ScriptManager.addMenuItem( { targetMenuId : "TD_8_CustomMenu",
                               id           : "TD_8_CustomMenuItem_1",
                               text         : "Say Hi",
                               action       : "SayHi in ./configure.js",
                               } );
  ScriptManager.addMenuItem( { targetMenuId : "TD_8_CustomMenu",
                               id           : "TD_8_CustomMenuItem_2",
                               text         : "Hello World",
                               action       : "helloWorld in TD_1_helloWorld.js",
                               } );
  ScriptManager.addMenuItem( { targetMenuId : "TD_8_CustomMenu",
                               id           : "TD_8_CustomMenuItem_3",
                               text         : "Test Message",
                               action       : "testFunction in test.js",
                               } );
  
}

//Optional init function (not mandatory)
function init()
{
  MessageLog.trace("Run your initialization script here!");
}

function SayHi(){
  MessageBox.information("Hi!")
}

exports.configure = configure;
exports.init = init;
