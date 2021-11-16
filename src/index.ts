const axios = require('axios').default;
import { Syntax, Expiry_Days } from '../lib/Interfaces';

let syntaxes = ["abap", "apl", "abnf", "as3", "as", "ada", "adl", "agda", "aheui", "alloy", "at", "ampl", "html+ng2", "ng2", "antlr-as", "antlr-csharp", "antlr-cpp", "antlr-java", "antlr", "antlr-objc", "antlr-perl", "antlr-python", "antlr-ruby", "apacheconf", "applescript", "arduino", "aspectj", "asy", "augeas", "autoit", "ahk", "awk", "bbcbasic", "bbcode", "bc", "bst", "basemake", "bash", "console", "bat", "befunge", "bib", "blitzbasic", "blitzmax", "bnf", "boa", "boo", "boogie", "brainfuck", "bugs", "camkes", "c", "cmake", "c-objdump", "cpsa", "aspx-cs", "csharp", "ca65", "cadl", "capdl", "capnp", "cbmbas", "ceylon", "cfengine3", "chai", "chapel", "charmci", "html+cheetah", "js+cheetah", "cheetah", "xml+cheetah", "cirru", "clay", "clean", "clojure", "clojurescript", "cobolfree", "cobol", "coffee-script", "cfc", "cfm", "cfs", "common-lisp", "componentpascal", "coq", "cpp", "cpp-objdump", "crmsh", "croc", "cryptol", "cr", "csound-document", "csound", "csound-score", "css+django", "css+erb", "css+genshitext", "css", "css+php", "css+smarty", "cuda", "cypher", "cython", "d", "d-objdump", "dpatch", "dart", "dasm16", "control", "delphi", "dg", "diff", "django", "docker", "dtd", "duel", "dylan-console", "dylan", "dylan-lid", "ecl", "ec", "earl-grey", "easytrieve", "ebnf", "eiffel", "iex", "elixir", "elm", "emacs", "email", "erb", "erlang", "erl", "html+evoque", "evoque", "xml+evoque", "ezhil", "fsharp", "factor", "fancy", "fan", "felix", "fennel", "fish", "flatline", "floscript", "forth", "fortranfixed", "fortran", "foxpro", "freefem", "gap", "glsl", "gas", "genshi", "genshitext", "pot", "cucumber", "gnuplot", "go", "golo", "gooddata-cl", "gosu", "gst", "groff", "groovy", "hlsl", "haml", "html+handlebars", "handlebars", "haskell", "hx", "hexdump", "hsail", "hspec", "html+django", "html+genshi", "html", "html+php", "html+smarty", "http", "haxeml", "hylang", "hybris", "idl", "icon", "idris", "igor", "inform6", "i6t", "inform7", "ini", "io", "ioke", "irc", "isabelle", "j", "jags", "jasmin", "java", "js+django", "js+erb", "js+genshitext", "js", "js+php", "js+smarty", "jcl", "jsgf", "json-object", "jsonld", "json", "jsp", "jlcon", "julia", "juttle", "kal", "kconfig", "kmsg", "koka", "kotlin", "lsl", "css+lasso", "html+lasso", "js+lasso", "lasso", "xml+lasso", "lean", "less", "lighty", "limbo", "liquid", "lagda", "lcry", "lhs", "lidr", "live-script", "llvm", "llvm-mir-body", "llvm-mir", "logos", "logtalk", "lua", "mime", "moocode", "doscon", "make", "css+mako", "html+mako", "js+mako", "mako", "xml+mako", "maql", "md", "mask", "mason", "mathematica", "matlab", "matlabsession", "minid", "ms", "modelica", "modula2", "trac-wiki", "monkey", "monte", "moon", "mosel", "css+mozpreproc", "mozhashpreproc", "javascript+mozpreproc", "mozpercentpreproc", "xul+mozpreproc", "mql", "mscgen", "mupad", "mxml", "mysql", "css+myghty", "html+myghty", "js+myghty", "myghty", "xml+myghty", "ncl", "nsis", "nasm", "objdump-nasm", "nemerle", "nesc", "newlisp", "newspeak", "nginx", "nim", "nit", "nixos", "notmuch", "nusmv", "numpy", "objdump", "objective-c", "objective-c++", "objective-j", "ocaml", "octave", "odin", "ooc", "opa", "openedge", "pacmanconf", "pan", "parasail", "pawn", "peg", "perl6", "perl", "php", "pig", "pike", "pkgconfig", "plpgsql", "pony", "postscript", "psql", "postgresql", "pov", "powershell", "ps1con", "praat", "prolog", "properties", "protobuf", "pug", "puppet", "pypylog", "python2", "py2tb", "pycon", "python", "pytb", "qbasic", "qvto", "qml", "rconsole", "rnc", "spec", "racket", "ragel-c", "ragel-cpp", "ragel-d", "ragel-em", "ragel-java", "ragel", "ragel-objc", "ragel-ruby", "raw", "rd", "reason", "rebol", "red", "redcode", "registry", "resource", "rexx", "rhtml", "ride", "roboconf-graph", "roboconf-instances", "robotframework", "rql", "rsl", "rst", "rts", "rbcon", "rb", "rust", "sas", "splus", "sml", "sarl", "sass", "scala", "scaml", "scdoc", "scheme", "scilab", "scss", "shexc", "shen", "sieve", "silver", "slash", "slim", "slurm", "smali", "smalltalk", "sgf", "smarty", "snobol", "snowball", "solidity", "sp", "sourceslist", "sparql", "sql", "sqlite3", "squidconf", "ssp", "stan", "stata", "sc", "swift", "swig", "systemverilog", "tap", "toml", "tads3", "tasm", "tcl", "tcsh", "tcshcon", "tea", "ttl", "termcap", "terminfo", "terraform", "tex", "text", "thrift", "todotxt", "tsql", "treetop", "turtle", "html+twig", "twig", "ts", "typoscriptcssdata", "typoscripthtmldata", "typoscript", "ucode", "unicon", "urbiscript", "usd", "vbscript", "vcl", "vclsnippets", "vctreestatus", "vgl", "vala", "aspx-vb", "vb.net", "html+velocity", "velocity", "xml+velocity", "verilog", "vhdl", "vim", "wdiff", "webidl", "whiley", "x10", "xquery", "xml+django", "xml+erb", "xml", "xml+php", "xml+smarty", "xorg.conf", "xslt", "xtend", "extempore", "yaml+jinja", "yaml", "zeek", "zephir", "zig"]

