/*
 * Copyright (c) ghgltggamer 2025
 * Written by ghgltggamer
 * Licensed under the MIT Licnese
 * Checkout the README.md for more information
 * LWCE - Light Web Code Editor
*/

// This file is responsible for greceXfluid Editor

// Source
const LWCE_EDITOR_GREECE_X_FLUID = 1; // Define with version
const LWCE_EDITOR_PERMISSION_WRITE = 2; // write permission
const LWCE_EDITOR_PERMISSION_VIEW = 3; // view permission

// Config
let lwce_greece_x_fluid_highlightables = [
    // ["print", "orange"],
    // [";", "red"]
    // ["'", "lime"],
]; //Warning: Don't edit directly!
let lwce_greece_x_fluid_default_color = "black";

// Make a div be the editor
function lwce_greece_x_fluid_make_editor (target, permission = LWCE_EDITOR_PERMISSION_VIEW){
    if (document.getElementById(target) === null) console.error ("LWCE Can't make the editor <lwce.texteditor.greecexfluid?target=" + target + "> is null.");
    else {
        const make_Target = document.getElementById(target);
        if (permission === LWCE_EDITOR_PERMISSION_VIEW) lwce_greece_x_fluid_call_edit(make_Target), make_Target.contentEditable = false;
        else if (permission === LWCE_EDITOR_PERMISSION_WRITE) lwce_greece_x_fluid_call_edit(make_Target), make_Target.contentEditable = true;
        else console.error("LWCE Can't make the editor <lwce.texteditor.greecexfluid?permission=" + permission + "> is unknown.");
    }
}

function lwce_greece_x_fluid_call_edit (node){ // Warning: Don't call directly!
    let fetch_Content = node.innerHTML;
    node.contentEditable = false;
    const marker = "⬤";
    let marker_open = false;
    for (let i = 0;i < lwce_greece_x_fluid_highlightables.length;i++){
        if (lwce_greece_x_fluid_highlightables[i][1] === undefined){ console.error("LWCE Got a critical error! Can't complete the action edit when highlightables are corrupted/invalid."); break; }
        for (let x = 0;x < fetch_Content.length;x++){
            // console.log (fetch_Content[x] + ", ") // TOKENS
            if (fetch_Content[x] === marker && !marker_open) marker_open = true;
            else if (fetch_Content[x] === marker && marker_open) marker_open = false;
            else if (lwce_greece_x_fluid_highlightables[i][0] === (fetch_Content.substr(x, lwce_greece_x_fluid_highlightables[i][0].length)) && !marker_open){
                fetch_Content = (fetch_Content.substring(0, x) + `${marker}<span style="color: ${lwce_greece_x_fluid_highlightables[i][1]};">${lwce_greece_x_fluid_highlightables[i][0]}</span>${marker}` + fetch_Content.substring(x + lwce_greece_x_fluid_highlightables[i][0].length));
                x--; // decrease the x to mark a marker from exact same location
            }
            // console.log("len: " + lwce_greece_x_fluid_highlightables[i][0].length)
            // console.log ("index " + x + ", `" + (fetch_Content.substr(x, lwce_greece_x_fluid_highlightables[i][0].length)) + "`")
        }
        // fetch_Content = fetch_Content.replaceAll(lwce_greece_x_fluid_highlightables[i][0], `<span style="color: ${lwce_greece_x_fluid_highlightables[i][1]};">${lwce_greece_x_fluid_highlightables[i][0]}</span>`);
        // let val = `<span style="color: ${lwce_greece_x_fluid_highlightables[i][1]};">${lwce_greece_x_fluid_highlightables[i][0]}</span>`;
        // console.log(val)
    }
    fetch_Content = fetch_Content.replaceAll(marker, ""); // finally remove the markers once the work is done
    node.innerHTML = fetch_Content;
}


function lwce_greece_x_fluid_mkconfig(key, color){
    lwce_greece_x_fluid_highlightables.push([key, color]);
}

// Ended by ghgltggamer - on 3:44 PM 2/11/25 , Started and finished on same day

// Modification With New Function on 09:45 AM , 2.12.25
function lwce_greece_x_fluid_rmconfig(key){
    let unidef_err = 0;
    for (let i = 0;i < lwce_greece_x_fluid_highlightables.length;i++){
        if (lwce_greece_x_fluid_highlightables[i][0] === key) lwce_greece_x_fluid_highlightables[i] = ['<lwce.editor.greecexfluid.highlighter.mkunidef>=true', 'black'], unidef_err = 0;
        else unidef_err = 1;
    }
    if (unidef_err) console.error('LWCE <err.unidef_err?key=' + key + '> was not found (unidef).');
}


function lwce_greece_x_fluid_clconfig(){
    for (let i = 0;i < lwce_greece_x_fluid_highlightables.length;i++){
        lwce_greece_x_fluid_highlightables[i] = ['<lwce.editor.greecexfluid.highlighter.mkunidef>=true', 'black'];    
    }
}


function lwce_greece_x_fluid_defconfig(){
    for (let i = 0;i < lwce_greece_x_fluid_highlightables.length;i++){
        if (lwce_greece_x_fluid_highlightables[i][1] === null) {console.error("LWCE Got a critical error! Can't complete the action edit when highlightables are corrupted/invalid."); break;}
            lwce_greece_x_fluid_highlightables[i][1] = lwce_greece_x_fluid_default_color;
    }
}


// Modification With New Function - End on 10:09 AM , 2.12.25