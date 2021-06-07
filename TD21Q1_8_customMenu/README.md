## Updating Menu ##

Location of menu file that needs to be updated to have new menu items:

`C:\Program Files (x86)\Toon Boom Animation\Toon Boom Harmony 20 Premium\resources\menus.xml`

I the TD_8_CustomMenu Item between the original lines 660-661

### Original ###
```HTML
  </menu>
</menu>
```
### Updated ###
```HTML
  </menu>
      <menu id="TD_8_CustomMenu" text="TD_8_CustomMenu" >
      </menu>
</menu>
```

## Updating Packages ##

Harmony Packages location: ( this content will be searched through on launch of Harmony)

`C:\Program Files (x86)\Toon Boom Animation\Toon Boom Harmony 20 Premium\Plugins\ScriptingInterfaces\resources\packages`

move the folder TD_8_CustomMenu ( folder and contents ) into the above packages directory to have it initialised on relaunch of Harmony

https://github.com/toon-tools/TD_Course_2021_Q1/tree/main/TD_8_customMenu/TD_8_CustomMenu