function delay(n: number): void {
	n = n || 2000;
	return new Promise(done => {
		setTimeout(() => {
			done();
		}, n);
	});
}

function isValidSize(data: string): boolean {
	if (new Blob([data]).size < 250000) {
		return true;
	}
	else {
		return false;
	}
}

function isValidSyntax(syntax: string): boolean {
	if (syntaxes.includes(syntax)) {
		return true;
	}
	else {
		return false;
	}
}

function isValidExpiry(days: number): boolean {
	if (days >= 1 && days <= 365) {
		return true;
	}
	else {
		return false;
	}
}
//const form = new FormData();
/**
* Creates Paste on dpaste.org
* @async
* @function CreatePaste
* @param {string} content - The paste data
* @param {string} filename - The title for Paste
* @param {Syntax} syntax - Paste encoding
* @param {Expiry_Days} expiry_days - Expiry duration of the paste
* @returns {Promise<String>}
*/
export async function CreatePaste(content: string, filename: string, syntax: Syntax = 'text', expiry_days: Expiry_Days = 7): Promise<String> {
	delay(1000);
	try {
		if (isValidSize(content) && isValidSyntax(syntax) && isValidExpiry(expiry_days)) {
			const { data } = await axios({
				url: "https://dpaste.com/api/v2/",
				method: 'POST',
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				data: "content=" + encodeURIComponent(content) + "&syntax=" + encodeURIComponent(syntax) + "&title=" + encodeURIComponent(filename) + "&expiry_days" + encodeURIComponent(expiry_days),
			});
			return data;
		}
		else {
			if (isValidSize(content)) {
				throw `Maximum allowed content size is 250,000 bytes. Content Size: ${new Blob([content]).size} bytes`;
			}
			else if (isValidSyntax(syntax)) {
				throw `Syntax must be from https://dpaste.com/api/v2/syntax-choices/. Given Syntax: ${syntax}`;
			}
			else if (isValidExpiry(expiry_days)) {
				throw `Expiry days must be greater than 1 day & not exceed 365 days. Given Days: ${expiry_days}`;
			}
			else {
				throw `Some unknown error. Inputs are valid & within range, problem might be in backend.\nContent Size: ${new Blob([content]).size} bytes.\nGiven Syntax: "${syntax}".\nGiven Days: ${expiry_days}`;
			}
		};
	}
	catch (error) {
		return error;
	}
}

/**
* Gets Paste from dpaste.org
* @async
* @function GetPaste
* @param {string} url - The dpaste url
* @returns {string}
*/
export async function GetPaste(url: string): Promise<String> {
	delay(1000);
	try {
		const { data } = await axios.get(`${url}.txt`);
		return (data);
	}
	catch (error) {
		return "Invalid Link";
	}
}
