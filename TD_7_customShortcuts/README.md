The shortcuts file lives here:

`C:\Program Files (x86)\Toon Boom Animation\Toon Boom Harmony 20 Premium\resources\shortcuts.xml`

It needs admin priveleges to be edited so should I made a backup of it and then moved it to a seperate location to add the following lines ( at lines 7-11 in the shortcuts.xml file) :

```HTML
// TD Custom
<category id="TD_Custom" text="TD_Custom">
  <shortcut checkable="false" id="Hello_World" itemParameter="helloWorld in TD_1_helloWorld.js" longDesc="Excecute the Hello World script" responder="scriptResponder" slot="onActionExecuteScript(QString)" text="Hello World" value="`"/>
</category>
```

It is referencing the TD_1_hellowWorld.js file we created in a previous session
