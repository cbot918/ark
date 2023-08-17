const log = console.log


import { ToTokens } from "./compiler/ToTokens.js"
import { ToAst } from "./compiler/ToAst.js"
import { ToAsm } from "./compiler/ToAsm.js"
import { getContent } from "./compiler/Readfile.js"

const file = "./hello.ark"

const content = getContent(file)
const tokensObj = new ToTokens(content)
const astObj = new ToAst(tokensObj)
const asmObj = new ToAsm(astObj)

log(asmObj.getAsm())