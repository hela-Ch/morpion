const { test, expect } = require("@jest/globals");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


test('check that addMark able add mark to a cell',()=>{
    const dom = new JSDOM(`<!DOCTYPE html>
    <table>
    <tr>
       <td id="a1" class="cell"> </td>
       <td id="b1" class="cell"> </td>
    </tr>
    </table>
    `);
   
    require('./script.js');
    //clickHandler = jest.fn();
    const cellElts = dom.window.document.getElementsByClassName('cell');
    
    // Array.from(cellElts).forEach(elt=> {
    //   elt.addEventListener("click", clickHandler);
    // });
    cellElt = cellElts[0];
    cellElt.click();
    expect(cellElt.textContent).toBe('X');
    
});