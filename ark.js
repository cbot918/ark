const log = console.log


import { Tokenizer } from "./compiler/Tokenizer.js"
import { Parser } from "./compiler/Parser.js"
import { AsmGenerator } from "./compiler/AsmGenerator.js"
import { getContent } from "./compiler/Readfile.js"

const file = "./hello.ark"

const content = getContent(file) + "\0"
const tokensObj = new Tokenizer(content)
// const astObj = new Parser(tokensObj)
// const asmObj = new AsmGenerator(astObj)

tokensObj.get()