/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, brackets */

define(function () {
    "use strict";
    /*
    Simple extension that adds a "File > New HTML Document" menu item
    to insert a base table line at the cursor position
    */
    var CommandManager = brackets.getModule("command/CommandManager"),
        EditorManager = brackets.getModule("editor/EditorManager"),
        Menus = brackets.getModule("command/Menus");

    function insertemailTabledata() {
        /* Insert the table line */
        // The Table line
        var emailTabledata = '<table cellpadding="0" cellspacing="0" border="0">'+
        '\n\t<tbody>\n\t\t<tr>\n\t\t\t<td></td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>';

        var editor = EditorManager.getFocusedEditor();
        if (editor) {
            // Insert the table line at the current cursor position
            var insertionPos = editor.getCursorPos();
            editor.document.replaceRange(emailTabledata, insertionPos);
        }
    }

    // Register extension in the File menu
    var EXTENSION_ID = "emailer.basetabledata";
    CommandManager.register("New HTML Document", EXTENSION_ID, insertemailTabledata);

    // Assign a keyboard shortcut
    var theMenu = Menus.getMenu(Menus.AppMenuBar.FILE_MENU);
    theMenu.addMenuItem(EXTENSION_ID, "Ctrl-Shift-T");
});
