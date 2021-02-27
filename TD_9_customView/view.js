var uiUtilLib = require(specialFolders.resource+"/scripts/utilities/ui/TB_UiUtils.js")

function initView()
{
    try{
        var scriptedView = ScriptManager.getView("TD_9_customView")
        scriptedView.minimumWidth = UiLoader.dpiScale(375)
        scriptedView.setPreferredLayoutSize(UiLoader.dpiScale(320), (UiLoader.dpiScale(380)))

        var ui = ScriptManger.loadViewUI(scriptedView, "./TD_9_customView.ui")

        var customFunction = function (){

            MessageBox.information("This is the action for button1 !")

        }

        ui.button1.clicked(this, customFunction )

        ui.show()
    }

    catch(e)
    {
        MessageLog.trace("Error : " + e )
        print("Error : " + e)
    }
}

exports.initView = initView;