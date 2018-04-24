//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

WScript.LoadScriptFile("functionConflictIncl.js");
eval("function bar(){function foo(){};}; bar(); ");
function foo(){}; //ok
var foo;          //ok
console.log(this.foo);
